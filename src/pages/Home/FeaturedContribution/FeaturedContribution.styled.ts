import { DEVICES } from "@config/responsiveBreakpoints";
import styled from "styled-components";

export const Container = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
`;

export const TextContainer = styled.div`
  position: absolute;
  z-index: 1;
  bottom: 0;
  color: white;
`;

export const Title = styled.h1`
  font-weight: var(--fw-bold);
  padding: var(--s-2) var(--s-5);
  font-size: var(--fs-2xl);
  @media ${DEVICES.DESKTOP} {
    display: unset;
    font-size: var(--fs-4xl);
    padding: var(--s-2) var(--s-5);
  }
`;

export const Description = styled.p`
  font-size: var(--fs-md);
  padding: var(--s-3) var(--s-5);
  @media ${DEVICES.DESKTOP} {
    font-size: var(--fs-xl);
  }
`;

export const Image = styled.img`
  border-radius: var(--br-lg);
  z-index: 0;
  width: 100%;
  height: auto;
`;
