'use client';

import { useState } from 'react';

export default function QuestionAnswering() {
  const [question, setQuestion] = useState('');
  const [answer, setAnswer] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleAsk = async (e) => {
    e.preventDefault();
    setLoading(true);
    setAnswer(null);

    const response = await fetch('/api/ask', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ question }),
    });

    const data = await response.json();
    setAnswer(data.answer || 'No answer found.');
    setLoading(false);
  };

  return (
    <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-md">
      <h3 className="text-xl font-bold mb-4 text-blue-500 dark:text-blue-400">Ask a Question</h3>
      <form onSubmit={handleAsk} className="space-y-4">
        <input
          type="text"
          value={question}
          onChange={(e) => setQuestion(e.target.value)}
          placeholder="Type your question..."
          className="w-full p-2 border rounded dark:bg-gray-700 dark:text-white"
        />
        <button
          type="submit"
          disabled={!question}
          className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-400 transition"
        >
          Ask
        </button>
      </form>

      {loading && (
        <div className="mt-4 flex items-center space-x-1">
          <div className="w-2 h-2 bg-blue-500 rounded-full animate-bounce" />
          <div className="w-2 h-2 bg-blue-500 rounded-full animate-bounce [animation-delay:0.1s]" />
          <div className="w-2 h-2 bg-blue-500 rounded-full animate-bounce [animation-delay:0.2s]" />
          <span className="ml-2 text-sm text-blue-500">Thinking...</span>
        </div>
      )}

      {answer && (
        <div className="mt-4 p-4 bg-gray-100 dark:bg-gray-700 rounded">
          <p className="text-slate-700 dark:text-slate-100">{answer}</p>
        </div>
      )}
    </div>
  );
}
