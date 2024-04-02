import { DEVICES } from "@config/responsiveBreakpoints";
import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: var(--s-5);
  @media ${DEVICES.DESKTOP} {
    gap: var(--s-8);
  }
`;

export const HightLightEvent = styled.div``;

export const ListEvent = styled.div``;
