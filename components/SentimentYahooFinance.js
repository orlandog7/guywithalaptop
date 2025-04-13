'use client';
import { useEffect, useState } from 'react';

export default function SentimentYahooFinance({ compact = false }) {
  const [data, setData] = useState([]);
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchSentiment = async () => {
      try {
        const res = await fetch('/api/sentiment-yahoo-finance',);
        const json = await res.json();
        if (!json.results) throw new Error();
        setData(compact ? json.results.slice(0, 3) : json.results);
      } catch (err) {
        setError(true);
      } finally {
        setLoading(false);
      }
    };
    fetchSentiment();
  }, [compact]);

  const getBadge = (sentiment) => {
    switch (sentiment) {
      case 'positive':
        return <span className="text-green-600 font-semibold">🟢 Bullish</span>;
      case 'negative':
        return <span className="text-red-500 font-semibold">🔴 Bearish</span>;
      default:
        return <span className="text-yellow-500 font-semibold">🤔 Mixed</span>;
    }
  };

  return (
    <div className="bg-white dark:bg-gray-800 p-4 rounded-xl shadow-md space-y-4">
      {loading ? (
        <p>Loading sentiment data...</p>
      ) : error ? (
        <p className="text-red-500">Error fetching sentiment.</p>
      ) : (
        <>
          {!compact && (
            <div className="bg-blue-50 dark:bg-blue-900 text-blue-800 dark:text-blue-300 text-sm p-3 rounded-md border border-blue-200 dark:border-blue-700">
              Live sentiment data is pulled from <span className="font-medium">Yahoo Finance</span> and analyzed using <span className="font-medium">Azure AI</span>. Served via <span className="font-medium">Azure Functions</span>.
            </div>
          )}
          <ul className="space-y-4">
            {data.map((item, idx) => (
              <li key={idx} className="border-b pb-2 border-slate-300 dark:border-slate-600">
                <p className="text-sm text-slate-800 dark:text-slate-100">
                  {compact && item.text.length > 100
                    ? item.text.slice(0, 100) + '...'
                    : item.text}
                </p>
                <p className="text-sm text-slate-600 dark:text-slate-300 mt-1">
                  Sentiment: {getBadge(item.sentiment)} —{' '}
                  <span className="text-xs">
                    Pos: {(item.confidence.positive * 100).toFixed(1)}%, Neg:{' '}
                    {(item.confidence.negative * 100).toFixed(1)}%, Neu:{' '}
                    {(item.confidence.neutral * 100).toFixed(1)}%
                  </span>
                </p>
              </li>
            ))}
          </ul>
        </>
      )}
    </div>
  );
}
