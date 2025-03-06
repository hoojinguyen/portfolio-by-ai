import React from 'react';
import Image from 'next/image';
import { FaMapMarkerAlt, FaEnvelope, FaPhone, FaGithub, FaLinkedin, FaFacebook, FaInstagram, FaTwitter } from 'react-icons/fa';
import { SiThreads } from 'react-icons/si';

interface ProfileCardProps {
  name: string;
  title: string;
  avatarUrl?: string;
  location: string;
  email: string;
  phone: string;
  github?: string;
  linkedin?: string;
  facebook?: string;
  instagram?: string;
  thread?: string;
  twitter?: string;
}

const ProfileCard: React.FC<ProfileCardProps> = ({
  name,
  title,
  avatarUrl,
  location,
  email,
  phone,
  github,
  linkedin,
  facebook,
  instagram,
  thread,
  twitter
}) => {
  return (
    <div className="bg-zinc-900 rounded-lg p-6 flex flex-col items-center shadow-[0_24px_80px_hsla(0,0%,0%,0.25)] w-full max-w-xs border border-[hsl(0,0%,22%)] h-fit-content sticky top-10">
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
      
      <h2 className="text-xl font-bold mb-1 bg-gradient-to-r from-purple-500 via-pink-500 to-yellow-500 text-transparent bg-clip-text hover:scale-105 transform transition-transform duration-200 ease-in-out">{name}</h2>
      <p className="text-sm mb-1 bg-gradient-to-r from-cyan-400 via-blue-500 to-indigo-500 text-transparent bg-clip-text hover:scale-105 transform transition-transform duration-200 ease-in-out">{title}</p>
      <p className="text-zinc-400 text-sm mb-4">👨‍💻 | ⚽️ | 🏸 | 🎧 | 🕺</p>
      
      <div className="w-full space-y-4 text-sm mt-2">
        <div className="flex items-center text-zinc-400 group hover:text-white transition-all duration-300 transform hover:translate-x-1">
          <div className="mr-3 p-2 rounded-lg bg-zinc-800/50 group-hover:bg-gradient-to-r from-purple-500/20 to-pink-500/20 transition-all duration-300">
            <FaMapMarkerAlt className="text-base text-zinc-500 group-hover:text-pink-400 transition-colors" />
          </div>
          <span className="break-words group-hover:text-gradient-primary">{location}</span>
        </div>
        
        <div className="flex items-center text-zinc-400 group hover:text-white transition-all duration-300 transform hover:translate-x-1">
          <div className="mr-3 p-2 rounded-lg bg-zinc-800/50 group-hover:bg-gradient-to-r from-blue-500/20 to-cyan-500/20 transition-all duration-300">
            <FaEnvelope className="text-base text-zinc-500 group-hover:text-cyan-400 transition-colors" />
          </div>
          <a href={`mailto:${email}`} className="break-words hover:text-gradient-primary transition-all duration-300">
            {email}
          </a>
        </div>

        <div className="flex items-center text-zinc-400 group hover:text-white transition-all duration-300 transform hover:translate-x-1">
          <div className="mr-3 p-2 rounded-lg bg-zinc-800/50 group-hover:bg-gradient-to-r from-green-500/20 to-emerald-500/20 transition-all duration-300">
            <FaPhone className="text-base text-zinc-500 group-hover:text-emerald-400 transition-colors" />
          </div>
          <a href={`tel:${phone}`} className="break-words hover:text-gradient-primary transition-all duration-300">
            {phone}
          </a>
        </div>
      </div>
      
      <div className="flex mt-6 space-x-4 flex-wrap justify-center gap-y-4">
        {github && (
          <a href={github} target="_blank" rel="noopener noreferrer" className="w-12 h-12 rounded-xl bg-zinc-800/50 flex items-center justify-center text-zinc-400 hover:bg-gradient-to-r from-gray-700 to-zinc-600 hover:text-white transition-all duration-300 transform hover:scale-110 hover:rotate-6 hover:shadow-lg hover:shadow-gray-500/20 group">
            <FaGithub className="text-xl group-hover:animate-pulse" />
          </a>
        )}
        {linkedin && (
          <a href={linkedin} target="_blank" rel="noopener noreferrer" className="w-12 h-12 rounded-xl bg-zinc-800/50 flex items-center justify-center text-zinc-400 hover:bg-gradient-to-r from-blue-600 to-cyan-600 hover:text-white transition-all duration-300 transform hover:scale-110 hover:rotate-6 hover:shadow-lg hover:shadow-blue-500/20 group">
            <FaLinkedin className="text-xl group-hover:animate-pulse" />
          </a>
        )}
        {facebook && (
          <a href={facebook} target="_blank" rel="noopener noreferrer" className="w-12 h-12 rounded-xl bg-zinc-800/50 flex items-center justify-center text-zinc-400 hover:bg-gradient-to-r from-blue-500 to-blue-600 hover:text-white transition-all duration-300 transform hover:scale-110 hover:rotate-6 hover:shadow-lg hover:shadow-blue-500/20 group">
            <FaFacebook className="text-xl group-hover:animate-pulse" />
          </a>
        )}
        {instagram && (
          <a href={instagram} target="_blank" rel="noopener noreferrer" className="w-12 h-12 rounded-xl bg-zinc-800/50 flex items-center justify-center text-zinc-400 hover:bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 hover:text-white transition-all duration-300 transform hover:scale-110 hover:rotate-6 hover:shadow-lg hover:shadow-pink-500/20 group">
            <FaInstagram className="text-xl group-hover:animate-pulse" />
          </a>
        )}
        {thread && (
          <a href={thread} target="_blank" rel="noopener noreferrer" className="w-12 h-12 rounded-xl bg-zinc-800/50 flex items-center justify-center text-zinc-400 hover:bg-gradient-to-r from-gray-800 to-black hover:text-white transition-all duration-300 transform hover:scale-110 hover:rotate-6 hover:shadow-lg hover:shadow-gray-500/20 group">
            <SiThreads className="text-xl group-hover:animate-pulse" />
          </a>
        )}
        {twitter && (
          <a href={twitter} target="_blank" rel="noopener noreferrer" className="w-12 h-12 rounded-xl bg-zinc-800/50 flex items-center justify-center text-zinc-400 hover:bg-gradient-to-r from-blue-400 to-blue-500 hover:text-white transition-all duration-300 transform hover:scale-110 hover:rotate-6 hover:shadow-lg hover:shadow-blue-500/20 group">
            <FaTwitter className="text-xl group-hover:animate-pulse" />
          </a>
        )}
      </div>
    </div>
  );
};

export default ProfileCard;