import React from 'react';

interface PageHeaderProps {
  title: string;
  subtitle?: string;
}

const PageHeader: React.FC<PageHeaderProps> = ({ title, subtitle }) => {
  return (
    <div className="py-16 md:py-24 text-center">
      <h1 className="text-4xl md:text-5xl font-bold font-mono text-green-400 mb-4">{title}</h1>
      {subtitle && (
        <p className="text-lg md:text-xl text-green-300/80 max-w-3xl mx-auto">
          {subtitle}
        </p>
      )}
    </div>
  );
};

export default PageHeader;