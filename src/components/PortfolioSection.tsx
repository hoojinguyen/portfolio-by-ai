import React, { useState } from 'react';
import Image from 'next/image';

interface Project {
  id: number;
  title: string;
  category: string;
  image: string;
  demoUrl?: string;
  sourceUrl?: string;
  description?: string;
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
    <div className="bg-[var(--color-bg-secondary)] rounded-lg p-8 shadow-[0_24px_80px_var(--color-shadow)] border border-[var(--color-border-primary)]">
      {/* Filter Buttons */}
      <div className="flex flex-wrap gap-4 mb-8">
        {categories.map(category => (
          <button
            key={category.id}
            onClick={() => setActiveFilter(category.id)}
            className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors duration-300
              ${
                activeFilter === category.id
                  ? 'bg-[var(--color-accent-primary)] text-[var(--color-bg-primary)]'
                  : 'bg-[var(--color-bg-tertiary)] text-[var(--color-text-secondary)] hover:bg-[var(--color-bg-hover)] hover:text-[var(--color-text-primary)]'
              }
            `}
          >
            {category.name}
          </button>
        ))}
      </div>

      {/* Projects Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredProjects.map(project => (
          <div
            key={project.id}
            className="group relative overflow-hidden rounded-lg bg-[var(--color-bg-tertiary)]/50 border border-[var(--color-border-secondary)]/50"
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
              <div className="absolute inset-0 bg-[var(--color-bg-primary)]/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-4">
                {project.demoUrl && (
                  <a
                    href={project.demoUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-[var(--color-accent-primary)] text-[var(--color-bg-primary)] px-4 py-2 rounded-lg text-sm font-medium hover:bg-[var(--color-accent-primary)]/90 transition-colors"
                  >
                    Live Demo
                  </a>
                )}
                {project.sourceUrl && (
                  <a
                    href={project.sourceUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-[var(--color-bg-hover)] text-[var(--color-text-primary)] px-4 py-2 rounded-lg text-sm font-medium hover:bg-[var(--color-bg-tertiary)] transition-colors"
                  >
                    Source Code
                  </a>
                )}
              </div>
            </div>
            {/* Project Info */}
            <div className="p-4">
              <h3 className="text-lg font-semibold text-[var(--color-text-primary)] mb-1">
                {project.title}
              </h3>
              <p className="text-sm text-[var(--color-accent-primary)]/80 mb-2">
                {project.category}
              </p>
              {project.description && (
                <p className="text-sm text-[var(--color-text-secondary)] line-clamp-3">
                  {project.description}
                </p>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PortfolioSection;
