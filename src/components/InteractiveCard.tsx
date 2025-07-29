import React from 'react';

interface InteractiveCardProps {
  children: React.ReactNode;
  className?: string;
}

const InteractiveCard: React.FC<InteractiveCardProps> = ({ children, className = '' }) => {
  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    e.currentTarget.style.setProperty('--mouse-x', `${x}px`);
    e.currentTarget.style.setProperty('--mouse-y', `${y}px`);
  };

  return (
    <div 
      className={`interactive-card p-8 ${className}`}
      onMouseMove={handleMouseMove}
    >
      {children}
    </div>
  );
};

export default InteractiveCard; 