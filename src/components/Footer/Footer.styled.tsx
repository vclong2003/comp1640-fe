import { DEVICES } from "@config/responsiveBreakpoints";
import styled from "styled-components";

export const Foot = styled.div`
  border: none;
  width: 100%;
  background-color: var(--black);
  /* height: 45vh; */
  @media ${DEVICES.DESKTOP} {
    border: none;
    /* width: 100%; */
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
    padding: var(--s-12);
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
  @media ${DEVICES.DESKTOP} {
    font-size: 36px;
  }
`;

export const SecondLeft = styled.div`
  font-size: var(--fs-sm);
  @media ${DEVICES.DESKTOP} {
    font-size: 18px;
  }
`;

export const ThirdLeft = styled.div`
  font-size: 18px;
  display: flex;
  flex-direction: row;
  gap: 10px;
`;

export const Middle = styled.div`
  display: none;
  @media ${DEVICES.DESKTOP} {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: var(--s-4);
    flex: 6;
  }
`;

export const MiddleFirst = styled.div`
  font-size: var(--fs-lg);
  align-items: flex-start;
  @media ${DEVICES.DESKTOP} {
    font-size: 36px;
    margin-bottom: var(--s-5);
  }
`;

export const MiddleSecond = styled.div`
  font-size: var(--fs-xs);
  @media ${DEVICES.DESKTOP} {
    font-size: 18px;
    margin-bottom: var(--s-5);
  }
`;

export const MiddleThird = styled.div`
  font-size: var(--fs-xs);
  @media ${DEVICES.DESKTOP} {
    font-size: 18px;
  }
`;

export const Right = styled.div`
  display: none;
  @media ${DEVICES.DESKTOP} {
    display: flex;
    flex-direction: column;
    flex: 6;
    align-items: center;
    gap: var(--s-4);
  }
`;

export const RightFirst = styled.div`
  font-size: var(--fs-lg);
  @media ${DEVICES.DESKTOP} {
    font-size: 36px;
    margin-bottom: var(--s-5);
  }
`;

export const RightSecond = styled.div`
  font-size: var(--fs-xs);
  @media ${DEVICES.DESKTOP} {
    font-size: 18px;
    margin-bottom: var(--s-5);
  }
`;

export const RightThird = styled.div`
  font-size: var(--fs-xs);
  @media ${DEVICES.DESKTOP} {
    font-size: 18px;
    margin-bottom: var(--s-5);
  }
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
  font-size: var(--fs-sm);
  @media ${DEVICES.DESKTOP} {
    font-size: 20px;
  }
`;

export const Text = styled.div``;
