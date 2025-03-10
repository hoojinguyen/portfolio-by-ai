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
  FaSun,
  FaMoon,
} from 'react-icons/fa';
import { SiThreads } from 'react-icons/si';
import TiltEffect from './TiltEffect';
import { useTheme } from '@/context/ThemeContext';

// Define keyframes for the pulsing animation
const pulseAnimation = `
  @keyframes pulse {
    0% {
      transform: scale(0.95);
      box-shadow: 0 0 0 0 rgba(72, 187, 120, 0.7);
      opacity: 0.8;
    }
    
    70% {
      transform: scale(1.05);
      box-shadow: 0 0 0 6px rgba(72, 187, 120, 0);
      opacity: 1;
    }
    
    100% {
      transform: scale(0.95);
      box-shadow: 0 0 0 0 rgba(72, 187, 120, 0);
      opacity: 0.8;
    }
  }
`;

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
  const { theme, toggleTheme } = useTheme();

  return (
    <TiltEffect
      rotationIntensity={10}
      glareOpacity={0.15}
      scale={1.02}
      className="w-full max-w-full sm:max-w-xs md:max-w-xs"
    >
      {/* Desktop version - only visible on large screens */}
      <div className="hidden lg:flex lg:flex-col bg-[var(--color-bg-secondary)] rounded-xl p-6 shadow-[0_24px_80px_var(--color-shadow)] w-full border border-[var(--color-border-primary)] max-h-fit sticky top-10 relative">
        {/* Theme Toggle - Desktop */}
        <div className="absolute top-4 right-4 z-10">
          <button
            onClick={toggleTheme}
            className="p-2 rounded-full transition-colors duration-200 hover:bg-slate-200 dark:hover:bg-zinc-700 focus:outline-none focus:ring-2 focus:ring-amber-500 dark:focus:ring-blue-400 bg-[var(--color-bg-tertiary)]/50 hover:bg-gradient-to-r from-[var(--color-accent-tertiary)]/20 to-[var(--color-accent-secondary)]/20"
            aria-label={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`}
          >
            {theme === 'dark' ? (
              <FaSun className="text-yellow-500 w-4 h-4" />
            ) : (
              <FaMoon className="text-violet-600 w-4 h-4" />
            )}
          </button>
        </div>
        {/* Theme Toggle - Desktop */}
        <div className="absolute top-4 right-4 z-10">
          <button
            onClick={toggleTheme}
            className="p-2 rounded-full transition-colors duration-200 hover:bg-slate-200 dark:hover:bg-zinc-700 focus:outline-none focus:ring-2 focus:ring-amber-500 dark:focus:ring-blue-400 bg-[var(--color-bg-tertiary)]/50 hover:bg-gradient-to-r from-[var(--color-accent-tertiary)]/20 to-[var(--color-accent-secondary)]/20"
            aria-label={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`}
          >
            {theme === 'dark' ? (
              <FaSun className="text-yellow-500 w-4 h-4" />
            ) : (
              <FaMoon className="text-violet-600 w-4 h-4" />
            )}
          </button>
        </div>

        {/* Avatar - larger for desktop */}
        <div className="flex flex-col items-center mb-6">
          <div className="relative mb-4">
            <div className="w-32 h-32 rounded-full overflow-hidden bg-[var(--color-bg-tertiary)] relative border-2 border-[var(--color-accent-primary)]/30 shadow-lg">
              {avatarUrl ? (
                <Image src={avatarUrl} alt={name} fill className="object-cover" priority />
              ) : (
                <div className="w-full h-full bg-[var(--color-bg-tertiary)] flex items-center justify-center text-[var(--color-text-tertiary)]">
                  <span className="text-3xl">👤</span>
                </div>
              )}
            </div>
            <div
              className="absolute bottom-0 right-0 w-4 h-4 bg-green-500 rounded-full border-2 border-[var(--color-bg-secondary)] shadow-md"
              style={{
                animation: 'pulse 2s infinite',
                transform: 'translate(25%, 25%)',
                zIndex: 10,
                bottom: '10px',
                right: '10px',
              }}
            ></div>
            <style jsx>{pulseAnimation}</style>
          </div>

          {/* Name and title - centered for desktop */}
          <h2 className="text-2xl font-bold mb-1 text-center bg-gradient-to-r from-[var(--color-accent-tertiary)] via-[var(--color-accent-secondary)] to-[var(--color-accent-primary)] text-transparent bg-clip-text hover:scale-105 transform transition-transform duration-200 ease-in-out">
            {name}
          </h2>
          <p className="text-sm mb-2 text-center bg-gradient-to-r from-cyan-400 via-blue-500 to-indigo-500 text-transparent bg-clip-text hover:scale-105 transform transition-transform duration-200 ease-in-out">
            {title}
          </p>
          <div className="flex items-center justify-center space-x-3 mb-2">
            <span className="text-[var(--color-text-tertiary)]">👨‍💻</span>
            <span className="text-[var(--color-text-tertiary)]">⚽️</span>
            <span className="text-[var(--color-text-tertiary)]">🏸</span>
            <span className="text-[var(--color-text-tertiary)]">🎧</span>
            <span className="text-[var(--color-text-tertiary)]">🕺</span>
          </div>
        </div>

        {/* Divider */}
        <div className="w-full h-px bg-gradient-to-r from-transparent via-[var(--color-border-secondary)] to-transparent mb-4"></div>

        {/* Contact information - standard layout for desktop */}
        <div className="w-full grid grid-cols-1 gap-3 mb-4">
          <div className="flex items-center text-[var(--color-text-secondary)] group hover:text-[var(--color-text-primary)] transition-all duration-300">
            <div className="mr-3 p-2 rounded-lg bg-[var(--color-bg-tertiary)]/50 group-hover:bg-gradient-to-r from-[var(--color-accent-tertiary)]/20 to-[var(--color-accent-secondary)]/20 transition-all duration-300 shadow-sm">
              <FaMapMarkerAlt className="text-[var(--color-accent-primary)]" />
            </div>
            <span>{location}</span>
          </div>

          <div className="flex items-center text-[var(--color-text-secondary)] group hover:text-[var(--color-text-primary)] transition-all duration-300">
            <div className="mr-3 p-2 rounded-lg bg-[var(--color-bg-tertiary)]/50 group-hover:bg-gradient-to-r from-[var(--color-accent-tertiary)]/20 to-[var(--color-accent-secondary)]/20 transition-all duration-300 shadow-sm">
              <FaEnvelope className="text-[var(--color-accent-secondary)]" />
            </div>
            <a href={`mailto:${email}`} className="hover:underline">
              {email}
            </a>
          </div>

          <div className="flex items-center text-[var(--color-text-secondary)] group hover:text-[var(--color-text-primary)] transition-all duration-300">
            <div className="mr-3 p-2 rounded-lg bg-[var(--color-bg-tertiary)]/50 group-hover:bg-gradient-to-r from-[var(--color-accent-tertiary)]/20 to-[var(--color-accent-secondary)]/20 transition-all duration-300 shadow-sm">
              <FaPhone className="text-[var(--color-accent-tertiary)]" />
            </div>
            <a href={`tel:${phone}`} className="hover:underline">
              {phone}
            </a>
          </div>
        </div>

        {/* Social media links for desktop */}
        {(github || linkedin || facebook || instagram || thread || twitter) && (
          <>
            <div className="w-full h-px bg-gradient-to-r from-transparent via-[var(--color-border-secondary)] to-transparent mb-4"></div>
            <div className="flex justify-center space-x-4 w-full">
              {github && (
                <a
                  href={github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded-lg bg-[var(--color-bg-tertiary)]/50 hover:bg-gradient-to-r from-[var(--color-accent-tertiary)]/20 to-[var(--color-accent-secondary)]/20 text-[var(--color-text-secondary)] hover:text-[var(--color-accent-primary)] transition-all duration-300 hover:scale-110"
                >
                  <FaGithub />
                </a>
              )}
              {linkedin && (
                <a
                  href={linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded-lg bg-[var(--color-bg-tertiary)]/50 hover:bg-gradient-to-r from-[var(--color-accent-tertiary)]/20 to-[var(--color-accent-secondary)]/20 text-[var(--color-text-secondary)] hover:text-[var(--color-accent-primary)] transition-all duration-300 hover:scale-110"
                >
                  <FaLinkedin />
                </a>
              )}
              {facebook && (
                <a
                  href={facebook}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded-lg bg-[var(--color-bg-tertiary)]/50 hover:bg-gradient-to-r from-[var(--color-accent-tertiary)]/20 to-[var(--color-accent-secondary)]/20 text-[var(--color-text-secondary)] hover:text-[var(--color-accent-primary)] transition-all duration-300 hover:scale-110"
                >
                  <FaFacebook />
                </a>
              )}
              {instagram && (
                <a
                  href={instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded-lg bg-[var(--color-bg-tertiary)]/50 hover:bg-gradient-to-r from-[var(--color-accent-tertiary)]/20 to-[var(--color-accent-secondary)]/20 text-[var(--color-text-secondary)] hover:text-[var(--color-accent-primary)] transition-all duration-300 hover:scale-110"
                >
                  <FaInstagram />
                </a>
              )}
              {thread && (
                <a
                  href={thread}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded-lg bg-[var(--color-bg-tertiary)]/50 hover:bg-gradient-to-r from-[var(--color-accent-tertiary)]/20 to-[var(--color-accent-secondary)]/20 text-[var(--color-text-secondary)] hover:text-[var(--color-accent-primary)] transition-all duration-300 hover:scale-110"
                >
                  <SiThreads />
                </a>
              )}
              {twitter && (
                <a
                  href={twitter}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded-lg bg-[var(--color-bg-tertiary)]/50 hover:bg-gradient-to-r from-[var(--color-accent-tertiary)]/20 to-[var(--color-accent-secondary)]/20 text-[var(--color-text-secondary)] hover:text-[var(--color-accent-primary)] transition-all duration-300 hover:scale-110"
                >
                  <FaTwitter />
                </a>
              )}
            </div>
          </>
        )}
      </div>

      {/* Mobile version - only visible on small to medium screens */}
      <div className="lg:hidden bg-[var(--color-bg-secondary)] rounded-xl p-3 sm:p-5 flex flex-col items-center shadow-[0_24px_80px_var(--color-shadow)] w-full border border-[var(--color-border-primary)] max-h-fit sticky top-10 relative">
        {/* Theme Toggle - Mobile */}
        <div className="absolute top-3 right-3 z-10">
          <button
            onClick={toggleTheme}
            className="p-1.5 rounded-full transition-colors duration-200 hover:bg-slate-200 dark:hover:bg-zinc-700 focus:outline-none focus:ring-2 focus:ring-amber-500 dark:focus:ring-blue-400 bg-[var(--color-bg-tertiary)]/50 hover:bg-gradient-to-r from-[var(--color-accent-tertiary)]/20 to-[var(--color-accent-secondary)]/20"
            aria-label={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`}
          >
            {theme === 'dark' ? (
              <FaSun className="text-yellow-500 w-3.5 h-3.5" />
            ) : (
              <FaMoon className="text-violet-600 w-3.5 h-3.5" />
            )}
          </button>
        </div>
        {/* Theme Toggle - Mobile */}
        <div className="absolute top-3 right-3 z-10">
          <button
            onClick={toggleTheme}
            className="p-1.5 rounded-full transition-colors duration-200 hover:bg-slate-200 dark:hover:bg-zinc-700 focus:outline-none focus:ring-2 focus:ring-amber-500 dark:focus:ring-blue-400 bg-[var(--color-bg-tertiary)]/50 hover:bg-gradient-to-r from-[var(--color-accent-tertiary)]/20 to-[var(--color-accent-secondary)]/20"
            aria-label={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`}
          >
            {theme === 'dark' ? (
              <FaSun className="text-yellow-500 w-3.5 h-3.5" />
            ) : (
              <FaMoon className="text-violet-600 w-3.5 h-3.5" />
            )}
          </button>
        </div>

        {/* Header section with avatar and basic info */}
        <div className="flex items-center w-full mb-2 sm:mb-3">
          {/* Smaller avatar */}
          <div className="relative mr-3 flex-shrink-0">
            <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-full overflow-hidden bg-[var(--color-bg-tertiary)] relative border-2 border-[var(--color-accent-primary)]/30 shadow-lg">
              {avatarUrl ? (
                <Image src={avatarUrl} alt={name} fill className="object-cover" priority />
              ) : (
                <div className="w-full h-full bg-[var(--color-bg-tertiary)] flex items-center justify-center text-[var(--color-text-tertiary)]">
                  <span className="text-xl">👤</span>
                </div>
              )}
            </div>
            <div
              className="absolute bottom-0 right-0 w-3 h-3 bg-green-500 rounded-full border-2 border-[var(--color-bg-secondary)] shadow-md"
              style={{
                animation: 'pulse 2s infinite',
                transform: 'translate(25%, 25%)',
                zIndex: 10,
                bottom: '4px',
                right: '4px',
              }}
            ></div>
            <style jsx>{pulseAnimation}</style>
          </div>

          {/* Name, title and interests */}
          <div className="flex-1">
            <h2 className="text-lg sm:text-xl font-bold mb-0.5 bg-gradient-to-r from-[var(--color-accent-tertiary)] via-[var(--color-accent-secondary)] to-[var(--color-accent-primary)] text-transparent bg-clip-text hover:scale-105 transform transition-transform duration-200 ease-in-out">
              {name}
            </h2>
            <p className="text-xs sm:text-sm mb-1 bg-gradient-to-r from-cyan-400 via-blue-500 to-indigo-500 text-transparent bg-clip-text hover:scale-105 transform transition-transform duration-200 ease-in-out">
              {title}
            </p>
            <div className="flex items-center space-x-2">
              <span className="text-[var(--color-text-tertiary)] text-xs">👨‍💻</span>
              <span className="text-[var(--color-text-tertiary)] text-xs">⚽️</span>
              <span className="text-[var(--color-text-tertiary)] text-xs">🏸</span>
              <span className="text-[var(--color-text-tertiary)] text-xs">🎧</span>
              <span className="text-[var(--color-text-tertiary)] text-xs">🕺</span>
            </div>
          </div>
        </div>

        {/* Thin divider */}
        <div className="w-full h-px bg-gradient-to-r from-transparent via-[var(--color-border-secondary)] to-transparent mb-2.5"></div>

        {/* Contact information in a more compact layout */}
        <div className="w-full grid grid-cols-1 gap-2 text-xs mb-2.5">
          <div className="flex items-center text-[var(--color-text-secondary)] group hover:text-[var(--color-text-primary)] transition-all duration-300 transform hover:translate-x-1">
            <div className="mr-2 p-1.5 rounded-lg bg-[var(--color-bg-tertiary)]/50 group-hover:bg-gradient-to-r from-[var(--color-accent-tertiary)]/20 to-[var(--color-accent-secondary)]/20 transition-all duration-300 shadow-sm">
              <FaMapMarkerAlt className="text-[var(--color-accent-primary)]" />
            </div>
            <span>{location}</span>
          </div>

          <div className="flex items-center text-[var(--color-text-secondary)] group hover:text-[var(--color-text-primary)] transition-all duration-300 transform hover:translate-x-1">
            <div className="mr-2 p-1.5 rounded-lg bg-[var(--color-bg-tertiary)]/50 group-hover:bg-gradient-to-r from-[var(--color-accent-tertiary)]/20 to-[var(--color-accent-secondary)]/20 transition-all duration-300 shadow-sm">
              <FaEnvelope className="text-[var(--color-accent-secondary)]" />
            </div>
            <a href={`mailto:${email}`} className="hover:underline">
              {email}
            </a>
          </div>

          <div className="flex items-center text-[var(--color-text-secondary)] group hover:text-[var(--color-text-primary)] transition-all duration-300 transform hover:translate-x-1">
            <div className="mr-2 p-1.5 rounded-lg bg-[var(--color-bg-tertiary)]/50 group-hover:bg-gradient-to-r from-[var(--color-accent-tertiary)]/20 to-[var(--color-accent-secondary)]/20 transition-all duration-300 shadow-sm">
              <FaPhone className="text-[var(--color-accent-tertiary)]" />
            </div>
            <a href={`tel:${phone}`} className="hover:underline">
              {phone}
            </a>
          </div>
        </div>

        {/* Social media links */}
        {(github || linkedin || facebook || instagram || thread || twitter) && (
          <>
            <div className="w-full h-px bg-gradient-to-r from-transparent via-[var(--color-border-secondary)] to-transparent mb-2.5"></div>
            <div className="flex justify-center space-x-3 w-full">
              {github && (
                <a
                  href={github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded-lg bg-[var(--color-bg-tertiary)]/50 hover:bg-gradient-to-r from-[var(--color-accent-tertiary)]/20 to-[var(--color-accent-secondary)]/20 text-[var(--color-text-secondary)] hover:text-[var(--color-accent-primary)] transition-all duration-300 hover:scale-110"
                >
                  <FaGithub />
                </a>
              )}
              {linkedin && (
                <a
                  href={linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded-lg bg-[var(--color-bg-tertiary)]/50 hover:bg-gradient-to-r from-[var(--color-accent-tertiary)]/20 to-[var(--color-accent-secondary)]/20 text-[var(--color-text-secondary)] hover:text-[var(--color-accent-primary)] transition-all duration-300 hover:scale-110"
                >
                  <FaLinkedin />
                </a>
              )}
              {facebook && (
                <a
                  href={facebook}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded-lg bg-[var(--color-bg-tertiary)]/50 hover:bg-gradient-to-r from-[var(--color-accent-tertiary)]/20 to-[var(--color-accent-secondary)]/20 text-[var(--color-text-secondary)] hover:text-[var(--color-accent-primary)] transition-all duration-300 hover:scale-110"
                >
                  <FaFacebook />
                </a>
              )}
              {instagram && (
                <a
                  href={instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded-lg bg-[var(--color-bg-tertiary)]/50 hover:bg-gradient-to-r from-[var(--color-accent-tertiary)]/20 to-[var(--color-accent-secondary)]/20 text-[var(--color-text-secondary)] hover:text-[var(--color-accent-primary)] transition-all duration-300 hover:scale-110"
                >
                  <FaInstagram />
                </a>
              )}
              {thread && (
                <a
                  href={thread}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded-lg bg-[var(--color-bg-tertiary)]/50 hover:bg-gradient-to-r from-[var(--color-accent-tertiary)]/20 to-[var(--color-accent-secondary)]/20 text-[var(--color-text-secondary)] hover:text-[var(--color-accent-primary)] transition-all duration-300 hover:scale-110"
                >
                  <SiThreads />
                </a>
              )}
              {twitter && (
                <a
                  href={twitter}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded-lg bg-[var(--color-bg-tertiary)]/50 hover:bg-gradient-to-r from-[var(--color-accent-tertiary)]/20 to-[var(--color-accent-secondary)]/20 text-[var(--color-text-secondary)] hover:text-[var(--color-accent-primary)] transition-all duration-300 hover:scale-110"
                >
                  <FaTwitter />
                </a>
              )}
            </div>
          </>
        )}
      </div>
    </TiltEffect>
  );
};

export default ProfileCard;
