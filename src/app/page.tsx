import React from 'react';
import ProfileCard from '@/components/ProfileCard';
import AboutSection from '@/components/AboutSection';
import SkillsSection from '@/components/SkillsSection';
import { FaReact, FaNodeJs, FaFigma, FaJsSquare } from 'react-icons/fa';

export default function Home() {
  // Profile data
  const profileData = {
    name: 'Aakash Rajpurohit',
    title: 'Full-stack Developer',
    avatarUrl: 'https://avatars.githubusercontent.com/u/1?v=4', // Replace with your avatar URL
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
      name: 'Firebase',
      icon: <FaFigma className="text-3xl" />,
      color: 'bg-yellow-500/20'
    },
    {
      name: 'JavaScript',
      icon: <FaJsSquare className="text-3xl" />,
      color: 'bg-orange-500/20'
    },
  ];

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
            <AboutSection aboutText={aboutText} passionText={passionText} />
            <SkillsSection skills={skills} />
          </div>
        </div>
      </div>
    </div>
  );
}
