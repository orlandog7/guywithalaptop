'use client';

import { FiMail } from "react-icons/fi";
import { SiLinkedin } from "react-icons/si";

export default function Contact() {
  return (
    <section id="contact">
      <h2 className="text-2xl font-semibold mb-4 text-slate-800 dark:text-slate-100">Contact</h2>
      <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-md space-y-4">
        <div className="flex items-center gap-3">
          <FiMail className="w-5 h-5 text-blue-500" />
          <a
            href="mailto:speedygonzalez@guywithlaptop.com"
            className="text-blue-500 hover:text-blue-400 hover:underline"
          >
            Email Me
          </a>
        </div>
        <div className="flex items-center gap-3">
          <SiLinkedin className="w-5 h-5 text-blue-500" />
          <a
            href="https://www.linkedin.com/in/ogonzalez"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-500 hover:text-blue-400 hover:underline"
          >
            linkedin.com/in/ogonzalez
          </a>
        </div>
      </div>
    </section>
  );
}
