import styled from "styled-components";
import { DEVICES } from "../../../config/responsiveBreakpoints";

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
`;

export const Description = styled.div`
  font-size: var(--fs-xl);
  @media ${DEVICES.DESKTOP_L} {
    font-size: var(--fs-3xl);
  }
`;
