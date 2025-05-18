import React from 'react';
import { Link } from 'react-router-dom';
import { Github, Twitter, Linkedin, Mail } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-black/40 backdrop-blur-sm border-t border-green-900/30 mt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-green-400 font-mono text-lg font-bold mb-4">HidSec</h3>
            <p className="text-green-300/70 text-sm max-w-xs">
              Cybersecurity insights, tutorials, and news from Halil Ibrahim Dag.
            </p>
          </div>
          
          <div>
            <h3 className="text-green-400 font-mono text-lg font-bold mb-4">Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-green-300/70 hover:text-green-300 transition-colors text-sm">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-green-300/70 hover:text-green-300 transition-colors text-sm">
                  About
                </Link>
              </li>
              <li>
                <Link to="/posts" className="text-green-300/70 hover:text-green-300 transition-colors text-sm">
                  Posts
                </Link>
              </li>
              <li>
                <Link to="/news" className="text-green-300/70 hover:text-green-300 transition-colors text-sm">
                  News
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-green-400 font-mono text-lg font-bold mb-4">Connect</h3>
            <div className="flex space-x-4">
              <a href="https://github.com" target="_blank" rel="noopener noreferrer" 
                 className="text-green-300/70 hover:text-green-300 transition-colors">
                <Github className="h-5 w-5" />
                <span className="sr-only">GitHub</span>
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer"
                 className="text-green-300/70 hover:text-green-300 transition-colors">
                <Twitter className="h-5 w-5" />
                <span className="sr-only">Twitter</span>
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer"
                 className="text-green-300/70 hover:text-green-300 transition-colors">
                <Linkedin className="h-5 w-5" />
                <span className="sr-only">LinkedIn</span>
              </a>
              <a href="mailto:contact@hidsec.com"
                 className="text-green-300/70 hover:text-green-300 transition-colors">
                <Mail className="h-5 w-5" />
                <span className="sr-only">Email</span>
              </a>
            </div>
          </div>
        </div>
        
        <div className="border-t border-green-900/30 mt-8 pt-8 text-center">
          <p className="text-green-300/50 text-sm">
            &copy; {new Date().getFullYear()} HidSec.com. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;