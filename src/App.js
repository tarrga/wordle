import { useEffect, useState } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './view/components/Navbar';
import Table from './view/components/Table';
import Modal from './view/components/Modal';
import Keyboard from './view/components/Keyboard';

import { useWordle } from './hooks/useWordle';

function App() {
  const {
    currentGuess,
    pastGuessesColored,
    pastGuesses,
    numberOfGuess,
    error,
    addWord,
    removeLetter,
    addLetter,
    endgame,
    randomWord,
    dispatch,
  } = useWordle();

  useEffect(() => {
    const keyDownHandler = (e) => {
      //add letter
      addLetter(e);

      //remove letter
      removeLetter(e);

      //add word
      addWord(e);
    };
    document.addEventListener('keydown', keyDownHandler);
    return () => document.removeEventListener('keydown', keyDownHandler);
  }, [addWord, removeLetter, addLetter]);

  return (
    <div className='App bg-light d-flex justify-content-between flex-column'>
      <Navbar />
      <Table currentGuess={currentGuess} pastGuessesColored={pastGuessesColored} />
      <Keyboard
        addWord={addWord}
        addLetter={addLetter}
        removeLetter={removeLetter}
        pastGuesses={pastGuesses}
        randomWord={randomWord}
        pastGuessesColored={pastGuessesColored}
      />

      <Modal
        open={endgame?.message}
        onClose={(e) => {
          if (e.target.className === 'modal-custom') {
            dispatch({ type: 'RESET' });
          }
        }}
        extraClassName='dark'
      >
        <div>{endgame?.message}</div>
        <div className='random-colors'>{endgame?.word}</div>
      </Modal>
      <Modal open={error} children={error} />
    </div>
  );
}

export default App;
