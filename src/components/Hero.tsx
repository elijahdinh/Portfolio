import React from 'react';
import { RobotHero } from './ui/robot-hero';

export const Hero: React.FC = () => {
  const handleExplore = () => {
    const element = document.getElementById('about');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <RobotHero 
      backgroundText="Elijah Dinh"
      ctaText="Explore Portfolio"
      onCtaClick={handleExplore}
      contactHref="#contact"
    />
  );
};
