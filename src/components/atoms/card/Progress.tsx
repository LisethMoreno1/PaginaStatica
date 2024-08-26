import React from 'react';

interface ProgressProps {
  value: number;
  className?: string;
}

const Progress: React.FC<ProgressProps> = ({ value, className }) => {
  return (
    <div className={`w-full bg-gray-200 rounded-full h-4 overflow-hidden ${className}`}>
      <div
        className="bg-green-500 h-full"
        style={{ width: `${value}%` }}
      ></div>
    </div>
  );
};

export default Progress;
