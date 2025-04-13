'use client';

import { useState, useRef, useEffect } from 'react';
import { FiChevronDown } from 'react-icons/fi';
import { AiOutlineHome, AiOutlineProject } from 'react-icons/ai';
import { FiMail } from 'react-icons/fi';

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const dropdownRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <nav className="bg-white dark:bg-gray-800 shadow fixed top-0 left-0 right-0 z-50">
      <div className="max-w-4xl mx-auto flex items-center justify-between px-4 py-3">
        <span className="font-bold text-slate-800 dark:text-white text-lg">
          A Guy With a Laptop
        </span>

        <div className="flex items-center space-x-4 text-sm">
          {/* Home */}
          <a href="/" className="flex items-center gap-1 text-slate-600 dark:text-slate-300 hover:text-blue-500">
            <AiOutlineHome className="w-4 h-4" />
            Home
          </a>

          {/* Projects Dropdown */}
          <div className="relative" ref={dropdownRef}>
            <button
              onClick={() => setOpen(!open)}
              className="flex items-center gap-1 text-slate-600 dark:text-slate-300 hover:text-blue-500 focus:outline-none"
            >
              <AiOutlineProject className="w-4 h-4" />
              Projects <FiChevronDown className="mt-[1px]" />
            </button>
            {open && (
              <div className="absolute bg-white dark:bg-gray-800 shadow-lg mt-2 rounded-md z-50 w-52">
                <a
                  href="/projects/ai-support-assistant"
                  className="block px-4 py-2 text-sm text-slate-700 dark:text-slate-200 hover:bg-gray-100 dark:hover:bg-gray-700"
                >
                  AI Support Assistant
                </a>
                <a
                  href="/projects/economic-dashboard"
                  className="block px-4 py-2 text-sm text-slate-700 dark:text-slate-200 hover:bg-gray-100 dark:hover:bg-gray-700"
                >
                  Economic Dashboard
                </a>
                <a
                  href="/projects/sentiment-twitter"
                  className="block px-4 py-2 text-sm text-slate-700 dark:text-slate-200 hover:bg-gray-100 dark:hover:bg-gray-700"
                >
                  SentimentTwitter
                </a>
                <a
                  href="/projects"
                  className="block px-4 py-2 text-sm text-slate-700 dark:text-slate-200 hover:bg-gray-100 dark:hover:bg-gray-700"
                >
                  All Projects →
                </a>
              </div>
            )}
          </div>

          {/* Contact */}
          <a
            href="/#contact"
            className="flex items-center gap-1 text-slate-600 dark:text-slate-300 hover:text-blue-500"
          >
            <FiMail className="w-4 h-4" />
            Contact
          </a>
        </div>
      </div>
    </nav>
  );
}
