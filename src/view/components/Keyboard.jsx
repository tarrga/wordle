import React from 'react';
import Key from './Key';

function Keyboard({ addLetter, removeLetter, addWord, pastGuesses, randomWord, pastGuessesColored }) {
  return (
    <div className='keyboard-container p-2'>
      <div className='d-flex flex-row justify-content-center'>
        <Key letter='Q' clickHandler={addLetter} words={pastGuessesColored} randomWord={randomWord} />
        <Key letter='E' clickHandler={addLetter} words={pastGuessesColored} randomWord={randomWord} />
        <Key letter='W' clickHandler={addLetter} words={pastGuessesColored} randomWord={randomWord} />
        <Key letter='R' clickHandler={addLetter} words={pastGuessesColored} randomWord={randomWord} />
        <Key letter='T' clickHandler={addLetter} words={pastGuessesColored} randomWord={randomWord} />
        <Key letter='Y' clickHandler={addLetter} words={pastGuessesColored} randomWord={randomWord} />
        <Key letter='U' clickHandler={addLetter} words={pastGuessesColored} randomWord={randomWord} />
        <Key letter='I' clickHandler={addLetter} words={pastGuessesColored} randomWord={randomWord} />
        <Key letter='O' clickHandler={addLetter} words={pastGuessesColored} randomWord={randomWord} />
        <Key letter='P' clickHandler={addLetter} words={pastGuessesColored} randomWord={randomWord} />
      </div>
      <div className='d-flex flex-row justify-content-center'>
        <Key letter='A' clickHandler={addLetter} words={pastGuessesColored} randomWord={randomWord} />
        <Key letter='S' clickHandler={addLetter} words={pastGuessesColored} randomWord={randomWord} />
        <Key letter='D' clickHandler={addLetter} words={pastGuessesColored} randomWord={randomWord} />
        <Key letter='F' clickHandler={addLetter} words={pastGuessesColored} randomWord={randomWord} />
        <Key letter='G' clickHandler={addLetter} words={pastGuessesColored} randomWord={randomWord} />
        <Key letter='H' clickHandler={addLetter} words={pastGuessesColored} randomWord={randomWord} />
        <Key letter='J' clickHandler={addLetter} words={pastGuessesColored} randomWord={randomWord} />
        <Key letter='K' clickHandler={addLetter} words={pastGuessesColored} randomWord={randomWord} />
        <Key letter='L' clickHandler={addLetter} words={pastGuessesColored} randomWord={randomWord} />
      </div>
      <div className='d-flex flex-row justify-content-center'>
        <Key letter='ENTER' clickHandler={addWord} />
        <Key letter='Z' clickHandler={addLetter} words={pastGuessesColored} randomWord={randomWord} />
        <Key letter='X' clickHandler={addLetter} words={pastGuessesColored} randomWord={randomWord} />
        <Key letter='C' clickHandler={addLetter} words={pastGuessesColored} randomWord={randomWord} />
        <Key letter='V' clickHandler={addLetter} words={pastGuessesColored} randomWord={randomWord} />
        <Key letter='B' clickHandler={addLetter} words={pastGuessesColored} randomWord={randomWord} />
        <Key letter='N' clickHandler={addLetter} words={pastGuessesColored} randomWord={randomWord} />
        <Key letter='M' clickHandler={addLetter} words={pastGuessesColored} randomWord={randomWord} />
        <Key letter='BACKSPACE' clickHandler={removeLetter} />
      </div>
    </div>
  );
}

export default Keyboard;
