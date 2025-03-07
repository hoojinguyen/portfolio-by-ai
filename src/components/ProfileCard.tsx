import Image from 'next/image';
import React from 'react';
import {
  FaEnvelope,
  FaFacebook,
  FaGithub,
  FaInstagram,
  FaLinkedin,
  FaMapMarkerAlt,
  FaPhone,
  FaTwitter,
} from 'react-icons/fa';
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
  twitter,
}) => {
  return (
    <div className="bg-[var(--color-bg-secondary)] rounded-lg p-6 flex flex-col items-center shadow-[0_24px_80px_var(--color-shadow)] w-full max-w-xs border border-[var(--color-border-primary)] max-h-fit sticky top-10">
      <div className="relative mb-4">
        <div className="w-32 h-32 rounded-2xl overflow-hidden bg-[var(--color-bg-tertiary)] relative">
          {avatarUrl ? (
            <Image src={avatarUrl} alt={name} fill className="object-cover" priority />
          ) : (
            <div className="w-full h-full bg-[var(--color-bg-tertiary)] flex items-center justify-center text-[var(--color-text-tertiary)]">
              <span className="text-3xl">👤</span>
            </div>
          )}
        </div>
        <div className="absolute bottom-1 right-1 w-3 h-3 bg-green-500 rounded-full"></div>
      </div>

      <h2 className="text-xl font-bold mb-2 bg-gradient-to-r from-[var(--color-accent-tertiary)] via-[var(--color-accent-secondary)] to-[var(--color-accent-primary)] text-transparent bg-clip-text hover:scale-105 transform transition-transform duration-200 ease-in-out">
        {name}
      </h2>
      <p className="text-sm mb-3 bg-gradient-to-r from-cyan-400 via-blue-500 to-indigo-500 text-transparent bg-clip-text hover:scale-105 transform transition-transform duration-200 ease-in-out">
        {title}
      </p>
      <p className="text-[var(--color-text-tertiary)] text-sm mb-4">👨‍💻 | ⚽️ | 🏸 | 🎧 | 🕺</p>

      <div className="w-full space-y-4 text-sm mt-2">
        <div className="flex items-center text-[var(--color-text-secondary)] group hover:text-[var(--color-text-primary)] transition-all duration-300 transform hover:translate-x-1">
          <div className="mr-3 p-2 rounded-lg bg-[var(--color-bg-tertiary)]/50 group-hover:bg-gradient-to-r from-[var(--color-accent-tertiary)]/20 to-[var(--color-accent-secondary)]/20 transition-all duration-300">
            <FaMapMarkerAlt className="text-base text-[var(--color-text-tertiary)] group-hover:text-[var(--color-accent-secondary)] transition-colors" />
          </div>
          <span className="break-words group-hover:text-[var(--color-text-primary)]">
            {location}
          </span>
        </div>

        <div className="flex items-center text-[var(--color-text-secondary)] group hover:text-[var(--color-text-primary)] transition-all duration-300 transform hover:translate-x-1">
          <div className="mr-3 p-2 rounded-lg bg-[var(--color-bg-tertiary)]/50 group-hover:bg-gradient-to-r from-blue-500/20 to-cyan-500/20 transition-all duration-300">
            <FaEnvelope className="text-base text-[var(--color-text-tertiary)] group-hover:text-cyan-400 transition-colors" />
          </div>
          <a
            href={`mailto:${email}`}
            className="break-words hover:text-[var(--color-text-primary)] transition-all duration-300"
          >
            {email}
          </a>
        </div>

        <div className="flex items-center text-[var(--color-text-secondary)] group hover:text-[var(--color-text-primary)] transition-all duration-300 transform hover:translate-x-1">
          <div className="mr-3 p-2 rounded-lg bg-[var(--color-bg-tertiary)]/50 group-hover:bg-gradient-to-r from-green-500/20 to-emerald-500/20 transition-all duration-300">
            <FaPhone className="text-base text-[var(--color-text-tertiary)] group-hover:text-emerald-400 transition-colors" />
          </div>
          <a
            href={`tel:${phone}`}
            className="break-words hover:text-[var(--color-text-primary)] transition-all duration-300"
          >
            {phone}
          </a>
        </div>
      </div>

      <div className="flex mt-6 space-x-4 flex-wrap justify-center gap-y-4">
        {github && (
          <a
            href={github}
            target="_blank"
            rel="noopener noreferrer"
            className="w-12 h-12 rounded-xl bg-[var(--color-bg-tertiary)]/50 flex items-center justify-center text-[var(--color-text-tertiary)] hover:bg-gradient-to-r from-gray-700 to-zinc-600 hover:text-white transition-all duration-300 transform hover:scale-110 hover:rotate-6 hover:shadow-lg hover:shadow-gray-500/20 group"
          >
            <FaGithub className="text-xl group-hover:animate-pulse" />
          </a>
        )}
        {linkedin && (
          <a
            href={linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="w-12 h-12 rounded-xl bg-[var(--color-bg-tertiary)]/50 flex items-center justify-center text-[var(--color-text-tertiary)] hover:bg-gradient-to-r from-blue-600 to-cyan-600 hover:text-white transition-all duration-300 transform hover:scale-110 hover:rotate-6 hover:shadow-lg hover:shadow-blue-500/20 group"
          >
            <FaLinkedin className="text-xl group-hover:animate-pulse" />
          </a>
        )}
        {facebook && (
          <a
            href={facebook}
            target="_blank"
            rel="noopener noreferrer"
            className="w-12 h-12 rounded-xl bg-[var(--color-bg-tertiary)]/50 flex items-center justify-center text-[var(--color-text-tertiary)] hover:bg-gradient-to-r from-blue-500 to-blue-600 hover:text-white transition-all duration-300 transform hover:scale-110 hover:rotate-6 hover:shadow-lg hover:shadow-blue-500/20 group"
          >
            <FaFacebook className="text-xl group-hover:animate-pulse" />
          </a>
        )}
        {instagram && (
          <a
            href={instagram}
            target="_blank"
            rel="noopener noreferrer"
            className="w-12 h-12 rounded-xl bg-[var(--color-bg-tertiary)]/50 flex items-center justify-center text-[var(--color-text-tertiary)] hover:bg-gradient-to-r from-pink-500 to-purple-600 hover:text-white transition-all duration-300 transform hover:scale-110 hover:rotate-6 hover:shadow-lg hover:shadow-pink-500/20 group"
          >
            <FaInstagram className="text-xl group-hover:animate-pulse" />
          </a>
        )}
        {thread && (
          <a
            href={thread}
            target="_blank"
            rel="noopener noreferrer"
            className="w-12 h-12 rounded-xl bg-[var(--color-bg-tertiary)]/50 flex items-center justify-center text-[var(--color-text-tertiary)] hover:bg-gradient-to-r from-gray-800 to-black hover:text-white transition-all duration-300 transform hover:scale-110 hover:rotate-6 hover:shadow-lg hover:shadow-gray-500/20 group"
          >
            <SiThreads className="text-xl group-hover:animate-pulse" />
          </a>
        )}
        {twitter && (
          <a
            href={twitter}
            target="_blank"
            rel="noopener noreferrer"
            className="w-12 h-12 rounded-xl bg-[var(--color-bg-tertiary)]/50 flex items-center justify-center text-[var(--color-text-tertiary)] hover:bg-gradient-to-r from-blue-400 to-blue-500 hover:text-white transition-all duration-300 transform hover:scale-110 hover:rotate-6 hover:shadow-lg hover:shadow-blue-500/20 group"
          >
            <FaTwitter className="text-xl group-hover:animate-pulse" />
          </a>
        )}
      </div>
    </div>
  );
};

export default ProfileCard;
