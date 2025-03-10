'use client';

import dynamic from 'next/dynamic';
import { lazy, Suspense, useEffect, useMemo, useState } from 'react';

// Static imports for essential components
import Navigation from '@/components/Navigation';
import ProfileCard from '@/components/ProfileCard';

import { AppleHelloVietnameseEffect } from '@/components/magicui/apple-hello-effect';
import { RetroGrid } from '@/components/magicui/retro-grid';

// Dynamic imports for heavy components
const FloatingActionButton = dynamic(() => import('@/components/animations/FloatingActionButton'), {
  ssr: false,
});

// Lazy loaded content components
const AboutSection = lazy(() => import('@/components/AboutSection'));
const ResumeSection = lazy(() => import('@/components/ResumeSection'));
const PortfolioSection = lazy(() => import('@/components/PortfolioSection'));
const ContactSection = lazy(() => import('@/components/ContactSection'));

// Conditionally loaded animation components
const CustomCursor = dynamic(() => import('@/components/animations/CustomCursor'), { ssr: false });
const SpaceUniverse = dynamic(() => import('@/components/animations/SpaceUniverse'), {
  ssr: false,
});
const ParticleBackground = dynamic(() => import('@/components/animations/ParticleBackground'), {
  ssr: false,
});
const FloatingElements = dynamic(() => import('@/components/animations/FloatingElements'), {
  ssr: false,
});
const ParticleVeil = dynamic(() => import('@/components/artifactui/particle-veil'), { ssr: false });

// Import JSON data
import portfolioData from '@/config/portfolio.json';
import profileData from '@/config/profile.json';
import resumeData from '@/config/resume.json';
import skillsData from '@/config/skills.json';

// Import icons
import { iconMap } from '@/lib/iconMap';

// Import SimpleLoader for Suspense fallback
import SimpleLoader from '@/components/SimpleLoader';

// Loading component for Suspense fallback
const LoadingFallback = () => <SimpleLoader dotCount={10} dotSize={8} circleSize={60} />;

export default function Home() {
  const [activeTab, setActiveTab] = useState('about');
  const [isMounted, setIsMounted] = useState(false);
  const [isReducedMotion, setIsReducedMotion] = useState(false);
  const [hello, setHello] = useState(false);

  // Handle mounting, reduced motion preference, and screen size detection
  useEffect(() => {
    // Check for reduced motion preference
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    setIsReducedMotion(mediaQuery.matches);

    // Set up event listeners
    const handleReducedMotionChange = (e: MediaQueryListEvent) => setIsReducedMotion(e.matches);

    // Add event listeners
    mediaQuery.addEventListener('change', handleReducedMotionChange);

    // Set mounted state
    setIsMounted(true);

    // Clean up event listeners
    return () => {
      mediaQuery.removeEventListener('change', handleReducedMotionChange);
    };
  }, []);

  // Memoize skills data to prevent unnecessary re-renders
  const skills = useMemo(() => {
    return skillsData.skills.map(skill => ({
      ...skill,
      icon: iconMap[skill.iconType],
    }));
  }, []);

  // Memoize content rendering to prevent unnecessary re-renders
  const renderContent = useMemo(() => {
    // Only render content when component is mounted
    if (!isMounted)
      return (
        <div className="fixed inset-0 w-screen h-screen flex items-center justify-center bg-[var(--color-bg-primary)] z-50">
          <LoadingFallback />
        </div>
      );

    return (
      <Suspense fallback={<LoadingFallback />}>
        {(() => {
          switch (activeTab) {
            case 'about':
              return (
                <div className="space-y-8">
                  <AboutSection
                    aboutText={profileData.aboutText}
                    passionText={profileData.passionText}
                    skills={skills}
                  />
                </div>
              );
            case 'resume':
              return (
                <ResumeSection
                  education={resumeData.education}
                  experience={resumeData.experience}
                />
              );
            case 'portfolio':
              return <PortfolioSection projects={portfolioData.projects} />;
            case 'contact':
              return <ContactSection />;
            default:
              return null;
          }
        })()}
      </Suspense>
    );
  }, [activeTab, isMounted, skills]);

  // Only render animations when component is mounted, user doesn't prefer reduced motion, and we're on desktop
  const shouldRenderAnimations = isMounted && !isReducedMotion;

  // Memoize animation components to prevent unnecessary re-renders
  const backgroundAnimations = useMemo(() => {
    if (!shouldRenderAnimations) return null;

    return (
      <>
        <RetroGrid opacity={0.2} />

        <CustomCursor />

        <SpaceUniverse
          starCount={250}
          planetCount={2}
          galaxyCount={1}
          cometCount={1}
          minStarSize={1}
          maxStarSize={3}
          minOpacity={0.3}
          maxOpacity={0.8}
          depth={true}
        />

        <ParticleBackground />

        <FloatingElements count={15} minSize={15} maxSize={40} minOpacity={0.2} maxOpacity={0.5} />

        <ParticleVeil
          particleCount={80}
          interactionRadius={80}
          speed={0.5}
          sizeRange={[2, 5]}
          className="fixed inset-0 pointer-events-none overflow-hidden z-0"
        />
      </>
    );
  }, [shouldRenderAnimations]);

  if (!hello) {
    return (
      <div className="fixed inset-0 w-screen h-screen flex items-center justify-center bg-[var(--color-bg-primary)] z-50">
        <AppleHelloVietnameseEffect onAnimationComplete={() => setHello(true)} speed={1.5} />
        <ParticleVeil
          particleCount={250}
          interactionRadius={250}
          speed={1}
          sizeRange={[2, 5]}
          className="fixed inset-0 pointer-events-none overflow-hidden z-0"
        />
      </div>
    );
  }

  return (
    <>
      {/* Render animation components conditionally */}
      {backgroundAnimations}

      <div className="min-h-screen py-10 px-4 md:px-10 bg-[var(--color-bg-primary)] text-[var(--color-text-primary)]">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-[300px_1fr] gap-8">
            {/* Left Column - Profile Card */}
            <div className="flex justify-center lg:justify-start">
              <ProfileCard {...profileData} />
            </div>

            {/* Right Column - Content */}
            <div className="space-y-8">
              <Navigation activeTab={activeTab} onTabChange={setActiveTab} />
              {renderContent}
            </div>
          </div>
        </div>

        {/* Floating Action Button */}
        <FloatingActionButton activeTab={activeTab} onTabChange={setActiveTab} />
      </div>
    </>
  );
}
