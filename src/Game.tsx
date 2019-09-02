import * as React from 'react';
import Minesweeper from '@jsgames/minesweeper';

const Game: React.FC = () => {
  const [board, setBoard] = React.useState<(number | null)[][]>(Array(10).fill(Array(10).fill(null)));
  const [startedGame, setStartedGame] = React.useState<boolean>(false);
  const [game] = React.useState<Minesweeper>(new Minesweeper());

  const reveal = (x: number, y: number) => () => {
    if (!startedGame) {
      setBoard(game.newGame([x, y]));
      setStartedGame(true);
    } else {
      const nextBoard = game.reveal([x, y]);
      console.log(nextBoard)
      setBoard(nextBoard);
    }
  }

  return (
    <>
      <style>
        {`
          button {
            height: 2rem;
            width: 2rem;
          }
        `}
      </style>
      <table>
        {board.map((row, x) => (
          <tr key={x}>
            {row.map((cell, y) => (
              <td key={`${x}-${y}`}>
                <button onClick={reveal(x, y)}>{cell === null ? '' : cell === 10 ? 'X' : cell}</button>
              </td>
            ))}
          </tr>
        ))}
      </table>
    </>
  );
}

export default Game;
