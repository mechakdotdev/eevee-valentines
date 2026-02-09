import { FC } from 'react';
import './HealthBar.css';

interface HealthBarProps {
  name: string;
  hp: number;
  maxHp: number;
}

const HealthBar: FC<HealthBarProps> = ({ name, hp, maxHp }) => {
  const hpPercentage = (hp / maxHp) * 100;

  const getBarColor = (): string => {
    if (hp > 50) return 'green';
    if (hp > 20) return 'yellow';
    return 'red';
  };

  return (
    <div className="health-bar-wrapper">
      <div className="health-bar-label">{name}</div>
      <div className="health-bar-background">
        <div
          className={`health-bar-fill health-bar-${getBarColor()}`}
          style={{ width: `${hpPercentage}%` }}
        ></div>
      </div>
      <div className="health-bar-text">
        {hp}/{maxHp}
      </div>
    </div>
  );
};

export default HealthBar;
