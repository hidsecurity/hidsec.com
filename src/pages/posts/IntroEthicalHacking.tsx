import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, Shield } from 'lucide-react';

const IntroEthicalHacking: React.FC = () => {
  return (
    <div className="min-h-screen pt-24">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <Link 
          to="/posts" 
          className="inline-flex items-center text-green-400 hover:text-green-300 mb-8"
        >
          <ArrowLeft className="h-4 w-4 mr-2" />
          Back to Posts
        </Link>

        <article className="prose prose-invert prose-green">
          <div className="flex items-center gap-4 mb-6">
            <Shield className="h-8 w-8 text-green-400" />
            <h1 className="text-3xl font-bold font-mono text-green-400 m-0">Placeholder 1</h1>
          </div>
          
          <div className="text-green-300/60 mb-8">
            <time>January 1, 2025</time>
            <span className="mx-2">•</span>
            <span>— min read</span>
          </div>

          <div className="space-y-6 text-green-300/80">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>

            <h2 className="text-2xl font-bold font-mono text-green-400 mt-12">Section Title</h2>
            <p>
              Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
            </p>

            <h2 className="text-2xl font-bold font-mono text-green-400 mt-12">Another Section</h2>
            <p>
              Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
            </p>

            <h2 className="text-2xl font-bold font-mono text-green-400 mt-12">More Info</h2>
            <p>
              Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>

            <div className="bg-green-900/20 border border-green-500/30 rounded-lg p-6 mt-12">
              <h3 className="text-xl font-bold font-mono text-green-400 mb-4">Note</h3>
              <p className="text-green-300/80 m-0">
                Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium.
              </p>
            </div>
          </div>
        </article>
      </div>
    </div>
  );
};

export default IntroEthicalHacking;
