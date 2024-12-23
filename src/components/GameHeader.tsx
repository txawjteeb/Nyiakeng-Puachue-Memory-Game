import React from 'react';
import { DifficultySelector } from './DifficultySelector';
import type { Difficulty } from '../utils/types';

interface GameHeaderProps {
  difficulty: Difficulty;
  onDifficultyChange: (difficulty: Difficulty) => void;
}

export const GameHeader: React.FC<GameHeaderProps> = ({
  difficulty,
  onDifficultyChange,
}) => {
  return (
    <div className="text-center mb-8">
      <div className="flex items-center justify-center gap-3 mb-4">
        <h1 className="text-4xl font-bold text-sky-600">
          𞄀 𞄁 𞄂 𞄃 &nbsp;&nbsp;&nbsp;&nbsp;Nyiakeng Puachue Memory Game&nbsp;&nbsp;&nbsp;&nbsp; 𞄄 𞄅 𞄆 𞄇
        </h1>
      </div>
      <DifficultySelector
        currentDifficulty={difficulty}
        onDifficultyChange={onDifficultyChange}
      />
    </div>
  );
};