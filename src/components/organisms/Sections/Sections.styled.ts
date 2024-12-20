import styled from "styled-components";
import {
  colors,
  devices,
  flexCenter,
  flexColumn,
  flexRow,
  getFont,
} from "theme";

export const Container = styled.div`
  ${flexColumn};
  gap: 16px;
  padding: 50px 16px 24px;
  background-color: ${colors.grayScale[1]};
  border-radius: 40px;

  @media ${devices.md} {
    padding: 100px 24px 48px;
  }
`;

export const List = styled.ul`
  ${flexColumn};
  gap: 40px;
  padding: 0;
  list-style: none;
`;

export const Heading = styled.h2`
  ${getFont("regular", 12, 18)};
  letter-spacing: 7.2px;
  color: ${colors.grayScale[4]};
  text-transform: uppercase;
`;

export const ImageWrapper = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  pointer-events: none;
  aspect-ratio: 1/1;

  @media ${devices.md} {
    aspect-ratio: 16/9;

  }
  :hover div {
    visibility: visible;
  }
  :focus div {
    visibility: visible;
    overflow: hidden;
  }
`;

export const SlideHeading = styled.p`
  position: absolute;
  border-radius: 24px;
  color: ${colors.white};
  padding: 24px;
  ${getFont("medium", 12, 24)};
  text-transform: uppercase;
  letter-spacing: 7.2px;
  z-index: 1;
`;

export const CarouselContainer = styled.div`
  position: relative;
  ${flexRow};
  .alice-carousel__stage-item {
    aspect-ratio: 1/1;
    @media ${devices.md} {
      aspect-ratio: 16/9;
    }
    border-radius: 40px;
    overflow: hidden;
  }
`;

export const CarouselBar = styled.div`
  ${flexCenter};
  padding: 0 32px;

  @media ${devices.md} {
    justify-content: space-between;
  }
`;

export const CarouselHeading = styled.p`
  ${getFont("regular", 12, 18)};
  letter-spacing: 7.2px;
  line-height: 32px;
  color: ${colors.grayScale[4]};
  text-transform: uppercase;
  white-space: nowrap;
`;

export const DotsContainer = styled.div`
  ${flexRow};
  gap: 8px;
  position: absolute;
  transform: translateX(-50%);
  left: 50%;
  bottom: -15px;
  height: 30px;
  width: auto;
  background-color: ${colors.transparent.medium};
  border-radius: 20px;
  padding: 0 8px;
  z-index: 3;
`;

export const DotItem = styled.div<{ isActive: boolean }>`
  height: 10px;
  aspect-ratio: 1 / 1;
  border-radius: 50%;
  background-color: ${({ isActive }) =>
    isActive ? colors.white : colors.grayScale[2]};
  cursor: pointer;
`;
