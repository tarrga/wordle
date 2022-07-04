import { useState } from 'react';

function Cube({ letter, color, ms }) {
  const [show, setShow] = useState(false);
  setTimeout(() => {
    setShow(true);
  }, ms * 300);
  if (!letter) {
    return <div className={`cube border`}></div>;
  }
  if (letter && !color) {
    return <div className={`cube border border-custom-two `}>{letter}</div>;
  }
  if (color && !show) {
    return <div className={`cube border border-custom-no-animation`}>{letter}</div>;
  }
  return <div className={`cube border ${color ? color : ''}`}>{letter}</div>;
}

export default Cube;
