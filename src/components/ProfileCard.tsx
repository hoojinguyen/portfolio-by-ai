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
import TiltEffect from './TiltEffect';

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
    <TiltEffect rotationIntensity={10} glareOpacity={0.15} scale={1.02} className="w-full max-w-xs">
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

        {/* Social Links */}
        <div className="flex space-x-3 mt-6">
          {github && (
            <a
              href={github}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-full bg-[var(--color-bg-tertiary)]/50 text-[var(--color-text-tertiary)] hover:text-[var(--color-accent-primary)] hover:bg-[var(--color-bg-tertiary)] transition-all duration-300 transform hover:scale-110"
              aria-label="GitHub"
            >
              <FaGithub />
            </a>
          )}
          {linkedin && (
            <a
              href={linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-full bg-[var(--color-bg-tertiary)]/50 text-[var(--color-text-tertiary)] hover:text-[#0077b5] hover:bg-[var(--color-bg-tertiary)] transition-all duration-300 transform hover:scale-110"
              aria-label="LinkedIn"
            >
              <FaLinkedin />
            </a>
          )}
          {facebook && (
            <a
              href={facebook}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-full bg-[var(--color-bg-tertiary)]/50 text-[var(--color-text-tertiary)] hover:text-[#1877f2] hover:bg-[var(--color-bg-tertiary)] transition-all duration-300 transform hover:scale-110"
              aria-label="Facebook"
            >
              <FaFacebook />
            </a>
          )}
          {instagram && (
            <a
              href={instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-full bg-[var(--color-bg-tertiary)]/50 text-[var(--color-text-tertiary)] hover:text-[#e1306c] hover:bg-[var(--color-bg-tertiary)] transition-all duration-300 transform hover:scale-110"
              aria-label="Instagram"
            >
              <FaInstagram />
            </a>
          )}
          {thread && (
            <a
              href={thread}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-full bg-[var(--color-bg-tertiary)]/50 text-[var(--color-text-tertiary)] hover:text-[#000000] hover:bg-[var(--color-bg-tertiary)] transition-all duration-300 transform hover:scale-110"
              aria-label="Thread"
            >
              <SiThreads />
            </a>
          )}
          {twitter && (
            <a
              href={twitter}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-full bg-[var(--color-bg-tertiary)]/50 text-[var(--color-text-tertiary)] hover:text-[#1da1f2] hover:bg-[var(--color-bg-tertiary)] transition-all duration-300 transform hover:scale-110"
              aria-label="Twitter"
            >
              <FaTwitter />
            </a>
          )}
        </div>
      </div>
    </TiltEffect>
  );
};

export default ProfileCard;
