import React from 'react';

const PlayerModal = ({ player, onClose }) => {
  if (!player) return null;

  return (
    <div 
      className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50 p-4"
      onClick={onClose}
    >
      <div 
        className="bg-gradient-to-br from-emerald-700 to-emerald-900 rounded-2xl shadow-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto border-4 border-yellow-400 relative"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 w-10 h-10 bg-red-600 hover:bg-red-700 rounded-full flex items-center justify-center text-white font-bold text-xl transition-colors shadow-lg z-10"
        >
          ×
        </button>

        {/* Header Section */}
        <div className="bg-gradient-to-r from-emerald-800 to-emerald-900 p-6 rounded-t-xl border-b-4 border-yellow-400">
          <div className="flex items-center gap-6">
            {/* Avatar */}
            <div className="w-32 h-32 rounded-full overflow-hidden border-4 border-yellow-400 shadow-xl flex-shrink-0">
              <img 
                src={player.avatar} 
                alt={player.gamertag}
                className="w-full h-full object-cover"
              />
            </div>

            {/* Player Info */}
            <div className="flex-1">
              <div className="flex items-center gap-3 mb-2">
                <h2 className="text-4xl font-bold text-white">{player.gamertag}</h2>
                <span className="px-4 py-1 bg-yellow-400 text-emerald-900 font-bold text-lg rounded-full">
                  #{player.jerseyNumber}
                </span>
              </div>
              <div className="text-yellow-300 text-xl font-semibold mb-2">
                {player.position} • {player.realName}
              </div>
              <div className="text-gray-300 italic text-lg border-l-4 border-yellow-400 pl-3">
                "{player.slogan}"
              </div>
            </div>
          </div>
        </div>

        {/* Body Section */}
        <div className="p-6 space-y-6">
          
          {/* Known For */}
          <div className="bg-emerald-800 bg-opacity-50 rounded-xl p-4 border-2 border-emerald-600">
            <h3 className="text-yellow-400 font-bold text-xl mb-2 flex items-center gap-2">
              <span className="text-2xl">⚡</span> Known For
            </h3>
            <p className="text-white text-lg italic">
              {player.knownFor}
            </p>
          </div>

          {/* Funny Stats */}
          <div className="bg-emerald-800 bg-opacity-50 rounded-xl p-4 border-2 border-emerald-600">
            <h3 className="text-yellow-400 font-bold text-xl mb-3 flex items-center gap-2">
              <span className="text-2xl">📊</span> Stats (Totally Accurate)
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              {Object.entries(player.funnyStats).map(([stat, value]) => (
                <div key={stat} className="bg-emerald-900 bg-opacity-60 rounded-lg p-3 border border-emerald-700">
                  <div className="text-gray-300 text-sm font-semibold">{stat}</div>
                  <div className="text-white text-lg font-bold">{value}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Personality */}
          <div className="bg-emerald-800 bg-opacity-50 rounded-xl p-4 border-2 border-emerald-600">
            <h3 className="text-yellow-400 font-bold text-xl mb-2 flex items-center gap-2">
              <span className="text-2xl">🎭</span> Personality
            </h3>
            <p className="text-white text-lg">
              {player.personality}
            </p>
          </div>

          {/* Signature Move */}
          <div className="bg-gradient-to-r from-yellow-500 to-yellow-600 rounded-xl p-4 border-2 border-yellow-300 shadow-lg">
            <h3 className="text-emerald-900 font-bold text-xl mb-2 flex items-center gap-2">
              <span className="text-2xl">🔥</span> Signature Move
            </h3>
            <p className="text-emerald-900 font-semibold text-lg italic">
              {player.signature}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PlayerModal;
