import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useState, useEffect, useCallback } from 'react';
import Navbar from './view/components/Navbar';
import Table from './view/components/Table';
import Modal from './view/components/Modal';
import Keyboard from './view/components/Keyboard';
import Cube from './view/components/Cube';

const letterArray = [
  ['b', 'r', 'a', 'v', 'e'],
  ['s', 'w', 'o', 'r', 'd'],
  ['m', 'o', 'u', 's', 'e'],
  ['e', 'a', 'r', 't', 'h'],
  ['b', 'a', 'c', 'o', 'n'],
  ['m', 'o', 'v', 'i', 'e'],
  ['o', 'a', 's', 'i', 's'],
  ['a', 'g', 'e', 'n', 't'],
  ['c', 'o', 'u', 'r', 't'],
  ['f', 'i', 'n', 'a', 'l'],
];

function App() {
  const letterData = { character: null, position: null };
  const letterObj = new Array(6).fill({ letterData: new Array(5).fill(letterData), isDone: false });
  const [endGame, setEndGame] = useState(false);
  const [lettersRandom, setLettersRandom] = useState(letterArray[Math.floor(Math.random() * 10)]);
  const [win, setWin] = useState(null);
  const [letters, setLetters] = useState(letterObj);
  const [error, setError] = useState(null);

  const resetGame = useCallback(() => {
    setLettersRandom(letterArray[Math.floor(Math.random() * 10)]);
    setWin(null);
    setEndGame(false);
    setLetters(letterObj);
  }, [letterObj]);

  // Add letter handler
  const addLetter = useCallback(
    (event) => {
      const e = event.key ? event.key : event;
      let newLetterData = { character: e.toUpperCase(), position: null };
      setLetters((prev) => {
        let isChanged = false;

        const newRows = prev.map((row, ri) => {
          const newRow = row.letterData.map((el, ei) => {
            if (!el.character && !isChanged && prev[ri - 1]?.isDone !== false) {
              isChanged = true;
              if (lettersRandom.includes(e.toLowerCase())) {
                if (lettersRandom[ei] === e.toLowerCase()) {
                  return (newLetterData = { ...newLetterData, position: 'perfect' });
                } else {
                  return (newLetterData = { ...newLetterData, position: 'almost' });
                }
              }
              return newLetterData;
            } else {
              return el;
            }
          });

          return { ...row, letterData: newRow };
        });

        return [...newRows];
      });
    },
    [lettersRandom]
  );

  // remove letter
  const deleteLetter = () => {
    setLetters((prev) => {
      let isChanged = false;
      const newRows = prev.map((row, ri) => {
        const newRow = row.letterData.map((el, ei) => {
          if (!row.letterData[ei + 1]?.character && !isChanged && row.isDone === false) {
            isChanged = true;
            return { character: null, position: null };
          } else {
            return el;
          }
        });

        return { ...row, letterData: newRow };
      });

      return [...newRows];
    });
  };

  //enter handler
  const enterHandler = useCallback(() => {
    if (endGame) {
      resetGame();
    }
    if (error) {
      return;
    }

    setLetters((prev) => {
      prev.forEach((ele) => {
        if (ele.letterData.every((letterData) => letterData.position === 'perfect')) {
          setTimeout(() => {
            setEndGame(true);
            setWin(true);
            return;
          }, 2000);
        }
      });

      const newRows = prev.map((row, ri) => {
        if (row.letterData[row.letterData.length - 1].character !== null) {
          if (
            ri === prev.length - 1 &&
            row.letterData.character !== null &&
            !row.letterData.every((el) => el.position === 'perfect')
          ) {
            setTimeout(() => {
              setEndGame(true);
              setWin(false);
            }, 2000);
          }
          return { ...row, isDone: true };
        } else {
          return row;
        }
      });

      if (prev.filter((l) => l.isDone).length === newRows.filter((l) => l.isDone).length && !endGame) {
        setError('Not Enough Letters');
        setTimeout(() => {
          setError(null);
        }, 1500);
      }

      if (
        prev.map((l, i) =>
          l.letterData
            .map((ld) => ld.character)
            .flat()
            .some((arr) => arr === newRows[newRows.lengt - 1].map((r) => r.le))
        )
      ) {
      }
      console.log(prev.map((l) => l.letterData.map((ld) => ld.character).flat())[0][0]);

      return [...newRows];
    });
  }, [endGame, resetGame, error]);

  //click on the keyboard
  const clickHandler = (e) => {
    if (e === 'BACKSPACE') {
      deleteLetter();
    } else if (e === 'ENTER') {
      enterHandler();
    } else {
      addLetter(e);
    }
  };

  useEffect(() => {
    const keyDownHandler = (e) => {
      //add letter
      if (e.keyCode >= 65 && e.keyCode <= 90 && !endGame && !error) {
        addLetter(e);
      }
      //backspace
      if (e.keyCode === 8 && !endGame && !error) {
        deleteLetter();
      }
      //enter
      if (e.keyCode === 13) {
        enterHandler();
      }
    };
    document.addEventListener('keydown', keyDownHandler);

    return () => document.removeEventListener('keydown', keyDownHandler);
  }, [endGame, enterHandler, addLetter, error]);

  return (
    <div className='App bg-light d-flex justify-content-between flex-column'>
      <Navbar />
      <Table letters={letters} endGame={endGame} />
      <Keyboard clickHandler={clickHandler} letters={letters} lettersRandom={lettersRandom} />
      {error && <Modal open={error}>{error}</Modal>}
      <Modal onClose={resetGame} open={endGame}>
        <div className='d-flex justify-content-center flex-column align-items-center'>
          <div className='d-flex justify-content-center flex-row'>
            {lettersRandom.map((letter, i) => {
              return (
                <div key={i} className={`win-letter ${win ? 'end-win' : 'end-lose'}`}>
                  <Cube letter={letter.toUpperCase()} isDone={true} />
                </div>
              );
            })}
          </div>
          <div className='win-lose'>{win ? `You win 🏆` : `You lose 🤷`}</div>
        </div>
      </Modal>
    </div>
  );
}

export default App;
