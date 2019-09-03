import * as React from 'react';
import Minesweeper, { GameStatus, Board } from '@jsgames/minesweeper';

const Game: React.FC = () => {
  const [game] = React.useState<Minesweeper>(new Minesweeper());
  const [gameStatus, setGameStatus] = React.useState<GameStatus>(game.status);
  const [board, setBoard] = React.useState<Board>(game.board);

  React.useEffect(() => {
    game.on('board', setBoard);
    game.on('game', setGameStatus);
  }, [game]);

  const reveal = (x: number, y: number) => () => {
    if (gameStatus === 'active') {
      game.reveal([x, y]);
    } else {
      game.newGame([x, y]);
    }
  }

  return (
    <>
      <style>
        {`
          button {
            align-items: center;
            background-color: transparent;
            border: 2px solid gray;
            cursor: pointer;
            display: flex;
            font-family: sans-serif;
            font-size: 1rem;
            font-weight: bold;
            height: 2.5rem;
            justify-content: center;
            width: 2.5rem;
          }

          button:focus {
            outline: none;
          }
        `}
      </style>
      <table>
        <tbody>
          {board.map((row, y) => (
            <tr key={y}>
              {row.map((cell, x) => (
                <td key={`${x}-${y}`}>
                  <button onClick={reveal(x, y)}>{cell === null ? '' : cell === 10 ? '💣' : cell}</button>
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
}

export default Game;
