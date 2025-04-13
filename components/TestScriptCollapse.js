'use client';

import { useState } from 'react';
import TestScriptCollapse from '@/components/TestScriptCollapse';


export default function TestScriptCollapse() {
  const [open, setOpen] = useState(false);

  return (
    <div className="my-8">
      <button
        onClick={() => setOpen(!open)}
        className="text-blue-600 dark:text-blue-400 hover:underline font-medium mb-2"
      >
        {open ? 'Hide' : 'Show'} Selenium Test Script →
      </button>

      {open && (
        <pre className="bg-gray-900 text-green-200 text-sm p-4 rounded-lg overflow-x-auto whitespace-pre-wrap border border-slate-700">
{`from selenium import webdriver
from selenium.webdriver.chrome.service import Service
from selenium.webdriver.chrome.options import Options
from webdriver_manager.chrome import ChromeDriverManager

options = Options()
options.add_argument('--headless')
options.add_argument('--disable-gpu')
driver = webdriver.Chrome(service=Service(ChromeDriverManager().install()), options=options)

driver.get("https://guywithlaptop.com")

title = driver.title
print("Page title is:", title)

if "Portfolio | A Guy With a Laptop" in title:
    print("✅ Test passed!")
else:
    print("❌ Test failed:")

driver.quit()`}
        </pre>
      )}
    </div>
  );
}
