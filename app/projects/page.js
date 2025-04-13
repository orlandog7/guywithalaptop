// app/projects/page.js
import Layout from '@/components/Layout';
import Link from 'next/link';

export const metadata = {
  title: 'Projects | A Guy With a Laptop',
  description: 'Explore AI and cloud-powered demo projects built by Orlando Gonzalez.',
};

export default function ProjectsPage() {
  return (
    <Layout>
      <main className="min-h-screen bg-gray-100 dark:bg-gray-900 p-6 md:p-12 text-slate-700 dark:text-gray-100">
        <div className="max-w-4xl mx-auto space-y-10">
          <header className="mb-6">
            <h1 className="text-4xl font-bold text-slate-800 dark:text-white">Demo Projects</h1>
            <p className="mt-2 text-lg text-slate-600 dark:text-slate-300">
              Explore hands-on applications of AI, cloud services, and real-time data visualization.
            </p>
          </header>

          {/* AI Customer Support */}
          <div className="bg-white dark:bg-gray-800 rounded-xl shadow-md p-6 space-y-2">
            <h2 className="text-2xl font-semibold text-blue-500 dark:text-blue-400">
              AI-Powered Customer Support Assistant
            </h2>
            <p>
              A conversational assistant powered by Azure Language Studio that answers common support questions in real time.
            </p>
            <Link
              href="/projects/ai-support-assistant"
              className="inline-block text-blue-600 dark:text-blue-400 hover:underline font-medium mt-2"
            >
              View Project →
            </Link>
          </div>

            {/* SentimentYahooFinance */}
            <div className="bg-white dark:bg-gray-800 rounded-xl shadow-md p-6 space-y-2">
            <h2 className="text-2xl font-semibold text-blue-500 dark:text-blue-400">
              AI-Powered Sentiment Analysis
            </h2>
            <p>
              A live sentiment analysis demo using Azure AI to score headlines from Yahoo Finance’s RSS feed and visualize market emotion.
            </p>
            <Link
              href="/projects/sentiment-yahoo-finance"
              className="inline-block text-blue-600 dark:text-blue-400 hover:underline font-medium mt-2"
            >
              View Project →
            </Link>
          </div>

          {/* Economic Dashboard */}
          <div className="bg-white dark:bg-gray-800 rounded-xl shadow-md p-6 space-y-2">
            <h2 className="text-2xl font-semibold text-blue-500 dark:text-blue-400">
              U.S. Economic Sentiment Dashboard
            </h2>
            <p>
              A dashboard using live economic indicators from the FRED API, including consumer sentiment and employment trends.
            </p>
            <Link
              href="/projects/economic-dashboard"
              className="inline-block text-blue-600 dark:text-blue-400 hover:underline font-medium mt-2"
            >
              View Project →
            </Link>
          </div>

            {/* Portfolio Build Demo */}
            <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-md space-y-4">
              <h3 className="text-xl font-bold text-blue-500 dark:text-blue-400">
                Portfolio Site (Built with Azure & Next.js)
              </h3>
              <p className="text-slate-700 dark:text-slate-300">
                This site was built using modern tools like Next.js, Tailwind, Azure Static Web Apps, and GitHub CI/CD. It features live AI demos, reusable components, and a custom domain hosted on Azure.
              </p>
              <Link
                href="/projects/portfolio-build"
                className="inline-block mt-2 text-blue-600 dark:text-blue-400 hover:underline font-medium"
              >
                View Project →
              </Link>
            </div>
            
        </div>
      </main>
    </Layout>
  );
}
