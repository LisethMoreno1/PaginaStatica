import React from 'react';

interface CardFooterProps {
  children: React.ReactNode;
}

const CardFooter: React.FC<CardFooterProps> = ({ children }) => {
  return (
    <div className="p-4 border-t border-gray-200">
      {children}
    </div>
  );
};

export default CardFooter;
