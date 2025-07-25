import React, { useState } from 'react';

export const ChangeName = () => {
  const [isEating, setIsEating] = useState(false);

  const toggleEating = () => setIsEating(!isEating);
  const getColor = () => (isEating ? 'bg-yellow-600' : 'bg-black');

  return (
    <div className="ml-7">
      <h1 className={`text-xl mb-3 font-bold ${getColor()}`}>
        {isEating ? 'what are you dping ?' : 'Hurry Up'}
      </h1>
      <button onClick={toggleEating} className={`px-4 py-2 rounded-md text-white ${getColor()}`}>
        {isEating ? 'Yes' : 'No'}
      </button>
    </div>
  );
};

