import React from 'react';
import { FaGraduationCap, FaBriefcase, FaFileDownload } from 'react-icons/fa';
import Image from 'next/image';

interface Education {
  school: string;
  degree: string;
  period: string;
  logo?: string;
}

interface Experience {
  link?: string;
  position: string;
  company: string;
  location: string;
  period: string;
  responsibilities: string[];
  logo?: string;
}

interface ResumeSectionProps {
  education: Education[];
  experience: Experience[];
}

const ResumeSection: React.FC<ResumeSectionProps> = ({ education, experience }) => {
  return (
    <div className="bg-[var(--color-bg-secondary)] rounded-lg p-8 shadow-[0_24px_80px_var(--color-shadow)] border border-[var(--color-border-primary)]">
      {/* Education Section */}
      <div className="mb-10">
        <h2 className="text-xl font-bold text-[var(--color-text-primary)] mb-6 border-b border-[var(--color-accent-primary)] pb-2 inline-block">
          <FaGraduationCap className="inline-block mr-2" />
          Education
        </h2>

        <div className="space-y-6">
          {education.map((edu, index) => (
            <div
              key={index}
              className="relative pl-6 pb-6 border-l border-[var(--color-border-secondary)] last:pb-0"
            >
              <div className="absolute left-[-5px] top-2 w-2.5 h-2.5 rounded-full bg-[var(--color-accent-primary)]" />
              <div className="bg-[var(--color-bg-tertiary)]/50 p-6 rounded-lg border border-[var(--color-border-secondary)]/50">
                <div className="flex items-start gap-4">
                  {edu.logo && (
                    <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-[var(--color-bg-hover)]/30 overflow-hidden">
                      <Image
                        src={edu.logo}
                        alt={edu.school}
                        width={48}
                        height={48}
                        className="object-cover w-full h-full"
                      />
                    </div>
                  )}
                  <div>
                    <h3 className="text-lg font-semibold text-[var(--color-text-primary)] mb-1">
                      {edu.school}
                    </h3>
                    <p className="text-[var(--color-text-secondary)] mb-2">{edu.degree}</p>
                    <p className="text-sm text-[var(--color-accent-primary)]/80">{edu.period}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Experience Section */}
      <div>
        <h2 className="text-xl font-bold text-[var(--color-text-primary)] mb-6 border-b border-[var(--color-accent-primary)] pb-2 inline-block">
          <FaBriefcase className="inline-block mr-2" />
          Experience
        </h2>

        <div className="space-y-6">
          {experience.map((exp, index) => (
            <div
              key={index}
              className="relative pl-6 pb-6 border-l border-[var(--color-border-secondary)] last:pb-0"
            >
              <div className="absolute left-[-5px] top-2 w-2.5 h-2.5 rounded-full bg-[var(--color-accent-primary)]" />
              <div className="bg-[var(--color-bg-tertiary)]/50 p-6 rounded-lg border border-[var(--color-border-secondary)]/50">
                <div className="flex items-start gap-4">
                  {exp.logo && (
                    <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-[var(--color-bg-hover)]/30 overflow-hidden">
                      <Image
                        src={exp.logo}
                        alt={exp.company}
                        width={48}
                        height={48}
                        className="object-cover w-full h-full"
                      />
                    </div>
                  )}
                  <div className="flex-grow">
                    <div className="flex justify-between items-start mb-2">
                      <div>
                        <h3 className="text-lg font-semibold text-[var(--color-text-primary)]">
                          {exp.position}
                        </h3>
                        {exp?.link ? (
                          <a
                            href={exp.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-[var(--color-text-secondary)] hover:text-[var(--color-accent-primary)] transition-colors duration-300"
                          >
                            {exp.company}
                          </a>
                        ) : (
                          <p className="text-[var(--color-text-secondary)]">{exp.company}</p>
                        )}
                      </div>
                      <div className="text-right">
                        <p className="text-sm text-[var(--color-accent-primary)]/80">
                          {exp.period}
                        </p>
                        <p className="text-sm text-[var(--color-text-tertiary)]">{exp.location}</p>
                      </div>
                    </div>
                    <ul className="list-disc list-inside space-y-2 text-[var(--color-text-secondary)]">
                      {exp.responsibilities.map((responsibility, idx) => (
                        <li key={idx} className="text-sm">
                          {responsibility}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Download CV Button */}
      <div className="flex justify-end mt-8">
        <button
          onClick={() => window.open('/cv.pdf', '_blank')}
          className="flex items-center gap-2 bg-[var(--color-bg-tertiary)] hover:bg-[var(--color-bg-hover)] text-[var(--color-text-primary)] px-6 py-3 rounded-lg transition-colors duration-300 border border-[var(--color-border-secondary)]/50 hover:border-[var(--color-accent-primary)]/50"
        >
          <FaFileDownload className="text-[var(--color-accent-primary)]" />
          Download CV
        </button>
      </div>
    </div>
  );
};

export default ResumeSection;
