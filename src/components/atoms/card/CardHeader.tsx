import React from 'react';

interface CardHeaderProps {
  children: React.ReactNode;
}

const CardHeader: React.FC<CardHeaderProps> = ({ children }) => {
  return (
    <div className="p-4 border-b border-gray-200">
      {children}
    </div>
  );
};

export default CardHeader;
