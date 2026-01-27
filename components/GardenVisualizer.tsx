
import React from 'react';

interface GardenVisualizerProps {
  growth: number;
}

const GardenVisualizer: React.FC<GardenVisualizerProps> = ({ growth }) => {
  // Simple representation of growth
  const plantCount = Math.min(Math.floor(growth / 10) + 1, 12);
  
  return (
    <div className="relative w-full h-48 bg-gradient-to-b from-sky-100 to-emerald-50 rounded-xl border-2 border-emerald-100 overflow-hidden shadow-inner p-4 flex items-end justify-around">
      <div className="absolute top-4 left-4">
        <span className="text-xs font-bold text-emerald-800 uppercase tracking-widest">Spiritual Garden</span>
        <div className="flex items-center mt-1">
          <div className="w-24 h-2 bg-gray-200 rounded-full overflow-hidden">
            <div 
              className="h-full bg-emerald-500 transition-all duration-1000" 
              style={{ width: `${Math.min(growth, 100)}%` }}
            />
          </div>
          <span className="ml-2 text-xs font-semibold text-emerald-600">Lvl {Math.floor(growth/10)}</span>
        </div>
      </div>
      
      {Array.from({ length: plantCount }).map((_, i) => (
        <div 
          key={i} 
          className="flex flex-col items-center animate-bounce"
          style={{ animationDelay: `${i * 0.2}s`, animationDuration: '3s' }}
        >
          <div className="text-4xl">
            {i % 3 === 0 ? '🌿' : i % 3 === 1 ? '🌸' : '🌱'}
          </div>
          <div className="w-4 h-1 bg-black/10 rounded-full blur-[1px]"></div>
        </div>
      ))}

      {/* Clouds */}
      <div className="absolute top-8 right-8 text-3xl opacity-50 animate-pulse">☁️</div>
      <div className="absolute top-12 left-1/3 text-2xl opacity-40 animate-pulse" style={{ animationDelay: '1s' }}>☁️</div>
    </div>
  );
};

export default GardenVisualizer;
