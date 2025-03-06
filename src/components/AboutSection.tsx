import React from 'react';
import { FaMobile, FaCode, FaPalette, FaChartLine } from 'react-icons/fa';
import Image from 'next/image';

interface AboutSectionProps {
  aboutText: string;
  passionText: string;
  skills: {
    name: string;
    icon: React.ReactNode | string;
    color: string;
  }[];
}

const AboutSection: React.FC<AboutSectionProps> = ({ aboutText, passionText, skills }) => {
  const services = [
    {
      icon: <FaCode className="text-2xl text-yellow-500" />,
      title: 'Web Development',
      description: 'Creating attractive websites and web applications with modern technologies.'
    },
    {
      icon: <FaChartLine className="text-2xl text-orange-500" />,
      title: 'Backend Development',
      description: 'Highly performant solutions for your business needs with scalable and optimized experience.'
    }
  ];

  return (
    <div className="bg-zinc-900 rounded-lg p-8 shadow-[0_24px_80px_hsla(0,0%,0%,0.25)] border border-[hsl(0,0%,22%)]">
      {/* About Me Section */}
      <div className="mb-10">
        <p className="text-zinc-400 mb-4">{aboutText}</p>
        <p className="text-zinc-400">{passionText}</p>
      </div>

      {/* What I'm Doing Section */}
      <div className="mb-10">
        <h2 className="text-xl font-bold text-white mb-6 border-b border-yellow-500 pb-2 inline-block">What I'm Doing</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {services.map((service, index) => (
            <div key={index} className="flex items-start space-x-4">
              <div className="bg-zinc-800 p-3 rounded-md">
                {service.icon}
              </div>
              <div>
                <h3 className="text-white font-medium mb-1">{service.title}</h3>
                <p className="text-zinc-400 text-sm">{service.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Skills Section */}
      <div>
        <h2 className="text-xl font-bold text-white mb-6 border-b border-yellow-500 pb-2 inline-block">Skills</h2>
        
        <div className="grid grid-cols-4 sm:grid-cols-6 md:grid-cols-8 gap-2">
          {skills.map((skill, index) => (
            <div key={index} className="flex flex-col items-center">
              <div 
                className={`w-16 h-16 rounded-lg flex items-center justify-center mb-2 ${skill.color} border border-[hsla(0,0%,0%,0.125)] shadow-[-4px_8px_24px_hsla(0,0%,0%,0.125)] hover:shadow-[-8px_16px_32px_hsla(0,0%,0%,0.2)] transition-all duration-300 ease-in-out hover:scale-110 cursor-pointer`}
              >
                {typeof skill.icon === 'string' && skill.icon.startsWith('/') ? (
                  <Image 
                    src={skill.icon} 
                    alt={skill.name} 
                    width={32} 
                    height={32} 
                  />
                ) : (
                  <div className="text-2xl">{skill.icon}</div>
                )}
              </div>
              <span className="text-zinc-300 text-sm">{skill.name}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AboutSection;