import React from 'react';
import Image from 'next/image';

interface Skill {
  name: string;
  icon: any;
  color: string;
}

interface SkillsSectionProps {
  skills: Skill[];
}

const SkillsSection: React.FC<SkillsSectionProps> = ({ skills }) => {
  return (
    <div className="bg-zinc-900 rounded-lg p-8 shadow-lg">
      <h2 className="text-xl font-bold text-white mb-6 border-b border-yellow-500 pb-2 inline-block">Skills</h2>
      
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
        {skills.map((skill, index) => (
          <div key={index} className="flex flex-col items-center">
            <div 
              className={`w-16 h-16 rounded-lg flex items-center justify-center mb-2 ${skill.color}`}
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
  );
};

export default SkillsSection;