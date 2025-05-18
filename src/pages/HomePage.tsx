import React from 'react';
import { Link } from 'react-router-dom';
import TerminalText from '../components/TerminalText';
import { BookOpen, Newspaper } from 'lucide-react';

const HomePage: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col">
      {/* Hero Section */}
      <section className="flex-grow flex flex-col items-center justify-center text-center px-4 py-24">
        <div className="max-w-3xl">
          <h1 className="font-mono text-4xl md:text-5xl lg:text-6xl font-bold text-green-400 mb-8">
            HidSec<span className="animate-pulse">_</span>
          </h1>
          
          <div className="bg-black/50 backdrop-blur-md border border-green-900/30 p-6 rounded-lg mb-12">
            <TerminalText 
              text="Hello, I'm hid, owner of the hidsec.com. Here I'll be teaching you what I probably learned two hours ago."
              className="text-lg md:text-xl text-green-300/90"
            />
          </div>
          
          <div className="flex flex-wrap gap-4 justify-center">
            <Link 
              to="/about" 
              className="px-6 py-3 bg-green-500/20 text-green-400 font-mono font-bold border border-green-500/30 rounded-md hover:bg-green-500/30 transition-colors"
            >
              About Me
            </Link>
            <Link 
              to="/posts" 
              className="px-6 py-3 bg-black/40 text-green-400 font-mono font-bold border border-green-500/30 rounded-md hover:bg-green-500/20 transition-colors"
            >
              Explore Posts
            </Link>
          </div>
        </div>
      </section>
      
      {/* Featured Sections */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <h2 className="font-mono text-2xl md:text-3xl font-bold text-green-400 mb-12 text-center">
          What You'll Find Here
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8"> {/* Reduced from 3 to 2 columns */}
          {/* Blog */}
          <div className="bg-black/40 backdrop-blur-sm border border-green-900/40 rounded-lg p-6 transform transition duration-300 hover:scale-[1.02] hover:border-green-500/40">
            <div className="flex justify-center mb-4">
              <BookOpen className="h-12 w-12 text-green-400" />
            </div>
            <h3 className="text-xl font-bold font-mono text-green-400 text-center mb-4">
              Blog Posts
            </h3>
            <p className="text-green-300/80 text-center mb-6">
              In-depth articles about my journey in cybersecurity and personal insights.
            </p>
            <div className="text-center">
              <Link 
                to="/posts" 
                className="inline-block px-4 py-2 text-sm font-mono text-green-400 border border-green-500/30 rounded hover:bg-green-500/20 transition-colors"
              >
                Read Posts
              </Link>
            </div>
          </div>
          
          {/* News */}
          <div className="bg-black/40 backdrop-blur-sm border border-green-900/40 rounded-lg p-6 transform transition duration-300 hover:scale-[1.02] hover:border-green-500/40">
            <div className="flex justify-center mb-4">
              <Newspaper className="h-12 w-12 text-green-400" />
            </div>
            <h3 className="text-xl font-bold font-mono text-green-400 text-center mb-4">
              News Coverage
            </h3>
            <p className="text-green-300/80 text-center mb-6">
              The latest on security breaches, vulnerabilities, and tech news.
            </p>
            <div className="text-center">
              <Link 
                to="/news" 
                className="inline-block px-4 py-2 text-sm font-mono text-green-400 border border-green-500/30 rounded hover:bg-green-500/20 transition-colors"
              >
                Latest News
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
