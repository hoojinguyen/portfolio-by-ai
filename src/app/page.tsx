"use client";

import React, { useState } from 'react';
import ProfileCard from '@/components/ProfileCard';
import AboutSection from '@/components/AboutSection';
import Navigation from '@/components/Navigation';
import { FaReact, FaNodeJs, FaJsSquare, FaPython, FaAws, FaDocker, FaGitAlt } from 'react-icons/fa';
import { SiTypescript, SiTailwindcss, SiMongodb, SiGraphql, SiRedux } from 'react-icons/si';

export default function Home() {
  const [activeTab, setActiveTab] = useState('about');

  // Profile data
  const profileData = {
    name: 'Aakash Rajpurohit',
    title: 'Full-stack Developer',
    avatarUrl: 'https://avatars.githubusercontent.com/u/1?v=4',
    location: 'San Francisco, CA',
    email: 'example@email.com',
    github: 'https://github.com',
    linkedin: 'https://linkedin.com',
  };

  // About section text
  const aboutText = "I'm a full-stack developer with 5+ years of experience in web development and mobile app development. I specialize in JavaScript, React, Node.js, and modern web technologies.";
  const passionText = "I enjoy working on complex problems and creating user-friendly solutions. My passion is to combine technology and design to create meaningful experiences that users love to interact with.";

  // Skills data
  const skills = [
    {
      name: 'React',
      icon: <FaReact className="text-3xl" />,
      color: 'bg-blue-500/20'
    },
    {
      name: 'Node.js',
      icon: <FaNodeJs className="text-3xl" />,
      color: 'bg-green-500/20'
    },
    {
      name: 'TypeScript',
      icon: <SiTypescript className="text-3xl" />,
      color: 'bg-blue-600/20'
    },
    {
      name: 'JavaScript',
      icon: <FaJsSquare className="text-3xl" />,
      color: 'bg-yellow-500/20'
    },
    {
      name: 'Python',
      icon: <FaPython className="text-3xl" />,
      color: 'bg-blue-400/20'
    },
    {
      name: 'AWS',
      icon: <FaAws className="text-3xl" />,
      color: 'bg-orange-400/20'
    },
    {
      name: 'Docker',
      icon: <FaDocker className="text-3xl" />,
      color: 'bg-blue-500/20'
    },
    {
      name: 'MongoDB',
      icon: <SiMongodb className="text-3xl" />,
      color: 'bg-green-600/20'
    },
    {
      name: 'GraphQL',
      icon: <SiGraphql className="text-3xl" />,
      color: 'bg-pink-500/20'
    },
    {
      name: 'Redux',
      icon: <SiRedux className="text-3xl" />,
      color: 'bg-purple-500/20'
    },
    {
      name: 'Git',
      icon: <FaGitAlt className="text-3xl" />,
      color: 'bg-red-500/20'
    },
    {
      name: 'TailwindCSS',
      icon: <SiTailwindcss className="text-3xl" />,
      color: 'bg-cyan-500/20'
    },
  ];

  const renderContent = () => {
    switch (activeTab) {
      case 'about':
        return (
          <div className="space-y-8">
            <AboutSection aboutText={aboutText} passionText={passionText} skills={skills} />
          </div>
        );
      case 'resume':
        return <div>Resume Content</div>;
      case 'portfolio':
        return <div>Portfolio Content</div>;
      case 'blog':
        return <div>Blog Content</div>;
      case 'contact':
        return <div>Contact Content</div>;
      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen bg-zinc-950 text-white py-10 px-4 md:px-10">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-[300px_1fr] gap-8">
          {/* Left Column - Profile Card */}
          <div className="flex justify-center lg:justify-start">
            <ProfileCard {...profileData} />
          </div>
          
          {/* Right Column - Content */}
          <div className="space-y-8">
            <Navigation activeTab={activeTab} onTabChange={setActiveTab} />
            {renderContent()}
          </div>
        </div>
      </div>
    </div>
  );
}
