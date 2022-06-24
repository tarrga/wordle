import React from 'react';
import Key from './Key';

function Keyboard({ clickHandler, letters, lettersRandom }) {
  return (
    <div className='keyboard-container p-2'>
      <div className='d-flex flex-row justify-content-center'>
        <Key letter='Q' clickHandler={clickHandler} letters={letters} lettersRandom={lettersRandom} />
        <Key letter='E' clickHandler={clickHandler} letters={letters} lettersRandom={lettersRandom} />
        <Key letter='W' clickHandler={clickHandler} letters={letters} lettersRandom={lettersRandom} />
        <Key letter='R' clickHandler={clickHandler} letters={letters} lettersRandom={lettersRandom} />
        <Key letter='T' clickHandler={clickHandler} letters={letters} lettersRandom={lettersRandom} />
        <Key letter='Y' clickHandler={clickHandler} letters={letters} lettersRandom={lettersRandom} />
        <Key letter='U' clickHandler={clickHandler} letters={letters} lettersRandom={lettersRandom} />
        <Key letter='I' clickHandler={clickHandler} letters={letters} lettersRandom={lettersRandom} />
        <Key letter='O' clickHandler={clickHandler} letters={letters} lettersRandom={lettersRandom} />
        <Key letter='P' clickHandler={clickHandler} letters={letters} lettersRandom={lettersRandom} />
      </div>
      <div className='d-flex flex-row justify-content-center'>
        <Key letter='A' clickHandler={clickHandler} letters={letters} lettersRandom={lettersRandom} />
        <Key letter='S' clickHandler={clickHandler} letters={letters} lettersRandom={lettersRandom} />
        <Key letter='D' clickHandler={clickHandler} letters={letters} lettersRandom={lettersRandom} />
        <Key letter='F' clickHandler={clickHandler} letters={letters} lettersRandom={lettersRandom} />
        <Key letter='G' clickHandler={clickHandler} letters={letters} lettersRandom={lettersRandom} />
        <Key letter='H' clickHandler={clickHandler} letters={letters} lettersRandom={lettersRandom} />
        <Key letter='J' clickHandler={clickHandler} letters={letters} lettersRandom={lettersRandom} />
        <Key letter='K' clickHandler={clickHandler} letters={letters} lettersRandom={lettersRandom} />
        <Key letter='L' clickHandler={clickHandler} letters={letters} lettersRandom={lettersRandom} />
      </div>
      <div className='d-flex flex-row justify-content-center'>
        <Key letter='ENTER' clickHandler={clickHandler} />
        <Key letter='Z' clickHandler={clickHandler} letters={letters} lettersRandom={lettersRandom} />
        <Key letter='X' clickHandler={clickHandler} letters={letters} lettersRandom={lettersRandom} />
        <Key letter='C' clickHandler={clickHandler} letters={letters} lettersRandom={lettersRandom} />
        <Key letter='V' clickHandler={clickHandler} letters={letters} lettersRandom={lettersRandom} />
        <Key letter='B' clickHandler={clickHandler} letters={letters} lettersRandom={lettersRandom} />
        <Key letter='N' clickHandler={clickHandler} letters={letters} lettersRandom={lettersRandom} />
        <Key letter='M' clickHandler={clickHandler} letters={letters} lettersRandom={lettersRandom} />
        <Key letter='BACKSPACE' clickHandler={clickHandler} />
      </div>
    </div>
  );
}

export default Keyboard;
