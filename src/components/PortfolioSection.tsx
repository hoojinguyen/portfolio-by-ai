import React, { useState } from 'react';
import Image from 'next/image';

interface Project {
  id: number;
  title: string;
  category: string;
  image: string;
  demoUrl?: string;
  sourceUrl?: string;
}

interface PortfolioSectionProps {
  projects: Project[];
}

const PortfolioSection: React.FC<PortfolioSectionProps> = ({ projects }) => {
  const [activeFilter, setActiveFilter] = useState('all');

  const categories = [
    { id: 'all', name: 'All' },
    { id: 'applications', name: 'Applications' },
    { id: 'web-development', name: 'Web development' },
    { id: 'ui-ux', name: 'UI/UX' },
  ];

  const filteredProjects = projects.filter(project => 
    activeFilter === 'all' ? true : project.category.toLowerCase() === activeFilter
  );

  return (
    <div className="bg-zinc-900 rounded-lg p-8 shadow-[0_24px_80px_hsla(0,0%,0%,0.25)] border border-[hsl(0,0%,22%)]">
      {/* Filter Buttons */}
      <div className="flex flex-wrap gap-4 mb-8">
        {categories.map((category) => (
          <button
            key={category.id}
            onClick={() => setActiveFilter(category.id)}
            className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors duration-300
              ${activeFilter === category.id
                ? 'bg-yellow-500 text-zinc-900'
                : 'bg-zinc-800 text-zinc-400 hover:bg-zinc-700 hover:text-white'}
            `}
          >
            {category.name}
          </button>
        ))}
      </div>

      {/* Projects Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredProjects.map((project) => (
          <div
            key={project.id}
            className="group relative overflow-hidden rounded-lg bg-zinc-800/50 border border-zinc-700/50"
          >
            {/* Project Image */}
            <div className="relative aspect-[4/3] overflow-hidden">
              <Image
                src={project.image}
                alt={project.title}
                fill
                className="object-cover transition-transform duration-300 group-hover:scale-110"
              />
              {/* Overlay */}
              <div className="absolute inset-0 bg-zinc-900/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-4">
                {project.demoUrl && (
                  <a
                    href={project.demoUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-yellow-500 text-zinc-900 px-4 py-2 rounded-lg text-sm font-medium hover:bg-yellow-400 transition-colors"
                  >
                    Live Demo
                  </a>
                )}
                {project.sourceUrl && (
                  <a
                    href={project.sourceUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-zinc-700 text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-zinc-600 transition-colors"
                  >
                    Source Code
                  </a>
                )}
              </div>
            </div>
            {/* Project Info */}
            <div className="p-4">
              <h3 className="text-lg font-semibold text-white mb-1">{project.title}</h3>
              <p className="text-sm text-yellow-500/80">{project.category}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PortfolioSection;