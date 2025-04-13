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
          <header className="mb-8 text-center md:text-left space-y-4 flex flex-col md:flex-row items-center gap-6">
            <div className="relative">
              <div className="absolute inset-0 w-36 h-36 rounded-full bg-blue-500 opacity-20 blur-2xl -z-10 mx-auto md:mx-0"></div>
              <img
                src="/images/HeadShot-OG-01.jpg"
                alt="Orlando avatar"
                loading="lazy"
                className="w-32 h-32 rounded-full shadow-lg object-cover ring-2 ring-blue-500 dark:ring-blue-400 mx-auto md:mx-0"
              />
            </div>

            <div>
              <h1 className="text-4xl md:text-5xl font-bold text-slate-800 dark:text-white">Hi, I’m Orlando</h1>
              <p className="text-lg md:text-xl mt-2 text-slate-600 dark:text-gray-300">
                An Experienced IT Project Manager with a Focus on Artificial Intelligence and Machine Learning
              </p>
            </div>
          </header>

          {/* About Me */}
          <section className="mb-10">
            <h2 className="text-2xl font-semibold mb-4 text-slate-800 dark:text-slate-100">About Me</h2>
            <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-md space-y-4">
              <p>
                I’m an IT Project Manager with 30 years of experience leading software and infrastructure projects. I've helped teams deliver complex systems and bring new products to life.
              </p>
              <p>
                Lately, I’ve been exploring how AI and cloud technologies can solve real business problems — from improving support to unlocking insights from data.
              </p>
            </div>
          </section>

          {/* Demo Projects */}
          <section id="projects" className="mb-8">
            <h2 className="text-2xl font-semibold mb-4 text-slate-800 dark:text-slate-100">Demo Projects</h2>
            <ProjectCarousel />
          </section>

          {/* Certifications */}
          <Certifications />

          {/* Contact */}
          <Contact />

          {/* Resume */}
          <section className="mt-8 mb-10">
            <h2 className="text-2xl font-semibold mb-4 text-slate-800 dark:text-slate-100">Resume</h2>
            <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-md">
              <a
                href="/resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-400 transition-colors"
              >
                Download My Resume
              </a>
            </div>
          </section>

        </div>
      </main>
    </Layout>
  );
}
