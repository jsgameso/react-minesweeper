import * as React from 'react';
import styled, { css } from 'styled-components';
import bomb from './bomb.svg';

interface Props extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  zoom: number;
}

const Container = styled.button<Props>`
  ${({ zoom }) => css`
    border-left: ${(zoom * 2) / 6}rem solid #808080;
    border-top: ${(zoom * 2) / 6}rem solid #808080;
    font-size: ${zoom * 1.4}rem;
    line-height: ${zoom * 1.4}rem;
  `}
  align-items: center;
  border-bottom: 0rem solid transparent;
  border-right: 0rem solid transparent;
  background-color: #C0C0C0;
  display: flex;
  font-family: Arial, Helvetica, sans-serif;
  font-weight: 900;
  justify-content: center;
  user-select: none;

  &:focus {
    outline: 0;
  }

  ${({ children, zoom }) => {
    switch (children) {
      case 'null':
        return css`
          border-bottom: ${(zoom * 2) / 6}rem solid #808080;
          border-left: ${(zoom * 2) / 6}rem solid white;
          border-right: ${(zoom * 2) / 6}rem solid #808080;
          border-top: ${(zoom * 2) / 6}rem solid white;
          color: transparent;
        `;
      case '0':
        return css`
          color: transparent;
        `;
      case '1':
        return css`
          color: #0000FF;
        `;
      case '2':
        return css`
          color: #008000;
        `;
      case '3':
        return css`
          color: #FF0000;
        `;
      case '4':
        return css`
          color: #000080;
        `;
      case '5':
        return css`
          color: #800000;
        `;
      case '6':
        return css`
          color: #008080;
        `;
      case '7':
        return css`
          color: #000000;
        `;
      case '8':
        return css`
          color: #808080;
        `;
      case '10':
        return css`
          content: 'B';
        `;
      default:
        break;
    }      
  }}
`;

const Bomb = styled.img<Props>`
  background-color: transparent;
  border: 0;
  margin: 0;
  padding: 0;
  ${({ zoom }) => css`
    font-size: ${zoom * .75}rem;
    line-height: ${zoom * .75}rem;
    min-height: ${zoom * 1.5}rem;
    min-width: ${zoom * 1.5}rem;
  `}
`;

const Button: React.FC<Props> = ({ children, ...props }) => (
  <Container {...props}>
    {children === '10' ? (
      <Bomb alt="💣" src={bomb} zoom={props.zoom} />
    ) : children}
  </Container>
);

export default Button;
