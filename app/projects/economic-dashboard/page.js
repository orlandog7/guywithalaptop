import Layout from '@/components/Layout';
import FredChart from '@/components/FredChart';

export const metadata = {
  title: 'U.S. Economic Dashboard | Orlando G.',
  description: 'An AI-powered dashboard visualizing real-time U.S. economic sentiment using FRED data.',
};

export default function EconomicDashboardProject() {
  return (
    <Layout>
      <main className="min-h-screen bg-gray-100 dark:bg-gray-900 p-6 md:p-12 text-slate-700 dark:text-gray-100">
        <div className="max-w-4xl mx-auto space-y-6">
          <h1 className="text-4xl font-bold text-slate-800 dark:text-white">
            U.S. Economic Sentiment Dashboard
          </h1>

          <p className="text-slate-700 dark:text-slate-300">
            This demo uses the <span className="font-semibold text-blue-500 dark:text-blue-400">FRED API</span> (Federal Reserve Economic Data)
            to visualize real-world sentiment and employment trends. It pulls live data from economic indicators like the University of Michigan
            Consumer Sentiment Index.
          </p>

          <p className="text-slate-700 dark:text-slate-300">
            The tool lets you explore recent changes and trends interactively, filtered by a selectable time window.
            It highlights how economic data can be used to build real-time, data-driven insights for decision-making.
          </p>

          <FredChart seriesId="UMCSENT" />
        </div>
      </main>
    </Layout>
  );
}
