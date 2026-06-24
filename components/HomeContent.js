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
              I'm a Senior Technical Program Manager with experience leading enterprise cloud modernization, AI enablement, application transformation, and data platform initiatives across aviation, healthcare, financial services, and the public sector.

              <br /><br />

              This site serves as my technical portfolio: a collection of hands-on projects built with Azure, AI services, APIs, and modern web technologies. Each project is an opportunity to explore new capabilities, strengthen practical expertise, and demonstrate how enterprise technologies can be applied to solve real business problems.

              <br /><br />

              While my primary role is leading complex technology programs, I believe the best program managers understand the technologies they deliver. That's the philosophy behind every project you'll find here.
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
