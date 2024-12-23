import React from 'react';
import type { GameStats } from '../utils/types';

interface VictoryModalProps {
  stats: GameStats;
  onPlayAgain: () => void;
}

export const VictoryModal: React.FC<VictoryModalProps> = ({ stats, onPlayAgain }) => {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
      <div className="bg-white p-8 rounded-lg shadow-xl text-center">
        <h2 className="text-2xl font-bold text-sky-600 mb-4">
          Congratulations! 🎉
        </h2>
        <p className="text-lg mb-2">You completed the game in:</p>
        <p className="text-xl font-semibold mb-4">
          {stats.moves} moves and {stats.time} seconds
        </p>
        <button
          onClick={onPlayAgain}
          className="bg-sky-600 text-white px-6 py-2 rounded-full text-lg font-semibold hover:bg-sky-700 transition-colors"
        >
          Play Again
        </button>
      </div>
    </div>
  );
};