import Layout from '@/components/Layout';
import QuestionAnswering from '@/components/QuestionAnswering';

export const metadata = {
  title: 'AI Customer Support Assistant | Orlando G.',
  description:
    'An AI-powered assistant demo built with Azure Language Studio that answers real-world customer support questions.',
};

export default function AiSupportPage() {
  return (
    <Layout>
      <main className="min-h-screen bg-gray-100 dark:bg-gray-900 p-6 md:p-12 text-slate-700 dark:text-gray-100">
        <div className="max-w-4xl mx-auto space-y-10">
          <header>
            <h1 className="text-4xl font-bold text-slate-800 dark:text-white">
              AI-Powered Customer Support Assistant
            </h1>
            <p className="mt-2 text-lg text-slate-600 dark:text-slate-300">
              This demo uses Azure Cognitive Services to simulate a real-time support assistant, trained to answer common customer questions.
            </p>
          </header>

          <section className="space-y-4">
            <h2 className="text-2xl font-semibold text-blue-500 dark:text-blue-400">Project Overview</h2>
            <p>
              The assistant is powered by Azure Language Studio’s Question Answering project, trained with 25 common support FAQs such as:
            </p>
            <ul className="list-disc list-inside text-sm text-slate-600 dark:text-slate-300">
              <li>What are your business hours?</li>
              <li>What’s your return policy?</li>
              <li>How do I contact support?</li>
            </ul>
            <p>
              The frontend is built with <strong>Next.js</strong> and <strong>Tailwind CSS</strong>, and it sends user questions to a deployed Azure knowledge base using a REST API.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-semibold text-blue-500 dark:text-blue-400">Live Demo</h2>
            <QuestionAnswering />
          </section>
        </div>
      </main>
    </Layout>
  );
}
