import styled, { keyframes } from "styled-components";
import { colors } from "theme";

const twinkle = keyframes`
  from {
    opacity: 0;
  } to {
    opacity: 1;
  }
`;

export const List = styled.ul`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  width: 100%;
  list-style: none;
  gap: 16px;
  padding: 0;
`;

export const Skeleton = styled.div<{ minHeight: number }>`
  min-height: ${({ minHeight }) => minHeight}px;
  width: auto;
  background-color: ${colors.grayscale.secondary};
  animation: ${twinkle} 0.75s ease-in-out infinite;
`;
