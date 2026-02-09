import { FC } from 'react';
import './GameOverModal.css';

interface GameOverModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const GameOverModal: FC<GameOverModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <h1 className="modal-title">MECHAK FAINTED!</h1>
        <div className="modal-message">
          <p>I fainted from all the rejection...</p>
          <p className="emotion">😵</p>
          <p className="small-text">
            Maybe try hating your boyfriend less next time?
          </p>
        </div>
        <button className="modal-close-btn" onClick={onClose}>
          Close
        </button>
      </div>
    </div>
  );
};

export default GameOverModal;
