import { useEffect } from 'react';
import { useReducer, useState } from 'react';

const initalState = {
  randomWord: '',
  pastGuesses: [],
  currentGuess: '',
  numberOfGuess: 0,
  pastGuessesColored: [],
  error: null,
  endgame: null,
};

const lettersArray = ['sword', 'blind', 'earth', 'court', 'house', 'mouse', 'pitch', 'color', 'flame', 'trace'];

const reducerFunction = (state, action) => {
  switch (action.type) {
    case 'ADD_WORD': {
      return {
        ...state,
        pastGuesses: [...state.pastGuesses, action.payload],
        numberOfGuess: state.numberOfGuess + 1,
        currentGuess: '',
      };
    }
    case 'ADD_LETTER': {
      return { ...state, currentGuess: state.currentGuess + action.payload };
    }
    case 'REMOVE_LETTER': {
      return { ...state, currentGuess: state.currentGuess.slice(0, -1) };
    }
    case 'ADD_COLORED_WORD': {
      return { ...state, pastGuessesColored: [...state.pastGuessesColored, action.payload] };
    }
    case 'SET_ERROR': {
      return { ...state, error: action.payload };
    }
    case 'SET_ENDGAME': {
      return { ...state, endgame: action.payload };
    }
    case 'SET_NEW_RANDOM_WORD': {
      return { ...state, randomWord: action.payload };
    }
    case 'RESET': {
      return initalState;
    }
    default:
      return state;
  }
};

function useWordle() {
  const [state, dispatch] = useReducer(reducerFunction, initalState);
  useEffect(() => {
    if (!state.endgame) {
      dispatch({ type: 'SET_NEW_RANDOM_WORD', payload: lettersArray[Math.floor(Math.random() * 10) + 1] });
    }
  }, [state.endgame]);

  //add and remove error function
  const addError = (errMessage) => {
    dispatch({ type: 'SET_ERROR', payload: errMessage });
    setTimeout(() => {
      dispatch({ type: 'SET_ERROR', payload: null });
    }, 1100);
  };

  //add letter
  const addLetter = (e) => {
    if (
      ((e.keyCode >= 65 && e.keyCode <= 90) || e.toString().match(/^[A-Za-z]+$/)) &&
      state.numberOfGuess < 6 &&
      !state.error &&
      !state.endgame
    ) {
      if (state.currentGuess.length < 5) {
        dispatch({ type: 'ADD_LETTER', payload: e.key ? e.key : e.toLowerCase() });
        return;
      }
    }
  };

  //remove letter
  const removeLetter = (e) => {
    if ((e.keyCode === 8 || e === 'BACKSPACE') && !state.error && !state.endgame) {
      if (state.currentGuess) dispatch({ type: 'REMOVE_LETTER' });
      return;
    }
  };

  //add word
  const addWord = (e) => {
    //if endgame but not yet
    if (state.endgame && !state.endgame.message) {
      return;
    }
    //if endgame true, reset the game
    if (state.endgame && (e.keyCode === 13 || e === 'ENTER')) {
      dispatch({ type: 'RESET' });
      return;
    }
    if (!state.error && !state.endgame) {
      if ((e.keyCode === 13 || e === 'ENTER') && state.numberOfGuess < 6 && !state.error) {
        //check for letters length
        if (state.currentGuess.length < 5) {
          addError('Not Enough Letters ⚠️');
          return;
        }

        //check for duplicates
        if (state.pastGuesses.includes(state.currentGuess)) {
          addError('No Duplicates ☝🏻');
          return;
        }

        //save the currrentguess for coloredWord
        let coloredWord = Array.from(state.currentGuess);
        let randWordArray = Array.from(state.randomWord);

        //add the current guess to pastGuesses
        dispatch({ type: 'ADD_WORD', payload: state.currentGuess });

        //convert currentGuess to object with letter and color property
        coloredWord = coloredWord.map((letter) => {
          return { letter: letter, color: 'grey' };
        });

        //check for green color
        coloredWord = coloredWord.map((cw, i) => {
          if (cw.letter === randWordArray[i]) {
            randWordArray[i] = null;
            return { ...cw, color: 'green' };
          } else {
            return cw;
          }
        });

        //check for yellow color
        coloredWord = coloredWord.map((cw, i) => {
          if (randWordArray.includes(cw.letter) && cw.color !== 'green') {
            randWordArray[randWordArray.indexOf(cw.letter)] = null;
            return { ...cw, color: 'yellow' };
          } else {
            return cw;
          }
        });
        dispatch({ type: 'ADD_COLORED_WORD', payload: coloredWord });

        //check if the currentGuess matches with the randomword
        if (state.currentGuess === state.randomWord) {
          dispatch({ type: 'SET_ENDGAME', payload: true });
          setTimeout(() => {
            dispatch({ type: 'SET_ENDGAME', payload: { message: 'You Win 🏆 ', word: state.randomWord } });
          }, 2000);
          return;
        }

        //check for remaining guesses
        if (state.numberOfGuess === 5) {
          dispatch({ type: 'SET_ENDGAME', payload: true });
          setTimeout(() => {
            dispatch({ type: 'SET_ENDGAME', payload: { message: 'You Lose 🤷 ', word: state.randomWord } });
          }, 2000);
          return;
        }
      }
    }
  };

  return { ...state, addWord, removeLetter, addLetter, dispatch };
}
export { useWordle };
