import { FC } from 'react';
import './DesktopOnlyModal.css';

const DesktopOnlyModal: FC = () => {
  return (
    <div className="desktop-only-modal-overlay">
      <div className="desktop-only-modal-content">
        <h1 className="modal-title">Desktop Experience Required</h1>
        <p className="modal-message">
          This game is optimized for desktop browsers.
        </p>
        <p className="modal-message">
          Please visit us on a desktop computer for the full experience!
        </p>
        <div className="modal-emoji">💻</div>
      </div>
    </div>
  );
};

export default DesktopOnlyModal;
