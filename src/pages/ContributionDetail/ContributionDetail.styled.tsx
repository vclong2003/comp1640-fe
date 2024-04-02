import { DEVICES } from "@config/responsiveBreakpoints";
import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  padding-top: var(--s-3);
`;

export const TopContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: var(--s-5);
  @media ${DEVICES.DESKTOP} {
    display: flex;
    flex-wrap: nowrap;
  }
`;

export const Left = styled.div`
  width: 100%;
  @media ${DEVICES.DESKTOP} {
    flex: 8;
  }
`;

export const Right = styled.div`
  flex: 4;
`;

export const BottomContainer = styled.div`
  display: flex;
  justify-content: center;
`;
