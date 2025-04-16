// app/projects/sentiment-yahoo-finance/page.js
import Layout from '@/components/Layout';
import SentimentYahooFinance from '@/components/SentimentYahooFinance';

export const metadata = {
  title: 'Sentiment Yahoo Finance | Orlando G.',
  description:
    'A live sentiment analysis demo that fetches tweets on #StockMarket and scores them with Azure AI.',
};

export default function SentimentYahooFinancePage() {
  return (
    <Layout>
      <main className="min-h-screen bg-gray-100 dark:bg-gray-900 p-6 md:p-12 text-slate-700 dark:text-gray-100">
        <div className="max-w-4xl mx-auto space-y-10">
          <header>
            <h1 className="text-4xl font-bold text-slate-800 dark:text-white">
              Sentiment Analysis of Yahoo Finance
            </h1>
            <p className="mt-2 text-lg text-slate-600 dark:text-slate-300">
              This dashboard analyzes real-time headlines from <span className="font-medium text-blue-500">Yahoo Finance using Azure AI.</span>
            </p>
            <p className="mt-2 text-lg text-slate-600 dark:text-slate-300">
              It tends to lean neutral unless there's clear emotional language.
            </p>
            
          </header>

          <section>
            <h2 className="text-2xl font-semibold mb-4 text-blue-500 dark:text-blue-400">
              Live Sentiment Preview
            </h2>
            <SentimentYahooFinance />
          </section>
        </div>
      </main>
    </Layout>
  );
}
