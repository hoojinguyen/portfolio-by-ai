import Image from "next/image";
import React from "react";
import { FaChartLine, FaCode } from "react-icons/fa";
import ScrollReveal from "./ScrollReveal";

interface AboutSectionProps {
  aboutText: string;
  passionText: string;
  skills: {
    name: string;
    icon: React.ReactNode | string;
    color: string;
  }[];
}

const AboutSection: React.FC<AboutSectionProps> = ({
  aboutText,
  passionText,
  skills,
}) => {
  const services = [
    {
      icon: <FaCode className="text-2xl text-[var(--color-accent-primary)]" />,
      title: "Web Development",
      description:
        "Creating attractive websites and web applications with modern technologies.",
    },
    {
      icon: <FaChartLine className="text-2xl text-[var(--color-accent-secondary)]" />,
      title: "Backend Development",
      description:
        "Highly performant solutions for your business needs with scalable and optimized experience.",
    },
  ];

  return (
    <div className="bg-[var(--color-bg-secondary)] rounded-lg p-8 shadow-[0_24px_80px_var(--color-shadow)] border border-[var(--color-border-primary)]">
      {/* About Me Section */}
      <ScrollReveal direction="up" width="100%">
        <div className="mb-10">
          <p className="text-[var(--color-text-secondary)] mb-4">{aboutText}</p>
          <p className="text-[var(--color-text-secondary)]">{passionText}</p>
        </div>
      </ScrollReveal>

      {/* What I'm Doing Section */}
      <ScrollReveal direction="up" width="100%" delay={0.2}>
        <div className="mb-10">
          <h2 className="text-xl font-bold text-[var(--color-text-primary)] mb-6 border-b border-[var(--color-accent-primary)] pb-2 inline-block">
            {"What I'm Doing"}
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {services.map((service, index) => (
              <ScrollReveal key={index} direction="up" delay={0.3 + index * 0.1}>
                <div className="flex items-start space-x-4 hover:transform hover:scale-105 transition-all duration-300">
                  <div className="bg-[var(--color-bg-tertiary)] p-3 rounded-md">{service.icon}</div>
                  <div>
                    <h3 className="text-[var(--color-text-primary)] font-medium mb-1">{service.title}</h3>
                    <p className="text-[var(--color-text-secondary)] text-sm">{service.description}</p>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </ScrollReveal>

      {/* Skills Section */}
      <ScrollReveal direction="up" width="100%" delay={0.4}>
        <div>
          <h2 className="text-xl font-bold text-[var(--color-text-primary)] mb-6 border-b border-[var(--color-accent-primary)] pb-2 inline-block">
            Skills
          </h2>

          <div className="grid grid-cols-4 sm:grid-cols-6 md:grid-cols-8 gap-2">
            {skills.map((skill, index) => (
              <ScrollReveal key={index} direction="up" delay={0.5 + index * 0.05}>
                <div className="flex flex-col items-center">
                  <div
                    className={`w-16 h-16 rounded-lg flex items-center justify-center mb-2 ${skill.color} border border-[var(--color-border-secondary)] shadow-[-4px_8px_24px_var(--color-shadow)] hover:shadow-[-8px_16px_32px_var(--color-shadow)] transition-all duration-300 ease-in-out hover:scale-110 cursor-pointer`}
                  >
                    {typeof skill.icon === "string" &&
                    skill.icon.startsWith("/") ? (
                      <Image
                        src={skill.icon}
                        alt={skill.name}
                        width={32}
                        height={32}
                      />
                    ) : (
                      <div className="text-2xl">{skill.icon}</div>
                    )}
                  </div>
                  <span className="text-[var(--color-text-secondary)] text-sm">{skill.name}</span>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </ScrollReveal>
    </div>
  );
};

export default AboutSection;
