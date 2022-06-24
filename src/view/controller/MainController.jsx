// import React from 'react';
// import { useEffect, useState } from 'react';

// export default function MainController() {
//   const lettersRandom = ['h', 'e', 'l', 'l', 'o'];
//   const letterData = { character: null, position: null };
//   const letterObj = new Array(6).fill({ letterData: new Array(5).fill(letterData), isDone: false });
//   const [endGame, setEndGame] = useState(false);
//   const [win, setWin] = useState(null);
//   const [letters, setLetters] = useState(letterObj);

//   const resetGame = () => {
//     setWin(null);
//     setEndGame(false);
//     setLetters(letterObj);
//   };

//   const keyDownHandler = (e) => {
//     //letters
//     if (e.keyCode >= 65 && e.keyCode <= 90 && !endGame) {
//       let newLetterData = { character: e.key.toUpperCase(), position: null };
//       setLetters((prev) => {
//         let isChanged = false;

//         const newRows = prev.map((row, ri) => {
//           const newRow = row.letterData.map((el, ei) => {
//             if (!el.character && !isChanged && prev[ri - 1]?.isDone !== false) {
//               isChanged = true;
//               if (lettersRandom.includes(e.key)) {
//                 if (lettersRandom[ei] === e.key) {
//                   return (newLetterData = { ...newLetterData, position: 'perfect' });
//                 } else {
//                   return (newLetterData = { ...newLetterData, position: 'almost' });
//                 }
//               }
//               return newLetterData;
//             } else {
//               return el;
//             }
//           });

//           return { ...row, letterData: newRow };
//         });

//         return [...newRows];
//       });
//     }

//     //backspace
//     if (e.keyCode === 8 && !endGame) {
//       setLetters((prev) => {
//         let isChanged = false;
//         const newRows = prev.map((row, ri) => {
//           const newRow = row.letterData.map((el, ei) => {
//             if (!row.letterData[ei + 1]?.character && !isChanged && row.isDone === false) {
//               isChanged = true;
//               return { character: null, position: null };
//             } else {
//               return el;
//             }
//           });

//           return { ...row, letterData: newRow };
//         });

//         return [...newRows];
//       });
//     }

//     //enter
//     if (e.keyCode === 13 && !endGame) {
//       setLetters((prev) => {
//         prev.forEach((prev) => {
//           if (prev.letterData.every((letterData) => letterData.position === 'perfect')) {
//             setEndGame(true);
//             setWin(true);
//           }
//         });
//         const newRows = prev.map((row, ri) => {
//           if (row.letterData[row.letterData.length - 1].character !== null) {
//             if (ri === prev.length - 1) {
//               setEndGame(true);
//               setWin(false);
//             }
//             return { ...row, isDone: true };
//           } else {
//             return row;
//           }
//         });

//         return [...newRows];
//       });
//     }
//   };

//   return { resetGame, keyDownHandler };
// }
