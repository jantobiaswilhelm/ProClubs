import React from 'react';

const quotes = [
  {
    text: "mommy was truly an era",
    author: "Jan",
    response: {
      text: "mommy had great head",
      author: "Cama"
    }
  },
  {
    text: "substitute that black girl",
    author: "Nikro"
  },
  {
    text: "bro im gonna write an Email to EA fuck this",
    author: "Jan",
    response: {
      text: "bro i hope this email reaches you before i do",
      author: "Cama"
    }
  },
  {
    text: "Doesn't matter, there is like 5 people banging my ass",
    author: "Cama"
  }
];

const QuotesWall = () => {
  return (
    <div className="mt-8 bg-emerald-800 bg-opacity-50 rounded-xl p-4 border-2 border-emerald-600">
      <h3 className="text-yellow-400 font-bold text-xl mb-4 flex items-center gap-2">
        <span className="text-2xl">💬</span> Out of Context Hall of Fame
      </h3>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {quotes.map((quote, index) => (
          <div key={index} className="bg-emerald-900 bg-opacity-60 rounded-lg p-4 border border-emerald-700">
            <p className="text-white text-lg italic">"{quote.text}"</p>
            <p className="text-yellow-300 text-sm mt-1">— @{quote.author}</p>
            {quote.response && (
              <div className="mt-3 pl-4 border-l-2 border-yellow-400">
                <p className="text-gray-300 italic">"{quote.response.text}"</p>
                <p className="text-yellow-300 text-sm mt-1">— @{quote.response.author}</p>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default QuotesWall;
