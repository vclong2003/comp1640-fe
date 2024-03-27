import styled from "styled-components";
import { DEVICES } from "../../config/responsiveBreakpoints";

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
`;

export const Form = styled.div`
  display: flex;
  flex-direction: column;
  gap: var(--s-6);
  padding: var(--s-20) var(--s-3);
`;

export const Title = styled.div`
  font-size: var(--fs-4xl);
  @media ${DEVICES.DESKTOP_L} {
    font-size: var(--fs-6xl);
  }
`;

export const Description = styled.div`
  font-size: var(--fs-xl);
  @media ${DEVICES.DESKTOP_L} {
    font-size: var(--fs-2xl);
  }
`;
