import { FiGithub } from 'react-icons/fi';

export default function Footer() {
  return (
    <footer className="mt-16 border-t border-slate-200 dark:border-slate-700 pt-6 text-sm text-center text-slate-500 dark:text-slate-400">
      <div className="max-w-4xl mx-auto flex flex-col md:flex-row justify-between items-center px-4 pb-6 gap-4">
        <p>&copy; {new Date().getFullYear()} Orlando Gonzalez — All rights reserved.</p>
        <div className="space-x-4">
          <a href="/" className="hover:text-blue-500">Home</a>
          <a href="/projects" className="hover:text-blue-500">Projects</a>
          <a href="/#contact" className="hover:text-blue-500">Contact</a>
          <a
              href="https://github.com/orlandog7/guywithalaptop"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 hover:text-blue-500"
            >
              <FiGithub className="w-4 h-4" />
              GitHub
          </a>

        </div>
      </div>
    </footer>
  );
}