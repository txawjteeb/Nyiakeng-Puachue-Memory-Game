import { nyiakengDict } from './nyiakengDict';
import { puachueDict } from './puachueDict';
import { shotueDict } from './shotueDict';
import type { Difficulty } from './types';

export const getNyiakengChars = (count: number): string[] => {
  const chars = Object.keys(nyiakengDict);
  const shuffled = shuffleArray([...chars]);
  return shuffled.slice(0, count);
};

export const getPuachueChars = (count: number): string[] => {
  const chars = Object.keys(puachueDict);
  const shuffled = shuffleArray([...chars]);
  return shuffled.slice(0, count);
};

export const getShotueChars = (count: number): string[] => {
  const chars = Object.keys(shotueDict);
  const shuffled = shuffleArray([...chars]);
  return shuffled.slice(0, count);
};

export const shuffleArray = <T>(array: T[]): T[] => {
  const newArray = [...array];
  for (let i = newArray.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [newArray[i], newArray[j]] = [newArray[j], newArray[i]];
  }
  return newArray;
};

export const getDifficultyPairs = (difficulty: Difficulty): number => {
  switch (difficulty) {
    case 'easy':
      return 8;
    case 'medium':
      return 16;
    case 'hard':
      return 32;
    default:
      return 8;
  }
};