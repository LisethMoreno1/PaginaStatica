import React from 'react';

interface AvatarImageProps {
    src: string;
    alt: string;
}

export const AvatarImage: React.FC<AvatarImageProps> = ({ src, alt }) => (
    <img 
        className="w-12 h-12 rounded-full object-cover" 
        src={src} 
        alt={alt} 
    />
);
