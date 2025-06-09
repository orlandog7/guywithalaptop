'use client';

import { FiMail } from "react-icons/fi";
import { SiLinkedin } from "react-icons/si";
import { motion } from 'framer-motion';
import Layout from '@/components/Layout';
import QuestionAnswering from '@/components/QuestionAnswering';
import FredChart from '@/components/FredChart';
import ProjectCarousel from '@/components/ProjectCarousel';
import Contact from '@/components/Contact';
import Certifications from '@/components/Certifications';

export default function HomeContent() {
  return (
    <Layout>
      <main className="pt-36 min-h-screen bg-gray-100 dark:bg-gray-900 p-6 md:p-12 text-slate-700 dark:text-gray-100">
        <div className="max-w-4xl mx-auto">

          {/* Hero */}
          <header className="mb-8 text-center md:text-left space-y-4">
            <h1 className="text-3xl font-semibold text-gray-900">Welcome to Orlando's Sandbox</h1>
            <p className="text-lg text-gray-600">Check out some of the AI projects below:</p>
          </header>

          {/* Demo Projects */}
          <section id="projects" className="mb-8">
            <h2 className="text-2xl font-semibold mb-4 text-slate-800 dark:text-slate-100">Live Demo Projects</h2>
            <ProjectCarousel />
          </section>

                    {/* About Me */}
                    <section className="mb-10">
            <h2 className="text-2xl font-semibold mb-4 text-slate-800 dark:text-slate-100">About Me</h2>
            <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-md space-y-4">
              <p>
              Twenty-eight years total IT experience: 12 as a PM, 5 as a BA and 11 as a Developer & Data Analyst.  Delivering end-to-end software solutions by managing on-shore and off-shore teams for government, pharmaceutical and financial clients using Agile, Scrum, Kanban, Waterfall, SDLC, ITIL, and Six-Sigma.
              </p>
            </div>
          </section>
          
          {/* Certifications */}
          <Certifications />

          {/* Contact */}
          <Contact />

          {/* Resume */}


        </div>
      </main>
    </Layout>
  );
}
