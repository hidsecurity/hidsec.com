import React, { useState } from 'react';
import PageHeader from '../components/PageHeader';
import Card from '../components/Card';
import { Search } from 'lucide-react';

// Sample posts data (placeholders)
const postsData = [
  {
    id: 1,
    title: "Placeholder 1",
    date: "2025-01-01",
    summary: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    link: "/posts/intro-ethical-hacking",
    tags: ["placeholder", "lorem", "ipsum"]
  },
  {
    id: 2,
    title: "Placeholder 2",
    date: "2025-01-02",
    summary: "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    link: "#",
    tags: ["placeholder", "dummy", "text"]
  },
  {
    id: 3,
    title: "Placeholder 3",
    date: "2025-01-03",
    summary: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
    link: "#",
    tags: ["placeholder", "sample", "content"]
  },
  {
    id: 4,
    title: "Placeholder 4",
    date: "2025-01-04",
    summary: "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    link: "#",
    tags: ["placeholder", "filler", "text"]
  },
  {
    id: 5,
    title: "Placeholder 5",
    date: "2025-01-05",
    summary: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium.",
    link: "#",
    tags: ["placeholder", "example", "text"]
  },
  {
    id: 6,
    title: "Placeholder 6",
    date: "2025-01-06",
    summary: "Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos.",
    link: "#",
    tags: ["placeholder", "mock", "content"]
  }
];


const PostsPage: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedTag, setSelectedTag] = useState<string | null>(null);
  
  // Get all unique tags
  const allTags = Array.from(
    new Set(postsData.flatMap(post => post.tags))
  ).sort();
  
  // Filter posts based on search and tag
  const filteredPosts = postsData.filter(post => {
    const matchesSearch = post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                          post.summary.toLowerCase().includes(searchTerm.toLowerCase());
    
    const matchesTag = selectedTag ? post.tags.includes(selectedTag) : true;
    
    return matchesSearch && matchesTag;
  });

  return (
    <div className="min-h-screen pt-16">
      <PageHeader 
        title="Posts & Tutorials" 
        subtitle="Learn cybersecurity concepts, techniques, and best practices"
      />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Search and filter */}
        <div className="mb-12">
          <div className="flex flex-col md:flex-row gap-4 mb-6">
            <div className="relative flex-grow">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <Search className="h-5 w-5 text-green-500/60" />
              </div>
              <input
                type="text"
                placeholder="Search posts..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="block w-full bg-black/40 border border-green-900/40 rounded-md py-2 pl-10 pr-3 text-green-300 placeholder-green-500/60 focus:outline-none focus:ring-2 focus:ring-green-500/40 focus:border-transparent"
              />
            </div>
            
            <select
              value={selectedTag || ''}
              onChange={(e) => setSelectedTag(e.target.value || null)}
              className="bg-black/40 border border-green-900/40 rounded-md py-2 px-3 text-green-300 focus:outline-none focus:ring-2 focus:ring-green-500/40 focus:border-transparent"
            >
              <option value="">All Topics</option>
              {allTags.map(tag => (
                <option key={tag} value={tag}>{tag}</option>
              ))}
            </select>
          </div>
          
          {/* Active filters display */}
          {(searchTerm || selectedTag) && (
            <div className="flex items-center gap-2">
              <span className="text-sm text-green-400/70">Filters:</span>
              {searchTerm && (
                <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-900/20 text-green-400">
                  Search: {searchTerm}
                  <button 
                    onClick={() => setSearchTerm('')}
                    className="ml-1.5 inline-flex items-center justify-center w-4 h-4 text-green-400 hover:text-green-300"
                  >
                    ×
                  </button>
                </span>
              )}
              {selectedTag && (
                <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-900/20 text-green-400">
                  Topic: {selectedTag}
                  <button 
                    onClick={() => setSelectedTag(null)}
                    className="ml-1.5 inline-flex items-center justify-center w-4 h-4 text-green-400 hover:text-green-300"
                  >
                    ×
                  </button>
                </span>
              )}
            </div>
          )}
        </div>
        
        {/* Posts grid */}
        {filteredPosts.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {filteredPosts.map(post => (
              <Card
                key={post.id}
                title={post.title}
                date={post.date}
                summary={post.summary}
                link={post.link}
                tags={post.tags}
              />
            ))}
          </div>
        ) : (
          <div className="text-center py-16">
            <p className="text-green-400 text-lg mb-4">No posts found matching your filters.</p>
            <button
              onClick={() => {
                setSearchTerm('');
                setSelectedTag(null);
              }}
              className="px-4 py-2 bg-green-500/20 text-green-400 font-mono border border-green-500/30 rounded-md hover:bg-green-500/30 transition-colors"
            >
              Clear Filters
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default PostsPage;