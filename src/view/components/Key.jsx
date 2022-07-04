import React from 'react';

function Key({ clickHandler, randomWord, words, letter }) {
  let customClass = null;
  words?.forEach((word, i) => {
    word.forEach((l, i) => {
      if (l.letter.toLowerCase() === letter.toLowerCase()) {
        if (
          !customClass ||
          (customClass === 'yellow' && l.color === 'green') ||
          (customClass === 'grey' && l.color === 'yellow')
        ) {
          customClass = l.color;
        }
      }
    });
  });

  return (
    <div
      onClick={() => clickHandler(letter)}
      className={`key mb-1 border rounded ${customClass ? customClass : ''} 
      } ${letter === 'BACKSPACE' ? 'backspace' : ''} ${letter === 'ENTER' ? 'enter' : ''}`}
    >
      {letter}
    </div>
  );
}

export default Key;
