import React, { useEffect, useState } from 'react';
import './HeroSection.css';  // We'll define the CSS next

const HeroSection = ({ onHeroExit }) => {
  const [showHero, setShowHero] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowHero(false);
      onHeroExit();  // Trigger the callback to indicate the hero is done
    }, 2000);  // 2 seconds timer

    return () => clearTimeout(timer);  // Cleanup timer on component unmount
  }, [onHeroExit]);

  return (
    <div className={`hero-section ${!showHero ? 'slide-out' : ''}`}>
      <div className="hero-content">
        <h1>Welcome to TheWay</h1>
        <button>Start Your Journey</button>
      </div>
    </div>
  );
};

export default HeroSection;
