import React from 'react';

const headlines = [
  "🚨 BREAKING: Six spotted onside for the first time this season — officials investigating",
  "📊 UPDATE: Hank's controller survives another match, chair not so lucky",
  "🇮🇪 Fortza unleashes 47-word poetic insult after missed longshot",
  "📢 Nikro's 'KEEP UP THE PRESS' heard from 3 different Discord servers",
  "🇨🇭 Jan blames lag for turnover, ping was 12ms",
  "⚽ Six scores accidental banger, immediately ruled offside",
  "🔥 Hank demands ball, forgets teammates exist for 6th consecutive match",
  "🕸️ Emy crosses from wrong wing, somehow assists anyway",
  "😤 Fortza goes silent after conceding — wellness check initiated",
  "🧊 Eirik's risky ping works for once, team in disbelief",
  "👑 Pat claims header despite being 5'2\" in-game",
  "📉 Team chemistry drops to 'Toxic' after 2-0 lead becomes 2-3 loss",
  "🎯 Jan's kickoff skill move into turnover streak reaches 14 games",
  "🏆 Trophy cabinet still empty, cobwebs thriving",
];

const NewsTicker = () => {
  return (
    <div className="bg-red-700 text-white py-2 overflow-hidden border-y-2 border-yellow-400">
      <div className="animate-ticker flex whitespace-nowrap">
        {[...headlines, ...headlines].map((headline, index) => (
          <span key={index} className="mx-8 text-sm font-semibold">
            {headline}
          </span>
        ))}
      </div>
    </div>
  );
};

export default NewsTicker;
