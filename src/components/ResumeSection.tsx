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
    <div className="bg-zinc-900 rounded-lg p-8 shadow-[0_24px_80px_hsla(0,0%,0%,0.25)] border border-[hsl(0,0%,22%)]">
      {/* Education Section */}
      <div className="mb-10">
        <h2 className="text-xl font-bold text-white mb-6 border-b border-yellow-500 pb-2 inline-block">
          <FaGraduationCap className="inline-block mr-2" />
          Education
        </h2>
        
        <div className="space-y-6">
          {education.map((edu, index) => (
            <div key={index} className="relative pl-6 pb-6 border-l border-zinc-700 last:pb-0">
              <div className="absolute left-[-5px] top-2 w-2.5 h-2.5 rounded-full bg-yellow-500" />
              <div className="bg-zinc-800/50 p-6 rounded-lg border border-zinc-700/50">
                <div className="flex items-start gap-4">
                  {edu.logo && (
                    <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-zinc-700/30 overflow-hidden">
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
                    <h3 className="text-lg font-semibold text-white mb-1">{edu.school}</h3>
                    <p className="text-zinc-400 mb-2">{edu.degree}</p>
                    <p className="text-sm text-yellow-500/80">{edu.period}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Experience Section */}
      <div>
        <h2 className="text-xl font-bold text-white mb-6 border-b border-yellow-500 pb-2 inline-block">
          <FaBriefcase className="inline-block mr-2" />
          Experience
        </h2>
        
        <div className="space-y-6">
          {experience.map((exp, index) => (
            <div key={index} className="relative pl-6 pb-6 border-l border-zinc-700 last:pb-0">
              <div className="absolute left-[-5px] top-2 w-2.5 h-2.5 rounded-full bg-yellow-500" />
              <div className="bg-zinc-800/50 p-6 rounded-lg border border-zinc-700/50">
                <div className="flex items-start gap-4">
                  {exp.logo && (
                    <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-zinc-700/30 overflow-hidden">
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
                        <h3 className="text-lg font-semibold text-white">{exp.position}</h3>
                        {exp?.link ? (
                          <a
                            href={exp.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-zinc-400 hover:text-yellow-500 transition-colors duration-300"
                          >
                            {exp.company}
                          </a>
                        ) : (
                          <p className="text-zinc-400">{exp.company}</p>
                        )}
                      </div>
                      <div className="text-right">
                        <p className="text-sm text-yellow-500/80">{exp.period}</p>
                        <p className="text-sm text-zinc-500">{exp.location}</p>
                      </div>
                    </div>
                    <ul className="list-disc list-inside space-y-2 text-zinc-400">
                      {exp.responsibilities.map((responsibility, idx) => (
                        <li key={idx} className="text-sm">{responsibility}</li>
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
          className="flex items-center gap-2 bg-zinc-800 hover:bg-zinc-700 text-white px-6 py-3 rounded-lg transition-colors duration-300 border border-zinc-700/50 hover:border-yellow-500/50"
        >
          <FaFileDownload className="text-yellow-500" />
          Download CV
        </button>
      </div>
    </div>
  );
};

export default ResumeSection;