import React, { useEffect } from 'react';
import { useState } from 'react';

function Cube({ letter, isDone, position, animation, time, endGame }) {
  const [timeElapsed, setTimeElapsed] = useState(false);
  useEffect(() => {
    setTimeElapsed(false);
    if (!isDone) return;
    const timer = setTimeout(() => {
      setTimeElapsed(true);
    }, 300 * time);
    return () => clearTimeout(timer);
  }, [setTimeElapsed, time, isDone]);
  if (!timeElapsed) {
    return (
      <div
        className={`cube border
      ${letter ? 'border-custom' : ''}`}
      >
        {letter || ''}
      </div>
    );
  }

  if (timeElapsed)
    return (
      <div
        className={`cube border border-custom-two ${isDone ? (position ? position : 'wrong') : ''} 
      ${letter && !isDone ? 'border-custom' : ''}`}
      >
        {letter || ''}
      </div>
    );
}

export default Cube;
