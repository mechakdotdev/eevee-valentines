import { FC, useState } from 'react';
import './HomePage.css';

interface HomePageProps {
  onStartAdventure: () => void;
}

const HomePage: FC<HomePageProps> = ({ onStartAdventure }) => {
  const [isTransitioning, setIsTransitioning] = useState(false);

  const handleStartClick = () => {
    setIsTransitioning(true);
    setTimeout(() => {
      onStartAdventure();
    }, 600); // Duration of pixelation effect
  };

  return (
    <div className={`home-page ${isTransitioning ? 'transitioning' : ''}`}>
      <div className="home-background"></div>
      
      {isTransitioning && (
        <>
          <div className="pixelate-overlay"></div>
          <div className="pixelate-scanline"></div>
        </>
      )}
      
      <div className="home-content">
        <h1 className="home-title">Eevee's Secret Adventure</h1>
        
        <button 
          className="start-button"
          onClick={handleStartClick}
          disabled={isTransitioning}
        >
          Start
        </button>
      </div>
    </div>
  );
};

export default HomePage;
