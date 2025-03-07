"use client";

import React, { useState } from "react";
import ProfileCard from "@/components/ProfileCard";
import AboutSection from "@/components/AboutSection";
import ResumeSection from "@/components/ResumeSection";
import PortfolioSection from "@/components/PortfolioSection";
import Navigation from "@/components/Navigation";
import ThemeToggle from "@/components/ThemeToggle";
import FloatingActionButton from "@/components/FloatingActionButton";
import {
  FaReact,
  FaNodeJs,
  FaJsSquare,
  FaPython,
  FaAws,
  FaDocker,
  FaGitAlt,
  FaVuejs,
} from "react-icons/fa";
import ContactSection from "@/components/ContactSection";
import {
  SiTypescript,
  SiTailwindcss,
  SiMongodb,
  SiGraphql,
  SiRedux,
  SiNextdotjs,
  SiNuxtdotjs,
  SiKubernetes,
  SiPostgresql,
  SiFirebase,
} from "react-icons/si";

// Import JSON data
import profileData from "@/config/profile.json";
import skillsData from "@/config/skills.json";
import portfolioData from "@/config/portfolio.json";
import resumeData from "@/config/resume.json";

export default function Home() {
  const [activeTab, setActiveTab] = useState("about");

  // Map skill icons to their components
  const iconComponents: { [key: string]: React.ReactNode } = {
    FaReact: <FaReact className="text-3xl" />,
    FaNodeJs: <FaNodeJs className="text-3xl" />,
    FaJsSquare: <FaJsSquare className="text-3xl" />,
    FaPython: <FaPython className="text-3xl" />,
    FaAws: <FaAws className="text-3xl" />,
    FaDocker: <FaDocker className="text-3xl" />,
    FaGitAlt: <FaGitAlt className="text-3xl" />,
    SiTypescript: <SiTypescript className="text-3xl" />,
    SiTailwindcss: <SiTailwindcss className="text-3xl" />,
    SiMongodb: <SiMongodb className="text-3xl" />,
    SiGraphql: <SiGraphql className="text-3xl" />,
    SiRedux: <SiRedux className="text-3xl" />,
    SiNextdotjs: <SiNextdotjs className="text-3xl" />,
    SiNuxtdotjs: <SiNuxtdotjs className="text-3xl" />,
    FaVuejs: <FaVuejs className="text-3xl" />,
    SiKubernetes: <SiKubernetes className="text-3xl" />,
    SiPostgresql: <SiPostgresql className="text-3xl" />,
    SiFirebase: <SiFirebase className="text-3xl" />,
  };

  // Map skill data with icons
  const skills = skillsData.skills.map((skill) => ({
    ...skill,
    icon: iconComponents[skill.iconType],
  }));

  const renderContent = () => {
    switch (activeTab) {
      case "about":
        return (
          <div className="space-y-8">
            <AboutSection
              aboutText={profileData.aboutText}
              passionText={profileData.passionText}
              skills={skills}
            />
          </div>
        );
      case "resume":
        return (
          <ResumeSection
            education={resumeData.education}
            experience={resumeData.experience}
          />
        );
      case "portfolio":
        return <PortfolioSection projects={portfolioData.projects} />;
      case "contact":
        return <ContactSection />;
      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen py-10 px-4 md:px-10 bg-[var(--color-bg-primary)] text-[var(--color-text-primary)]">
      <div className="max-w-7xl mx-auto">
        <div className="flex justify-end mb-4">
          <ThemeToggle />
        </div>
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
      
      {/* Floating Action Button */}
      <FloatingActionButton activeTab={activeTab} onTabChange={setActiveTab} />
    </div>
  );
}
