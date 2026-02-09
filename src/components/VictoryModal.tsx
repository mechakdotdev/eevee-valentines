import { FC, useEffect, useRef } from 'react';
import confetti from 'canvas-confetti';
import './VictoryModal.css';

interface VictoryModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const VictoryModal: FC<VictoryModalProps> = ({ isOpen, onClose }) => {
  const confettiRef = useRef(false);

  useEffect(() => {
    if (isOpen && !confettiRef.current) {
      confettiRef.current = true;
      // Fire confetti once
      confetti({
        particleCount: 100,
        spread: 70,
        origin: { y: 0.5 },
      });
    }
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <h1 className="modal-title">She said YES!</h1>
        <div className="modal-info">
          <p>
            <span className="label">Date:</span> February 14th 2026
          </p>
          <br/>
          <p>
            Details will be discussed when we next see each other pookster!
          </p>
        </div>
        <button className="modal-close-btn" onClick={onClose}>
          Close
        </button>
      </div>
    </div>
  );
};

export default VictoryModal;
