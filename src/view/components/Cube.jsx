import { useState } from 'react';

function Cube({ letter, color, ms }) {
  const [show, setShow] = useState(false);
  setTimeout(() => {
    setShow(true);
  }, ms * 300);
  if (!show) {
    return <div className={`cube border border-custom-two`}>{letter || ''}</div>;
  }

  return <div className={`cube border border-custom-two ${color}`}>{letter || ''}</div>;
}

export default Cube;
