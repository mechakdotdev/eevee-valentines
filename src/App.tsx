import { FC, useState } from 'react';
import HomePage from './components/HomePage';
import BattleScreen from './components/BattleScreen';
import DesktopOnlyModal from './components/DesktopOnlyModal';
import './App.css';

const App: FC = () => {
  const [gameStarted, setGameStarted] = useState(false);

  const handleStartAdventure = () => {
    setGameStarted(true);
  };

  return (
    <>
      <DesktopOnlyModal />
      {gameStarted ? (
        <BattleScreen />
      ) : (
        <HomePage onStartAdventure={handleStartAdventure} />
      )}
    </>
  );
};

export default App;
