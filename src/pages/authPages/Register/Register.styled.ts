import { DEVICES } from "@config/responsiveBreakpoints";
import styled, { keyframes } from "styled-components";
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
  height: 100vh;
  flex-direction: row;
  justify-content: center;
  @media ${DEVICES.DESKTOP_L} {
    justify-content: unset;
  }
`;

export const Background = styled.img`
  width: auto;
  height: 100%;
  display: none;
  @media ${DEVICES.DESKTOP_L} {
    display: unset;
  }
  animation: ${slideInFromLeft} 1s ease-in-out;
`;

export const Form = styled.div`
  display: flex;
  flex-direction: column;
  gap: var(--s-6);
  padding: var(--s-20) var(--s-3);
  animation: ${slideInFromRight} 1.75s ease forwards;
`;

export const Title = styled.div`
  font-size: var(--fs-4xl);
  @media ${DEVICES.DESKTOP_L} {
    font-size: var(--fs-6xl);
  }
  animation: ${slideInFromRight} 1.25s ease forwards;
`;

export const Description = styled.div`
  font-size: var(--fs-xl);
  @media ${DEVICES.DESKTOP_L} {
    font-size: var(--fs-2xl);
  }
  animation: ${slideInFromRight} 1.5s ease forwards;
`;
