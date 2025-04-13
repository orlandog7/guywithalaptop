'use client';

import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export default function Layout({ children }) {
  return (
    <>
      <Navbar />
      <main className="pt-36 bg-gray-100 dark:bg-gray-900 p-6 md:p-12 text-slate-700 dark:text-gray-100">
        <div className="max-w-4xl mx-auto">
          {children}
        </div>
      </main>
      <Footer />
    </>
  );
}
