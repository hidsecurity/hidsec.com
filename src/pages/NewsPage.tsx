import React, { useState } from 'react';
import PageHeader from '../components/PageHeader';
import Card from '../components/Card';
import { Search } from 'lucide-react';

// Sample news data (placeholders)
const newsData = [
  {
    id: 1,
    title: "Placeholder News 1",
    date: "2025-01-01",
    summary: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    link: "/news/placeholder-1",
    tags: ["placeholder", "lorem", "ipsum"]
  },
  {
    id: 2,
    title: "Placeholder News 2",
    date: "2025-01-02",
    summary: "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    link: "/news/placeholder-2",
    tags: ["placeholder", "dolor", "sit"]
  },
  {
    id: 3,
    title: "Placeholder News 3",
    date: "2025-01-03",
    summary: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
    link: "/news/placeholder-3",
    tags: ["news", "ipsum", "lorem"]
  },
  {
    id: 4,
    title: "Placeholder News 4",
    date: "2025-01-04",
    summary: "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    link: "/news/placeholder-4",
    tags: ["placeholder", "amet", "consectetur"]
  },
  {
    id: 5,
    title: "Placeholder News 5",
    date: "2025-01-05",
    summary: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium.",
    link: "/news/placeholder-5",
    tags: ["news", "dolor", "sit"]
  },
  {
    id: 6,
    title: "Placeholder News 6",
    date: "2025-01-06",
    summary: "Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos.",
    link: "/news/placeholder-6",
    tags: ["placeholder", "lorem", "ipsum"]
  },
  {
    id: 7,
    title: "Placeholder News 7",
    date: "2025-01-07",
    summary: "Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit.",
    link: "/news/placeholder-7",
    tags: ["news", "lorem", "dolor"]
  },
  {
    id: 8,
    title: "Placeholder News 8",
    date: "2025-01-08",
    summary: "Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur.",
    link: "/news/placeholder-8",
    tags: ["placeholder", "ipsum", "sit"]
  },
  {
    id: 9,
    title: "Placeholder News 9",
    date: "2025-01-09",
    summary: "Vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?",
    link: "/news/placeholder-9",
    tags: ["news", "amet", "consectetur"]
  }
];


const NewsPage: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedTag, setSelectedTag] = useState<string | null>(null);
  
  // Get all unique tags
  const allTags = Array.from(
    new Set(newsData.flatMap(item => item.tags))
  ).sort();
  
  // Filter news based on search and tag
  const filteredNews = newsData.filter(item => {
    const matchesSearch = item.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                          item.summary.toLowerCase().includes(searchTerm.toLowerCase());
    
    const matchesTag = selectedTag ? item.tags.includes(selectedTag) : true;
    
    return matchesSearch && matchesTag;
  });

  return (
    <div className="min-h-screen pt-16">
      <PageHeader 
        title="Security News" 
        subtitle="The latest cybersecurity breaches, vulnerabilities, and updates"
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
                placeholder="Search news..."
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
              <option value="">All Categories</option>
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
                  Category: {selectedTag}
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
        
        {/* News grid */}
        {filteredNews.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {filteredNews.map(item => (
              <Card
                key={item.id}
                title={item.title}
                date={item.date}
                summary={item.summary}
                link={item.link}
                tags={item.tags}
              />
            ))}
          </div>
        ) : (
          <div className="text-center py-16">
            <p className="text-green-400 text-lg mb-4">No news items found matching your filters.</p>
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

export default NewsPage;