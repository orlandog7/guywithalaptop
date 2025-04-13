// app/projects/portfolio-build/page.js
import Layout from '@/components/Layout';
import CollapsibleSection from '@/components/CollapsibleSection';

export const metadata = {
  title: 'Portfolio Build Demo | A Guy With a Laptop',
  description: 'How this site was built and deployed using Azure, GitHub, and Next.js.',
};

export default function PortfolioBuildPage() {
  return (
    <Layout>
      <main className="min-h-screen bg-gray-100 dark:bg-gray-900 p-6 md:p-12 text-slate-700 dark:text-gray-100">
        <div className="max-w-4xl mx-auto space-y-10">
          <header>
            <h1 className="text-4xl font-bold text-slate-800 dark:text-white mb-2">
              How This Portfolio Was Built
            </h1>
            <p className="text-lg text-slate-600 dark:text-slate-300">
              A walkthrough of the tools, design, and deployment pipeline behind this site.
            </p>
          </header>

          <section>
            <h2 className="text-2xl font-semibold text-blue-500 dark:text-blue-400 mb-4">
              Stack Overview
            </h2>
            <ul className="list-disc ml-6 space-y-1">
              <li>Next.js 15 for the frontend framework and routing</li>
              <li>Tailwind CSS for styling and layout</li>
              <li>React 18 for Azure compatibility</li>
              <li>GitHub Actions for CI/CD (Continuous Integration / Continuous Deployment)</li>
              <li>Azure Static Web Apps for hosting and serverless API routes</li>
              <li>Azure AI for live sentiment and Q&A demos</li>
              <li>Custom Domain linked via GoDaddy and validated in Azure</li>
              <li>Selenium-based E2E testing with ChromeDriver and Python</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-blue-500 dark:text-blue-400 mb-4">
              Selenium Testing Preview
            </h2>
            <CollapsibleSection title="View test_homepage.py">
              {`from selenium import webdriver
from selenium.webdriver.chrome.service import Service
from selenium.webdriver.chrome.options import Options

options = Options()
options.add_argument("--headless")  # Run in headless mode
driver = webdriver.Chrome(options=options)

driver.get("https://guywithlaptop.com")
print("Page title is:", driver.title)

if "Portfolio | A Guy With a Laptop" in driver.title:
    print("✅ Test passed!")
else:
    print("❌ Test failed:")

driver.quit()`}
            </CollapsibleSection>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-blue-500 dark:text-blue-400 mb-4">
              Key Features
            </h2>
            <ul className="list-disc ml-6 space-y-1">
              <li>Live project carousel with interactive demos</li>
              <li>Reusable components (Layout, Contact, Certifications, etc.)</li>
              <li>Markdown-style project descriptions and page metadata</li>
              <li>GitHub integration with automatic CI/CD on push via GitHub Actions</li>
              <li>Azure Functions for live API endpoints (e.g., sentiment analysis, FRED)</li>
              <li>Selenium-based automated testing with Python to validate deployments</li>
              <li>Deployed and running globally on Azure with HTTPS and a custom domain</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-blue-500 dark:text-blue-400 mb-4">
              Why This Matters
            </h2>
            <p>
              This portfolio demonstrates real-world cloud deployment skills along with front-end design and AI integration. It’s more than a resume — it’s a living project with practical value.
            </p>
          </section>
        </div>
      </main>
    </Layout>
  );
}
