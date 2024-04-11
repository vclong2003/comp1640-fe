import styled, { keyframes } from "styled-components";

const fadeInOut = keyframes`
  0% { opacity: 1; }
  50% { opacity: 0; }
  100% { opacity: 1; }
`;

export const Splash = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Logo = styled.div`
  font-size: var(--fs-5xl);
  font-weight: var(--fw-bold);
  font-style: italic;
  animation: ${fadeInOut} 2.5s infinite alternate;
`;
