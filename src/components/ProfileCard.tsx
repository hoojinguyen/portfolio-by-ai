import React from 'react';
import Image from 'next/image';
import { FaMapMarkerAlt, FaEnvelope, FaGithub, FaLinkedin } from 'react-icons/fa';

interface ProfileCardProps {
  name: string;
  title: string;
  avatarUrl: string;
  location: string;
  email: string;
  github?: string;
  linkedin?: string;
}

const ProfileCard: React.FC<ProfileCardProps> = ({
  name,
  title,
  avatarUrl,
  location,
  email,
  github,
  linkedin
}) => {
  return (
    <div className="bg-zinc-900 rounded-lg p-6 flex flex-col items-center shadow-[0_24px_80px_hsla(0,0%,0%,0.25)] w-full max-w-xs border border-[hsl(0,0%,22%)]">
      <div className="relative mb-4">
        <div className="w-32 h-32 rounded-2xl overflow-hidden bg-zinc-800 relative">
          {avatarUrl ? (
            <Image 
              src={avatarUrl} 
              alt={name} 
              fill 
              className="object-cover"
              priority
            />
          ) : (
            <div className="w-full h-full bg-zinc-800 flex items-center justify-center text-zinc-600">
              <span className="text-3xl">👤</span>
            </div>
          )}
        </div>
        <div className="absolute bottom-1 right-1 w-3 h-3 bg-green-500 rounded-full"></div>
      </div>
      
      <h2 className="text-xl font-bold text-white mb-1">{name}</h2>
      <p className="text-zinc-400 text-sm mb-4">{title}</p>
      
      <div className="w-full space-y-4 text-sm mt-2">
        <div className="flex items-center text-zinc-400">
          <FaMapMarkerAlt className="mr-3 text-zinc-500 text-base" />
          <span>{location}</span>
        </div>
        
        <div className="flex items-center text-zinc-400">
          <FaEnvelope className="mr-3 text-zinc-500 text-base" />
          <a href={`mailto:${email}`} className="hover:text-white transition-colors">
            {email}
          </a>
        </div>
        
        {github && (
          <div className="flex items-center text-zinc-400">
            <FaGithub className="mr-3 text-zinc-500 text-base" />
            <a href={github} target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">
              GitHub
            </a>
          </div>
        )}
        
        {linkedin && (
          <div className="flex items-center text-zinc-400">
            <FaLinkedin className="mr-3 text-zinc-500 text-base" />
            <a href={linkedin} target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">
              LinkedIn
            </a>
          </div>
        )}
      </div>
      
      <div className="flex mt-6 space-x-2">
        {github && (
          <a href={github} target="_blank" rel="noopener noreferrer" className="w-8 h-8 rounded-full bg-zinc-800 flex items-center justify-center text-zinc-400 hover:bg-zinc-700 hover:text-white transition-colors">
            <FaGithub className="text-lg" />
          </a>
        )}
        {linkedin && (
          <a href={linkedin} target="_blank" rel="noopener noreferrer" className="w-8 h-8 rounded-full bg-zinc-800 flex items-center justify-center text-zinc-400 hover:bg-zinc-700 hover:text-white transition-colors">
            <FaLinkedin className="text-lg" />
          </a>
        )}
      </div>
    </div>
  );
};

export default ProfileCard;