import Cube from './Cube';

function Table({ pastGuessesColored, currentGuess, error }) {
  return (
    <div className='container table'>
      {pastGuessesColored &&
        pastGuessesColored.map((guess, i) => {
          return guess.map((letterObj, i) => (
            <Cube key={i} ms={i} letter={letterObj.letter.toUpperCase()} color={letterObj.color} />
          ));
        })}
      {Array.from(currentGuess).map((letter, i) => (
        <Cube key={i} letter={letter.toUpperCase()} error={error} />
      ))}
      {new Array(30 - pastGuessesColored.length * 5 - (currentGuess ? Array.from(currentGuess).length : 0))
        .fill('')
        .map((l, i) => (
          <Cube key={i} letter='' error={error} errorNumber={5 - currentGuess.length} index={i} />
        ))}
    </div>
  );
}

export default Table;
