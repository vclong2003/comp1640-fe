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
  padding: var(--s-1) var(--s-3);
  font-size: var(--fs-2xl);
  display: -webkit-box;
  -webkit-line-clamp: 1;
  -webkit-box-orient: vertical;
  overflow: hidden;
  @media ${DEVICES.DESKTOP} {
    display: unset;
    font-size: var(--fs-4xl);
    padding: var(--s-2) var(--s-5);
  }
`;

export const Description = styled.p`
  font-size: var(--fs-md);
  padding: var(--s-1) var(--s-3);
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;

  @media ${DEVICES.DESKTOP} {
    font-size: var(--fs-xl);
    padding: var(--s-6) var(--s-5);
  }
`;

export const Image = styled.img`
  border-radius: var(--br-lg);
  z-index: 0;
  width: 100%;
  height: auto;

  object-fit: cover;
`;
