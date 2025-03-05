import React from 'react';
import { FaMobile, FaCode, FaPalette, FaChartLine } from 'react-icons/fa';

interface AboutSectionProps {
  aboutText: string;
  passionText: string;
}

const AboutSection: React.FC<AboutSectionProps> = ({ aboutText, passionText }) => {
  const services = [
    {
      icon: <FaMobile className="text-2xl text-blue-400" />,
      title: 'Mobile Apps',
      description: 'Expert in development of applications for Android and iOS with native feel.'
    },
    {
      icon: <FaCode className="text-2xl text-yellow-500" />,
      title: 'Web Development',
      description: 'Creating attractive websites and web applications with modern technologies.'
    },
    {
      icon: <FaPalette className="text-2xl text-purple-500" />,
      title: 'UI/UX Design',
      description: 'The best modern design created at a professional level with great attention to detail.'
    },
    {
      icon: <FaChartLine className="text-2xl text-orange-500" />,
      title: 'Backend Development',
      description: 'Highly performant solutions for your business needs with scalable and optimized experience.'
    }
  ];

  return (
    <div className="bg-zinc-900 rounded-lg p-8 shadow-lg">
      {/* About Me Section */}
      <div className="mb-10">
        <h2 className="text-xl font-bold text-white mb-4 border-b border-yellow-500 pb-2 inline-block">About Me</h2>
        <p className="text-zinc-400 mb-4">{aboutText}</p>
        <p className="text-zinc-400">{passionText}</p>
      </div>

      {/* What I'm Doing Section */}
      <div>
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
    </div>
  );
};

export default AboutSection;