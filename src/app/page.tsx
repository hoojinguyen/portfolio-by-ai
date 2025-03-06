"use client";

import React, { useState } from 'react';
import ProfileCard from '@/components/ProfileCard';
import AboutSection from '@/components/AboutSection';
import ResumeSection from '@/components/ResumeSection';
import PortfolioSection from '@/components/PortfolioSection';
import Navigation from '@/components/Navigation';
import { FaReact, FaNodeJs, FaJsSquare, FaPython, FaAws, FaDocker, FaGitAlt } from 'react-icons/fa';
import ContactSection from '@/components/ContactSection';
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

  // Resume data
  const educationData = [
    {
      school: 'Nihareeka College Of Management And Information Technology',
      degree: 'Bachelor of Science in Computer Science and information Technology (B.Sc. CSIT)',
      period: '2017 — 2021',
      logo: '/images/nihareeka-logo.png'
    },
    {
      school: 'Greenland International College',
      degree: '+2 Science',
      period: '2015 — 2017',
      logo: '/images/greenland-logo.png'
    }
  ];

  const experienceData = [
    {
      position: 'Mid-Level Flutter Developer',
      company: 'Tokma Technologies',
      location: 'Kathmandu, Nepal',
      period: 'Aug, 2024 — Present • 8 mos',
      logo: '/images/tokma-logo.png',
      responsibilities: [
        'Developed new features and implemented UI designs into code using Flutter.',
        'Designed and created custom e-form features including scrolling features and data entries.',
        'Integrated Google and Facebook sign-in for user authentication.',
        'Designed dynamic functionalities using the BLOC design pattern.',
        'Integrated APIs for seamless data communication and backend functionality.',
        'Implemented payment gateway integration like Khalti for secure transactions.',
        'Collaborated with other developers and backend team to deliver features.',
        'Participated in team meetings to discuss new features and project updates.',
        'Ensured smooth functionality and user-friendly experiences throughout the app.',
        'Performed code review and deployed the app in Playstore and Appstore.'
      ]
    },
    {
      position: 'Flutter Developer',
      company: 'Infancer Technology',
      location: 'Kathmandu, Nepal',
      period: 'Oct, 2022 — Aug, 2024 • 1 yr, 11 mos',
      logo: '/images/infancer-logo.png',
      responsibilities: [
        'Developed new features and transformed UI designs into fully functional user interfaces.',
        'Integrated payment solution like eSewa, for secure and seamless transactions.',
        'Optimized application performance to ensure a smooth and engaging user experience.',
        'Supported other team members initiatives by developing solutions to common problems and sharing those solutions.',
        'Identified and resolved bugs, improving app stability and performance.',
        'Wrote clean, maintainable, and testable code following best practices.',
        'Utilization of latest version of support libraries to ensure backend compatibility.',
        'Integrated payment solution like eSewa, for secure and seamless transactions.',
        'Collaborated with backend developers, designers, and cross-functional teams to deliver scalable, high-quality solutions.'
      ]
    }
  ];

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

  // Portfolio data
  const portfolioData = [
    {
      id: 1,
      title: 'GitHub Users Search App',
      category: 'Web development',
      image: '/images/github-users.png',
      demoUrl: 'https://github-users-search.demo.com',
      sourceUrl: 'https://github.com/username/github-users'
    },
    {
      id: 2,
      title: 'Car Zone',
      category: 'Web development',
      image: '/images/car-zone.png',
      demoUrl: 'https://car-zone.demo.com',
      sourceUrl: 'https://github.com/username/car-zone'
    },
    {
      id: 3,
      title: 'Movfix',
      category: 'Web development',
      image: '/images/movfix.png',
      demoUrl: 'https://movfix.demo.com',
      sourceUrl: 'https://github.com/username/movfix'
    },
    {
      id: 4,
      title: 'Fitness Zone',
      category: 'Web development',
      image: '/images/fitness-zone.png',
      demoUrl: 'https://fitness-zone.demo.com',
      sourceUrl: 'https://github.com/username/fitness-zone'
    },
    {
      id: 5,
      title: 'E-Commerce',
      category: 'Web development',
      image: '/images/ecommerce.png',
      demoUrl: 'https://ecommerce.demo.com',
      sourceUrl: 'https://github.com/username/ecommerce'
    },
    {
      id: 6,
      title: 'Netflix Clone',
      category: 'Web development',
      image: '/images/netflix-clone.png',
      demoUrl: 'https://netflix-clone.demo.com',
      sourceUrl: 'https://github.com/username/netflix-clone'
    }
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
        return <ResumeSection education={educationData} experience={experienceData} />;
      case 'portfolio':
        return <PortfolioSection projects={portfolioData} />;
      case 'blog':
        return <div>Blog Content</div>;
      case 'contact':
        return <ContactSection location={profileData.location} />;
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
