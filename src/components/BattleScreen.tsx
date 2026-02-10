import { FC, useState, useCallback, useEffect } from 'react';
import HealthBar from './HealthBar';
import Menu from './Menu';
import VictoryModal from './VictoryModal';
import GameOverModal from './GameOverModal';
import MusicToggle from './MusicToggle';
import { useAudio } from '../hooks/useAudio';
import './BattleScreen.css';

const BattleScreen: FC = () => {
  const [opponentHp, setOpponentHp] = useState(100);
  const [isVictoryOpen, setIsVictoryOpen] = useState(false);
  const [isGameOverOpen, setIsGameOverOpen] = useState(false);
  const [isShaking, setIsShaking] = useState(false);
  const [isJumping, setIsJumping] = useState(false);
  const [isFainted, setIsFainted] = useState(false);
  const [isAttacking, setIsAttacking] = useState(false);

  // Play Pokémon battle theme
  const { toggle: toggleMusic, isPlaying } = useAudio('/battle-theme.mp3', true);

  const maxHp = 100;
  const opponentName = 'Mechak';
  const playerName = 'Eevee';

  const handleNo = useCallback(() => {
    // Trigger shake animation on opponent
    setIsShaking(true);
    setTimeout(() => setIsShaking(false), 500); // Shake lasts 500ms
    
    // Trigger attack animation on player
    setIsAttacking(true);
    setTimeout(() => setIsAttacking(false), 600); // Attack lasts 600ms
    
    setOpponentHp((prevHp) => Math.max(0, prevHp - (maxHp * 0.25)));
  }, [maxHp]);

  const handleYes = useCallback(() => {
    // Trigger jump animation
    setIsJumping(true);
    setTimeout(() => setIsJumping(false), 800); // Jump lasts 800ms
    
    setIsVictoryOpen(true);
  }, []);

  const handleCloseVictory = useCallback(() => {
    setIsVictoryOpen(false);
  }, []);

  const handleCloseGameOver = useCallback(() => {
    setIsGameOverOpen(false);
  }, []);

  useEffect(() => {
    if (opponentHp === 0) {
      setIsFainted(true);
      setIsGameOverOpen(true);
    }
  }, [opponentHp]);

  const isNoDisabled = opponentHp === 0;

  return (
    <div className="battle-screen">
      {/* Background */}
      <div className="battle-background"></div>

      {/* Opponent Sprite (top-right) */}
      <img
        src="/sprites/trainer.png"
        alt="Trainer"
        className={`sprite sprite-opponent ${isShaking ? 'shake' : ''} ${isFainted ? 'faint' : ''}`}
      />

      {/* Player Sprite (bottom-left) */}
      <img
        src="/sprites/evie.png"
        alt="Eevee"
        className={`sprite sprite-player ${isJumping ? 'jump' : ''} ${isAttacking ? 'attack' : ''}`}
      />

      {/* Opponent Health Bar */}
      <div className="health-bar-container opponent-health">
        <HealthBar
          name={opponentName}
          hp={opponentHp}
          maxHp={maxHp}
        />
      </div>

      {/* Player Health Bar */}
      <div className="health-bar-container player-health">
        <HealthBar name={playerName} hp={maxHp} maxHp={maxHp} />
      </div>

      {/* Menu */}
      <Menu onYes={handleYes} onNo={handleNo} disableNo={isNoDisabled} />

      {/* Victory Modal */}
      <VictoryModal isOpen={isVictoryOpen} onClose={handleCloseVictory} />

      {/* Game Over Modal */}
      <GameOverModal isOpen={isGameOverOpen} onClose={handleCloseGameOver} />

      {/* Music Toggle */}
      <MusicToggle isPlaying={isPlaying} onToggle={toggleMusic} />
    </div>
  );
};

export default BattleScreen;
