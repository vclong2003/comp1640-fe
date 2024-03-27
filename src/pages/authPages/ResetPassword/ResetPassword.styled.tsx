import { FormButton } from "@components/formComponents";
import { DEVICES } from "@config/responsiveBreakpoints";

import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  min-height: 100vh;
  justify-content: center;
  @media ${DEVICES.TABLET} {
    justify-content: unset;
  }
`;

export const First = styled.div`
  display: none;
  flex: 2;
  @media ${DEVICES.TABLET} {
    display: unset;
  }
`;

export const Left = styled.div`
  display: flex;
  flex-direction: column;

  width: 100%;
  padding: var(--s-10) var(--s-3);
  @media ${DEVICES.TABLET} {
    display: unset;
    flex: 4;
    padding: var(--s-30) 0;
  }
`;

export const Title = styled.div`
  font-size: var(--fs-3xl);
  font-weight: var(--fw-semibold);
  margin-bottom: var(--s-3);
  @media ${DEVICES.TABLET} {
    font-size: var(--fs-5xl);
    font-weight: var(--fw-semibold);
    margin-bottom: var(--s-3);
  }
`;

export const Right = styled.div`
  display: none;
  @media ${DEVICES.TABLET} {
    display: unset;
    flex: 6;
    display: flex;
    justify-content: center;
  }
`;
