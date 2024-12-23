import { useState } from 'react';
import { GameBoard } from './components/GameBoard';
import { GameHeader } from './components/GameHeader';
import { VictoryModal } from './components/VictoryModal';
import type { Difficulty } from './utils/types';

function App() {
  const [difficulty, setDifficulty] = useState<Difficulty>('easy');
  const [gameKey, setGameKey] = useState(0);
  const [showComplete, setShowComplete] = useState(false);
  const [stats, setStats] = useState({ moves: 0, time: 0 });

  const handleGameComplete = (moves: number, time: number) => {
    setStats({ moves, time });
    setShowComplete(true);
  };

  const startNewGame = (newDifficulty?: Difficulty) => {
    if (newDifficulty) {
      setDifficulty(newDifficulty);
    }
    setGameKey(prev => prev + 1);
    setShowComplete(false);
  };

  return (
    <div className="min-h-screen bg-gray-300">
      <div className="container mx-auto px-4 py-8">
        <GameHeader
          difficulty={difficulty}
          onDifficultyChange={startNewGame}
        />

        <GameBoard
          key={gameKey}
          difficulty={difficulty}
          onGameComplete={handleGameComplete}
        />

        {showComplete && (
          <VictoryModal
            stats={stats}
            onPlayAgain={() => startNewGame()}
          />
        )}
      </div>
    </div>
  );
}

export default App;