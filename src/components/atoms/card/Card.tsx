import React from 'react';

interface CardProps {
  children: React.ReactNode;
}

const Card: React.FC<CardProps> = ({ children }) => {
  return (
    <div className="bg-white shadow-md rounded-lg overflow-hidden">
      {children}
    </div>
  );
};

export default Card;
