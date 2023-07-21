import styled from "styled-components";
import { colors, devices, flexColumn } from "theme";

export const Container = styled.div`
  ${flexColumn};
  width: 100%;
  gap: 2rem;
  padding: 1rem;
`;

export const List = styled.ul`
  display: grid;
  width: 100%;
  gap: 1rem;
  padding: 0;
  list-style: none;

  @media ${devices.sm} {
    grid-template-columns: repeat(2, 1fr);
  }
  @media ${devices.md} {
    grid-template-columns: repeat(3, 1fr);
  }
`;

export const Heading = styled.div`
  font-size: 32px;
  font-family: Lexend;
  font-weight: 500;
  color: ${colors.grayscale[700]};
`;

export const ListItem = styled.li`
  aspect-ratio: 1/1;
`;
