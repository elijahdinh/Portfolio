import React from 'react';
import liftingImg from '../assets/lifting.jpg';
import travelingImg from '../assets/traveling.jpg';
import foodImg from '../assets/food.jpg';

interface HobbyCardProps {
  title: string;
  description: string;
  imgSrc: string;
  fallbackGradient: string;
}

const HobbyCard: React.FC<HobbyCardProps> = ({ title, description, imgSrc, fallbackGradient }) => {
  return (
    <div className="hobby-card">
      <div 
        className="hobby-image-container" 
        style={{ background: fallbackGradient }}
      >
        <img 
          src={imgSrc} 
          alt={title} 
          className="hobby-img"
          onError={(e) => {
            // Hide the image if it fails to load and show the gradient fallback
            (e.target as HTMLImageElement).style.display = 'none';
          }}
        />
        <div className="hobby-image-overlay"></div>
      </div>
      <div className="hobby-info">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
};

export const Hobbies: React.FC = () => {
  return (
    <section id="hobbies" className="section-container">
      <h2 className="section-title">Hobbies & Interests</h2>
      <div className="hobbies-grid">
        <HobbyCard
          title="Lifting & Fitness"
          description="Dedicated to weightlifting and athletic conditioning. Focused on strength gains, physical health, and self-discipline."
          imgSrc={liftingImg}
          fallbackGradient="linear-gradient(135deg, #1f1c2c, #928dab)"
        />
        <HobbyCard
          title="Traveling"
          description="Exploring new cities, landscapes, and cultures. Passionate about learning local customs and gaining global perspectives."
          imgSrc={travelingImg}
          fallbackGradient="linear-gradient(135deg, #2c3e50, #3498db)"
        />
        <HobbyCard
          title="Food & Culinary"
          description="Exploring diverse food scenes, tasting different cultural cuisines, and experimenting with healthy recipes."
          imgSrc={foodImg}
          fallbackGradient="linear-gradient(135deg, #d38312, #a83279)"
        />
      </div>
    </section>
  );
};
