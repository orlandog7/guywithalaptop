'use client';

import { useState } from 'react';

export default function CollapsibleSection({ title, children }) {
  const [open, setOpen] = useState(false);

  return (
    <div className="border border-slate-300 dark:border-slate-600 rounded-lg">
      <button
        onClick={() => setOpen(!open)}
        className="w-full text-left px-4 py-2 bg-slate-100 dark:bg-slate-700 font-semibold hover:bg-slate-200 dark:hover:bg-slate-600 transition"
      >
        {open ? '▼' : '▶'} {title}
      </button>
      {open && (
        <div className="px-4 py-3 bg-white dark:bg-gray-800 text-sm font-mono whitespace-pre-wrap">
          {children}
        </div>
      )}
    </div>
  );
}
