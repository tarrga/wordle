import React from 'react';

function Key({ letter, clickHandler, letters, lettersRandom }) {
  let customClassP = null;
  let customClassA = null;
  let customClassW = null;
  letters?.forEach((l, i) => {
    if (!l.isDone) return;
    customClassP = l.letterData.some((ld, i) => {
      return customClassP
        ? customClassP
        : ld.character === lettersRandom[i].toUpperCase() && ld.character === letter.toUpperCase();
    });

    customClassA = l.letterData.some((ld, i) => {
      return customClassA
        ? customClassA
        : lettersRandom.some(
            (rl) =>
              rl.toUpperCase() === ld.character.toUpperCase() && ld.character.toUpperCase() === letter.toUpperCase()
          );
    });

    customClassW = l.letterData.some((ld, i) => {
      return customClassW ? customClassW : ld.character.toUpperCase() === letter.toUpperCase();
    });
  });
  return (
    <div
      onClick={() => clickHandler(letter)}
      className={`key mb-1 border rounded ${customClassP ? 'perfect' : ''} ${customClassA ? 'almost' : ''} ${
        customClassW ? 'wrong' : ''
      } ${letter === 'BACKSPACE' ? 'backspace' : ''} ${letter === 'ENTER' ? 'enter' : ''}`}
    >
      {letter}
    </div>
  );
}

export default Key;
