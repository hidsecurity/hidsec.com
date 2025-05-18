import React from 'react';
import { Link } from 'react-router-dom';

interface CardProps {
  title: string;
  date: string;
  summary: string;
  link: string;
  tags?: string[];
}

const Card: React.FC<CardProps> = ({ title, date, summary, link, tags = [] }) => {
  return (
    <Link 
      to={link} 
      className="block bg-black/40 backdrop-blur-sm border border-green-900/40 rounded-lg overflow-hidden transform transition duration-300 hover:scale-[1.02] hover:border-green-500/40 hover:shadow-[0_0_15px_rgba(0,255,0,0.1)]"
    >
      <div className="p-6">
        <div className="flex items-center justify-between mb-2">
          <h3 className="text-xl font-bold font-mono text-green-400">{title}</h3>
          <span className="text-xs text-green-300/60 font-mono">{date}</span>
        </div>
        
        <p className="text-green-300/80 mb-4 line-clamp-3">{summary}</p>
        
        {tags.length > 0 && (
          <div className="flex flex-wrap gap-2">
            {tags.map((tag, index) => (
              <span 
                key={index} 
                className="px-2 py-1 bg-green-900/20 text-green-400/80 text-xs rounded-full font-mono"
              >
                {tag}
              </span>
            ))}
          </div>
        )}
      </div>
    </Link>
  );
};

export default Card;