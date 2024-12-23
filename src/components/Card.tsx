import React from 'react';
import { nyiakengDict } from '../utils/nyiakengDict';

interface CardProps {
  char: string;
  isFlipped: boolean;
  isMatched: boolean;
  isToggledImage: boolean;
  onClick: () => void;
}

export const Card: React.FC<CardProps> = ({ char, isFlipped, isMatched, isToggledImage, onClick }) => {
  const charName = nyiakengDict[char] || 'Unknown Character';
  console.log('charName',charName);
  console.log('typeof charName', typeof charName);
  
  return (
    <div
      onClick={!isFlipped && !isMatched ? onClick : undefined}
      className={`
        relative w-32 h-40 cursor-pointer transform transition-transform duration-200
        ${!isMatched && !isFlipped ? 'hover:scale-105' : ''}
      `}
      title={charName}
    >
      <div
        className={`
          absolute w-full h-full transition-transform duration-500 transform-gpu
          ${isFlipped || isMatched ? 'rotate-y-180' : ''}
        `}
      >
        <div className="absolute w-full h-full backface-hidden">
          <div className="w-full h-full bg-sky-600 rounded-lg shadow-lg flex items-center justify-center">
            <span className="text-white text-9xl">?</span>
          </div>
        </div>
        <div className={`absolute w-full h-full ${isFlipped || isMatched ? 'rotate-y-180': 'backface-hidden rotate-y-180'}`}>
          <div className={`
            w-full h-full rounded-lg shadow-lg flex items-center justify-center
            ${isMatched ? 'bg-green-500' : 'bg-white'}
          `}>
            <span className={`${isToggledImage ? 'text-6xl' : 'text-9xl	'} flex flex-col items-center`}>
              {char}
              {isToggledImage && charName.includes('src/') && <img height="60%" width="60%" src={charName} alt="Logo" />}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};