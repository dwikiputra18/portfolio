export default function Footer() {
    return (
      <footer className="bg-gray-900 text-white py-6">
        <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm">&copy; {new Date().getFullYear()} Your Name. All rights reserved.</p>
          <div className="flex space-x-4 mt-4 md:mt-0">
            <a href="https://github.com/dwikiputra18" target="_blank" rel="noopener noreferrer" className="hover:text-blue-400 transition">
              GitHub
            </a>
            <a href="https://www.linkedin.com/in/muhammaddwikiputra/" target="_blank" rel="noopener noreferrer" className="hover:text-blue-400 transition">
              LinkedIn
            </a>
            <a href="mailto:dwikiputra1894@gmail.com" className="hover:text-blue-400 transition">
              Email
            </a>
          </div>
        </div>
      </footer>
    );
  }
  