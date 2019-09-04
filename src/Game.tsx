import * as React from 'react';
import Minesweeper, { GameStatus, Board } from '@jsgames/minesweeper';
import Boarde from './Board';
import Button from './Button';
import styled, { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
  }
`;

const Container = styled.div`
  align-items: center;
  display: flex;
  height: 100vh;
  justify-content: center;
  overflow: hidden;
  width: 100vw;
`;

const Game: React.FC = () => {
  const [game] = React.useState<Minesweeper>(new Minesweeper());
  const [gameStatus, setGameStatus] = React.useState<GameStatus>(game.status);
  const [board, setBoard] = React.useState<Board>(game.board);
  const [zoom, setZoom] = React.useState<number>(1);

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
    <Container>
      <GlobalStyles />
      <Boarde size={board.length} zoom={zoom}>
        {board.flat().map((value, i) => {
          const [x, y] = [i % board.length, Math.floor(i / board.length)];

          return (
            <Button
              onClick={reveal(x, y)}
              key={`${x}-${y}`}
              zoom={zoom}
            >
              {`${value}`}
            </Button>
          );
        })}
      </Boarde> 
    </Container>
  );
}

export default Game;
