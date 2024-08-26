import React from 'react';

interface AvatarProps {
    className?: string;
    children: React.ReactNode;
}

export const Avatar: React.FC<AvatarProps> = ({ className, children }) => (
    <div className={`avatar ${className}`}>{children}</div>
);
