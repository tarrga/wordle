import { useState } from 'react';

function Cube({ letter, color, ms, error, errorNumber, index }) {
  const [show, setShow] = useState(false);
  const [delAnimation, setDelAnimation] = useState(false);
  setTimeout(() => {
    setShow(true);
  }, ms * 300);

  setTimeout(() => {
    setDelAnimation(true);
  }, 300);

  if (!letter) {
    return <div className={`cube border ${error && index < errorNumber ? 'shake' : ''}`}></div>;
  }
  if (letter && !color) {
    return (
      <div
        className={`cube border border-custom-two ${error ? 'shake' : ''} ${delAnimation ? '' : 'border-custom-two-a'}`}
      >
        {letter}
      </div>
    );
  }
  if (color && !show) {
    return <div className={`cube border border-custom-no-animation`}>{letter}</div>;
  }
  return <div className={`cube border ${color ? color : ''}`}>{letter}</div>;
}

export default Cube;
