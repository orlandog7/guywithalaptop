'use client';

import { useEffect, useState } from 'react';
import {
  ResponsiveContainer,
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid
} from 'recharts';

const SERIES_OPTIONS = [
  { id: 'UMCSENT', label: 'Consumer Sentiment' },
  { id: 'UNRATE', label: 'Unemployment Rate' },
  { id: 'CSUSHPISA', label: 'U.S. Home Price Index' },
];

export default function FredChart({ seriesId: propSeriesId, compact = false }) {
  const [data, setData] = useState([]);
  const [seriesId, setSeriesId] = useState(propSeriesId || SERIES_OPTIONS[0].id);
  const [years, setYears] = useState(compact ? 1 : 2);
  const [error, setError] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setError(false);
        const res = await fetch(`/api/fred?series_id=${seriesId}`);
        const json = await res.json();

        if (!json?.data || !Array.isArray(json.data)) {
          console.error('Unexpected FRED API response:', json);
          setData([]);
          setError(true);
          return;
        }

        const now = new Date();
        const cutoff = new Date();
        cutoff.setFullYear(now.getFullYear() - years);

        const filteredData = json.data.filter((item) => {
          const itemDate = new Date(item.date);
          return itemDate >= cutoff;
        });

        setData(filteredData);
      } catch (err) {
        console.error('Error fetching FRED data:', err);
        setError(true);
        setData([]);
      }
    };

    fetchData();
  }, [seriesId, years]);

  const formatDate = (str) => {
    const date = new Date(str);
    return `${date.getFullYear()}-${String(date.getMonth() + 1).padStart(2, '0')}`;
  };

  const currentLabel = SERIES_OPTIONS.find((s) => s.id === seriesId)?.label || seriesId;

  return (
    <div className="bg-white dark:bg-gray-800 p-4 rounded-xl shadow-md mt-6">
      {!compact && (
        <>
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-4">
            <h3 className="text-lg font-semibold text-slate-800 dark:text-slate-100">
              {currentLabel} (Last {years} Year{years > 1 ? 's' : ''})
            </h3>
            <div className="flex flex-col sm:flex-row gap-3">
              <select
                value={seriesId}
                onChange={(e) => setSeriesId(e.target.value)}
                className="text-sm p-2 rounded bg-gray-100 dark:bg-gray-700 text-slate-700 dark:text-white"
              >
                {SERIES_OPTIONS.map((s) => (
                  <option key={s.id} value={s.id}>
                    {s.label}
                  </option>
                ))}
              </select>
              <select
                value={years}
                onChange={(e) => setYears(parseInt(e.target.value))}
                className="text-sm p-2 rounded bg-gray-100 dark:bg-gray-700 text-slate-700 dark:text-white"
              >
                <option value={1}>1 Year</option>
                <option value={2}>2 Years</option>
                <option value={5}>5 Years</option>
                <option value={10}>10 Years</option>
              </select>
            </div>
          </div>

          <div className="bg-blue-50 dark:bg-blue-900 text-blue-800 dark:text-blue-300 text-sm p-3 rounded-md border border-blue-200 dark:border-blue-700 mb-4">
            Live economic data is fetched from the <span className="font-medium">FRED API</span> and delivered via <span className="font-medium">Azure Functions</span>.
          </div>
        </>
      )}

      {error || data.length === 0 ? (
        <div className="text-center text-sm text-slate-500 dark:text-slate-400 py-12">
          No data available.
        </div>
      ) : (
        <ResponsiveContainer width="100%" height={compact ? 200 : 300}>
          <LineChart data={data} margin={{ top: 10, right: 20, bottom: 20, left: 0 }}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="date" tickFormatter={formatDate} minTickGap={20} />
            <YAxis domain={['auto', 'auto']} />
            <Tooltip
              labelFormatter={(label) => `Date: ${formatDate(label)}`}
              formatter={(value) => [`${value}`, 'Value']}
            />
            <Line
              type="monotone"
              dataKey="value"
              stroke="#3B82F6"
              strokeWidth={2}
              dot={false}
            />
          </LineChart>
        </ResponsiveContainer>
      )}
    </div>
  );
}
