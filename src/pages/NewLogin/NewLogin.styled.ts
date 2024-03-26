import styled from "styled-components";
import { DEVICES } from "../../config/responsiveBreakpoints";

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  height: 100vh;
  overflow: hidden;
  justify-content: center;

  @media ${DEVICES.DESKTOP} {
  }
`;

export const Background = styled.div``;

export const Image = styled.img`
  display: none;
  @media ${DEVICES.TABLET} {
    width: auto;
    height: 100%;
    display: unset;
  }
`;

export const FormLogin = styled.div`
  @media ${DEVICES.TABLET} {
    padding: var(--s-40) var(--s-10);
  }
`;
