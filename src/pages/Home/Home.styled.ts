import { DEVICES } from "@config/responsiveBreakpoints";
import styled from "styled-components";

export const Container = styled.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  gap: var(--s-5);
  @media ${DEVICES.DESKTOP} {
    gap: var(--s-5);
  }
`;

export const Banner = styled.div`
  display: flex;

  @media ${DEVICES.DESKTOP} {
    gap: var(--s-6);
  }
`;

export const FeaturedContainer = styled.div`
  flex: 8;
  width: 100%;
  @media ${DEVICES.DESKTOP} {
    display: unset;
  }
`;

export const SecondaryContainer = styled.div`
  flex: 4;
  display: none;
  @media ${DEVICES.DESKTOP} {
    display: unset;
  }
`;
