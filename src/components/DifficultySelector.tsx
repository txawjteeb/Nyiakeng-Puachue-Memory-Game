import React from 'react';
import type { Difficulty } from '../utils/types';

interface DifficultySelectorProps {
  currentDifficulty: Difficulty;
  onDifficultyChange: (difficulty: Difficulty) => void;
}

export const DifficultySelector: React.FC<DifficultySelectorProps> = ({
  currentDifficulty,
  onDifficultyChange,
}) => {
  const difficulties: Difficulty[] = ['easy', 'medium', 'hard'];

  return (
    <div className="flex justify-center gap-4 mb-6">
      {difficulties.map((difficulty) => (
        <button
          key={difficulty}
          onClick={() => onDifficultyChange(difficulty)}
          className={`
            px-6 py-2 rounded-full text-lg font-semibold transition-colors
            ${currentDifficulty === difficulty
              ? 'bg-sky-600 text-white'
              : 'bg-white text-sky-600 hover:bg-sky-100'
            }
          `}
        >
          {difficulty.charAt(0).toUpperCase() + difficulty.slice(1)}
        </button>
      ))}
    </div>
  );
};