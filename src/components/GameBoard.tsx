import React, { useState, useEffect } from 'react';
import { Card } from './Card';
import { getDifficultyPairs, getNyiakengChars, shuffleArray } from '../utils/cards';
import type { Difficulty } from '../utils/types';

interface GameBoardProps {
  difficulty: Difficulty;
  onGameComplete: (moves: number, time: number) => void;
}

export const GameBoard: React.FC<GameBoardProps> = ({ difficulty, onGameComplete }) => {
  const [cards, setCards] = useState<string[]>([]);
  const [flippedIndexes, setFlippedIndexes] = useState<number[]>([]);
  const [matchedPairs, setMatchedPairs] = useState<Set<string>>(new Set());
  const [moves, setMoves] = useState(0);
  const [startTime] = useState<number>(Date.now());
  const [gameStarted, setGameStarted] = useState(false);
  const [isToggledImage, setIsToggledImage] = useState(true);

  // Initialize game board
  useEffect(() => {
    const pairCount = getDifficultyPairs(difficulty);
    const chars = getNyiakengChars(pairCount);
    const pairs = [...chars, ...chars];
    setCards(shuffleArray(pairs));
    setFlippedIndexes([]);
    setMatchedPairs(new Set());
    setMoves(0);
    setGameStarted(false);
    setIsToggledImage(true);
  }, [difficulty]);

  // Check for game completion
  useEffect(() => {
    if (gameStarted && matchedPairs.size > 0 && matchedPairs.size === cards.length / 2) {
      const endTime = Date.now();
      const totalTime = Math.floor((endTime - startTime) / 1000);
      onGameComplete(moves, totalTime);
    }
  }, [matchedPairs, cards.length, moves, startTime, onGameComplete, gameStarted]);

  const handleCardClick = (index: number) => {
    if (!gameStarted) {
      setGameStarted(true);
    }

    if (flippedIndexes.length === 2) return;
    if (flippedIndexes.includes(index)) return;
    if (matchedPairs.has(cards[index])) return;

    const newFlipped = [...flippedIndexes, index];
    setFlippedIndexes(newFlipped);

    if (newFlipped.length === 2) {
      setMoves(m => m + 1);
      if (cards[newFlipped[0]] === cards[newFlipped[1]]) {
        setMatchedPairs(prev => new Set([...prev, cards[newFlipped[0]]]));
        setFlippedIndexes([]);
      } else {
        setTimeout(() => setFlippedIndexes([]), 1000);
      }
    }
  };

  const toggleSwitch = () => setIsToggledImage(!isToggledImage);

  return (
    <div className="w-full max-w-6xl mx-auto p-4">
      <div className="flex items-center justify-center w-full mb-6">
        <label htmlFor="toggle" className="flex items-center cursor-pointer">
          <div className="relative">
            <input type="checkbox" id="toggle" className="sr-only" checked={isToggledImage} onChange={toggleSwitch} />
            <div className="block bg-gray-600 w-14 h-8 rounded-full"></div>
            <div className="dot absolute left-1 top-1 bg-white w-6 h-6 rounded-full transition"></div>
          </div>
          <div className="ml-3 text-gray-700 font-medium">
            Show Image!
          </div>
        </label>
      </div>
      <div className="mt-4 text-center text-lg font-semibold text-sky-600 mb-6">
        Moves: {moves}
      </div>
      <div className={`
        grid gap-4 mx-auto justify-center grid-cols-8
      `}>
        {cards.map((char, index) => (
          <Card
            key={index}
            char={char}
            isFlipped={flippedIndexes.includes(index)}
            isMatched={matchedPairs.has(char)}
            isToggledImage={isToggledImage}
            onClick={() => handleCardClick(index)}
          />
        ))}
      </div>
    </div>
  );
};