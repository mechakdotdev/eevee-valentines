import { FC } from 'react';
import './MusicToggle.css';

interface MusicToggleProps {
  isPlaying: boolean;
  onToggle: () => void;
}

const MusicToggle: FC<MusicToggleProps> = ({ isPlaying, onToggle }) => {
  return (
    <button
      className="music-toggle"
      onClick={onToggle}
      title={isPlaying ? 'Mute music' : 'Unmute music'}
    >
      {isPlaying ? '🔊' : '🔇'}
    </button>
  );
};

export default MusicToggle;
