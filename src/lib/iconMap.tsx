import React from 'react';
import {
  FaAws,
  FaDocker,
  FaGitAlt,
  FaJsSquare,
  FaNodeJs,
  FaPython,
  FaReact,
  FaVuejs,
} from 'react-icons/fa';
import {
  SiFirebase,
  SiGraphql,
  SiKubernetes,
  SiMongodb,
  SiNextdotjs,
  SiNuxtdotjs,
  SiPostgresql,
  SiRedux,
  SiTailwindcss,
  SiTypescript,
} from 'react-icons/si';

// Map skill icons to their components
export const iconMap: { [key: string]: React.ReactNode } = {
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