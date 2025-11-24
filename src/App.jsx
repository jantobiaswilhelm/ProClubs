import React, { useState } from 'react';
import PlayerCard from './components/PlayerCard';
import PlayerModal from './components/PlayerModal';
import NewsTicker from './components/NewsTicker';
import playersData from './players.json';
import avatars from './assets/avatars/avatars';
import playerCards from './assets/avatars/playerCards';
import logo from './assets/avatars/Scawwy_Lads.png';

function App() {
  const [selectedPlayer, setSelectedPlayer] = useState(null);

  const getPlayerById = (id) => {
    const player = playersData.players.find(p => p.id === id);
    if (!player) return null;
    
    // Map avatar key to imported image (for modal) and cardImage (for field display)
    return {
      ...player,
      avatar: avatars[player.avatar] || avatars.placeholder,
      cardImage: playerCards[player.avatar] || playerCards.placeholder
    };
  };

  // Get all players with resolved avatars and card images
  const playersWithAvatars = playersData.players.map(player => ({
    ...player,
    avatar: avatars[player.avatar] || avatars.placeholder,
    cardImage: playerCards[player.avatar] || playerCards.placeholder
  }));

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-800 via-green-700 to-green-900 relative overflow-hidden">
      
      {/* Football Field Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0 bg-[repeating-linear-gradient(0deg,transparent,transparent_50px,rgba(255,255,255,0.1)_50px,rgba(255,255,255,0.1)_51px)]"></div>
        <div className="absolute inset-0 bg-[repeating-linear-gradient(90deg,transparent,transparent_50px,rgba(255,255,255,0.1)_50px,rgba(255,255,255,0.1)_51px)]"></div>
      </div>

      {/* Header */}
      <div className="relative z-10 text-center py-8">
        <div className="flex items-center justify-center gap-4 mb-2">
          <img 
            src={logo} 
            alt="Scawwy Lad FC Logo" 
            className="w-32 h-32 object-contain drop-shadow-2xl"
          />
          <h1 className="text-6xl font-bold text-white drop-shadow-2xl">
            Scawwy Lads FC
          </h1>
        </div>
        <p className="text-2xl text-yellow-300 font-semibold drop-shadow-lg">
          EA FC 26 • Formation: 4-2-3-1
        </p>
        <p className="text-lg text-gray-200 mt-2 italic">
          Click on a player to see their hilarious profile
        </p>
      </div>

      {/* News Ticker */}
      <NewsTicker />

      {/* Formation Container */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 py-8">
        <div className="relative w-full h-[900px] bg-green-600 bg-opacity-30 rounded-3xl border-4 border-white shadow-2xl overflow-hidden">
          
          {/* Center Circle */}
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-40 h-40 border-4 border-white rounded-full opacity-30"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-3 h-3 bg-white rounded-full"></div>

          {/* Penalty Areas */}
          <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-80 h-32 border-4 border-t-4 border-l-4 border-r-4 border-white opacity-30"></div>
          <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-80 h-32 border-4 border-b-4 border-l-4 border-r-4 border-white opacity-30"></div>

          {/* Players */}
          {playersData.formation.positions.map((pos, index) => {
            const player = getPlayerById(pos.playerId);
            if (!player) return null;

            return (
              <div
                key={index}
                className="absolute transform -translate-x-1/2 -translate-y-1/2"
                style={{
                  left: `${pos.x}%`,
                  top: `${pos.y}%`,
                }}
              >
                <PlayerCard
                  player={{ ...player, position: pos.position }}
                  onClick={() => setSelectedPlayer(player)}
                />
              </div>
            );
          })}
        </div>

        {/* Legend */}
        <div className="mt-8 bg-emerald-800 bg-opacity-50 rounded-xl p-4 border-2 border-emerald-600">
          <h3 className="text-yellow-400 font-bold text-xl mb-3">Squad Info</h3>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {playersWithAvatars.map((player) => (
              <div key={player.id} className="flex items-center gap-2 text-white">
                <span className="w-8 h-8 bg-yellow-400 text-emerald-900 font-bold rounded-full flex items-center justify-center text-sm">
                  {player.jerseyNumber}
                </span>
                <div>
                  <div className="font-semibold">{player.gamertag}</div>
                  <div className="text-xs text-gray-300">{player.realName} • {player.position}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Player Modal */}
      {selectedPlayer && (
        <PlayerModal
          player={selectedPlayer}
          onClose={() => setSelectedPlayer(null)}
        />
      )}
    </div>
  );
}

export default App;
