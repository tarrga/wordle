import Cube from './Cube';

function Table({ letters, endGame }) {
  return (
    <div className='container table'>
      {letters.map((rel, i) =>
        rel.letterData.map((cel, index) => {
          if (!letters[i + 1]?.letterData?.isDone && rel.isDone) {
            return (
              <Cube
                key={index}
                animation='letter-animation'
                letter={cel.character}
                isDone={rel.isDone}
                position={cel.position}
                time={index}
                endGame={endGame}
              />
            );
          }
          return <Cube key={index} letter={cel.character} isDone={rel.isDone} position={cel.position} />;
        })
      )}
    </div>
  );
}

export default Table;
