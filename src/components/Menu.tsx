import { FC, useState } from 'react';
import './Menu.css';

interface MenuProps {
  onYes: () => void;
  onNo: () => void;
  disableNo: boolean;
}

const Menu: FC<MenuProps> = ({ onYes, onNo, disableNo }) => {
  const [hoveredOption, setHoveredOption] = useState<'yes' | 'no' | null>(null);

  return (
    <div className="menu-container">
      <div className="question-text">Will you be my valentine?</div>
      <div className="menu-options">
        <button
          className={`menu-option ${hoveredOption === 'yes' ? 'hovered' : ''}`}
          onClick={onYes}
          onMouseEnter={() => setHoveredOption('yes')}
          onMouseLeave={() => setHoveredOption(null)}
        >
          {hoveredOption === 'yes' && <span className="caret">▶</span>}
          YES
        </button>
        <button
          className={`menu-option ${hoveredOption === 'no' ? 'hovered' : ''} ${
            disableNo ? 'disabled' : ''
          }`}
          onClick={onNo}
          onMouseEnter={() => !disableNo && setHoveredOption('no')}
          onMouseLeave={() => setHoveredOption(null)}
          disabled={disableNo}
        >
          {hoveredOption === 'no' && !disableNo && (
            <span className="caret">▶</span>
          )}
          NO
        </button>
      </div>
    </div>
  );
};

export default Menu;
