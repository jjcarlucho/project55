import React from 'react';

interface ContainerProps {
  children: React.ReactNode;
  className?: string;
}

const Container: React.FC<ContainerProps> = ({ children, className = '' }) => {
  return (
    <div className={`w-full max-w-5xl mx-auto px-6 sm:px-8 ${className}`}>
      {children}
    </div>
  );
};

export default Container; 