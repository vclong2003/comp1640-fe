import { DEVICES } from "@config/responsiveBreakpoints";
import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: var(--s-3);
  @media ${DEVICES.DESKTOP} {
    gap: var(--s-7);
  }
`;

export const Title = styled.div`
  font-size: var(--fs-2xl);
  font-weight: bold;
  @media ${DEVICES.DESKTOP} {
    font-size: var(--fs-4xl);
  }
`;

export const Description = styled.div`
  font-size: var(--fs-md);
  @media ${DEVICES.DESKTOP} {
    font-size: var(--fs-xl);
  }
`;

export const Image = styled.div`
img{
  aspect-ratio: 16/9;
  object-fit: cover;
  width: 100%;
  height: 100%;
}
`;
