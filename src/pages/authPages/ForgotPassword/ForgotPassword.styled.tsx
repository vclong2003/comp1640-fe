import { DEVICES } from "@config/responsiveBreakpoints";
import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  height: 100vh;
  flex-direction: row;
  justify-content: center;
  @media ${DEVICES.DESKTOP_L} {
    justify-content: unset;
    padding: 0 var(--s-10);
    gap: var(--s-10);
  }
`;

export const BackgroundContainer = styled.div`
  @media ${DEVICES.DESKTOP_L} {
    flex: 7;
  }
`;

export const Background = styled.img`
  width: auto;
  height: 100%;
  display: none;
  @media ${DEVICES.DESKTOP_L} {
    display: unset;
    padding: var(--s-10) var(--s-10);
    padding-left: var(--s-30);
  }
`;

export const Form = styled.div`
  display: flex;
  flex-direction: column;
  gap: var(--s-6);
  padding: var(--s-10) 0;
  @media ${DEVICES.DESKTOP_L} {
    flex: 4;
    padding: var(--s-30) 0;
  }
`;

export const Title = styled.div`
  font-size: var(--fs-2xl);
  font-weight: bold;
  @media ${DEVICES.DESKTOP_L} {
    font-size: var(--fs-4xl);
  }
`;

export const Description = styled.div`
  font-size: var(--fs-xs);
  @media ${DEVICES.DESKTOP_L} {
    font-size: var(--fs-md);
  }
`;

export const Text = styled.div`
  @media ${DEVICES.DESKTOP_L} {
    font-size: var(--fs-sm);
  }
`;

export const Divider = styled.div`
  display: none;
  @media ${DEVICES.DESKTOP_L} {
    flex: 1;
    display: unset;
  }
`;
