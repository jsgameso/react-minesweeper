import * as React from 'react';
import styled, { css } from 'styled-components';

const Cover = styled.div<{ zoom: number }>`
  border: ${({ zoom }) => (zoom * 2) / 2}rem solid #C0C0C0;
`;

interface Props {
  size: number;
  zoom: number;
}

const Container = styled.div<Props>`
  ${({ size, zoom }) => css`
    border: ${(zoom * 2) / 4}rem solid #808080;
    border-bottom: ${(zoom * 2) / 4}rem solid white;
    border-right: ${(zoom * 2) / 4}rem solid white;
    display: grid;
    grid-template-columns: repeat(${size}, ${zoom * 2}rem);
    grid-template-rows: repeat(${size}, ${zoom * 2}rem);
  `}
`;

const Board: React.FC<Props> = ({ children, size, zoom }) => (
  <Cover zoom={zoom}>
    <Container size={size} zoom={zoom}>
      {children}
    </Container>
  </Cover>
);

export default Board;
