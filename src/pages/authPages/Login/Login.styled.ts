import styled, { keyframes } from "styled-components";
import { DEVICES } from "../../../config/responsiveBreakpoints";

const slideInFromLeft = keyframes`
from {
  transform: translate(-100%, 100%);
}
to {
  transform: translate(0, 0);
}
`;

const slideInFromRight = keyframes`
0% {
  opacity: 0;
  transform: translateX(100%);
}
100% {
  opacity: 1;
  transform: translateX(0);
}
`;

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  height: 100vh;
  justify-content: center;
  @media ${DEVICES.DESKTOP_L} {
    justify-content: unset;
  }
`;

export const Background = styled.div`
  display: none;
  @media ${DEVICES.DESKTOP_L} {
    display: unset;
  }
  animation: ${slideInFromLeft} 1s ease-in-out;
`;

export const Image = styled.img`
  width: auto;
  height: 100%;
`;

export const RightContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: var(--s-5);
  padding: var(--s-10) var(--s-5);
`;

export const Title = styled.div`
  font-size: var(--fs-4xl);
  @media ${DEVICES.DESKTOP_L} {
    font-size: var(--fs-6xl);
  }
  animation: ${slideInFromRight} 1s ease forwards;
`;

export const Description = styled.div`
  font-size: var(--fs-xl);
  @media ${DEVICES.DESKTOP_L} {
    font-size: var(--fs-3xl);
  }
  animation: ${slideInFromRight} 1.5s ease forwards;
`;
