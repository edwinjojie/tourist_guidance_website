import React, { useEffect, useState } from 'react';
import './components/HeroSection.css'; // Your CSS file
import Navbar from './components/Navbar';

const App = () => {
  const [fadeOut, setFadeOut] = useState(false);

  useEffect(() => {
    // Trigger the fade-out after 3 seconds
    const timer = setTimeout(() => {
      setFadeOut(true);
    }, 3000); 

    return () => clearTimeout(timer);
  }, []);

  return (
    <div>
      {/* Hero Section */}
      <div className={`hero-section ${fadeOut ? 'fade-out' : ''}`}>
        <div className="hero-content" style={{backgroundColor:'black'}}>
          <h1>Welcome to the Tour Guide Website</h1>
          <h2>Explore More</h2>
        </div>
      </div>

      {/* Homepage Content: Visible after hero section fades out */}
      {fadeOut && (
        <div >
          <div>
          <Navbar/>
          </div>
          <p>Homepage content goes here with features like:</p>
          <ul>
            <li>Translation</li>
            <li>AR feature</li>
            <li>Map API</li>
            <li>SOS button</li>
            <li>Trending places carousel</li>
          </ul>
        </div>
      )}
    </div>
  );
};

export default App;
