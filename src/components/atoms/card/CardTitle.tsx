import React from 'react';

interface CardTitleProps {
  children: React.ReactNode;
}

const CardTitle: React.FC<CardTitleProps> = ({ children }) => {
  return (
    <h3 className="text-lg font-semibold text-gray-900">{children}</h3>
  );
};

export default CardTitle;
