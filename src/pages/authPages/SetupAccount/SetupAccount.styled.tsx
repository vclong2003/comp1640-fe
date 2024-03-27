import styled from "styled-components";
import { DEVICES } from "../../../config/responsiveBreakpoints";

export const Container = styled.div`
  display: flex;
  max-height: 100vh;
  gap: 20px;
`;

export const Left = styled.div`
  flex: 4;
  display: none;
  img {
    height: 100%;
    width: 100%;
  }
  @media ${DEVICES.DESKTOP_L} {
    display: unset;
  }
`;

export const Right = styled.div`
  flex: 8;
`;
