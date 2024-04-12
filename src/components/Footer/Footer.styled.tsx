import { DEVICES } from "@config/responsiveBreakpoints";
import styled from "styled-components";

export const Foot = styled.div`
  border: none;
  width: 100%;
  background-color: var(--black);
  @media ${DEVICES.DESKTOP} {
    border: none;
  }
`;

export const ContainerTop = styled.div`
  display: flex;
  flex-direction: row;
  padding: var(--s-4) var(--s-3);
  color: var(--white);
  gap: var(--s-4);
  flex-wrap: wrap;
  @media ${DEVICES.DESKTOP} {
    display: flex;
    flex-direction: row;
    padding: var(--s-8);
    color: var(--white);
  }
`;

export const Left = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: var(--s-4);
  width: 100%;
  @media ${DEVICES.DESKTOP} {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 20px;
    flex: 6;
  }
`;

export const FirstLeft = styled.div`
  font-size: var(--fs-2xl);
  margin-bottom: var(--s-1);
  font-weight: var(--fw-semibold);
  border-bottom: 2px solid white;
  font-style: italic;
  @media ${DEVICES.DESKTOP} {
    font-size: var(--fs-3xl);
  }
`;

export const SecondLeft = styled.div`
  font-size: var(--fs-sm);
  @media ${DEVICES.DESKTOP} {
    font-size: var(--fs-md);
  }
`;

export const ThirdLeft = styled.div`
  font-size: var(--fs-xl);
  display: flex;
  flex-direction: row;
  justify-content: center;
  width: 100%;
  gap: 10px;
`;

export const ContainerMiddle = styled.div`
  /* padding: var(--s-3) var(--s-12); */
`;

export const Line = styled.div`
  border: 1px solid white;
  width: 100%;
`;

export const ContainerBottom = styled.div`
  padding: var(--s-2) 0;
`;

export const TextBottom = styled.div`
  color: white;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: var(--s-2);
  font-size: var(--fs-xs);
`;

export const Text = styled.div``;
