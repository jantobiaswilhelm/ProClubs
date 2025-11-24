import React from 'react';

const PlayerCard = ({ player, onClick }) => {
  return (
    <div
      onClick={onClick}
      className="relative cursor-pointer transition-all duration-300 hover:scale-110 hover:-translate-y-2 group"
    >
      {/* Full Player Card Image */}
      <img 
        src={player.cardImage} 
        alt={player.gamertag}
        className="w-auto h-[202px] object-contain drop-shadow-2xl"
      />

      {/* Known For - appears on hover */}
      <div className="absolute -bottom-12 left-1/2 transform -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 w-40 bg-gray-900 text-white text-xs p-2 rounded-lg shadow-xl text-center z-10 pointer-events-none">
        <div className="font-semibold text-yellow-400 mb-1">Known for:</div>
        <div className="italic">{player.knownFor}</div>
        {/* Arrow pointing up */}
        <div className="absolute -top-2 left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-4 border-r-4 border-b-4 border-transparent border-b-gray-900"></div>
      </div>
    </div>
  );
};

export default PlayerCard;
