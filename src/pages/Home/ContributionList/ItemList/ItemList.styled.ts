import { DEVICES } from "@config/responsiveBreakpoints";
import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  margin-top: var(--s-5);
  border-bottom: 2px solid var(--black);
  margin-bottom: var(--s-4);
`;

export const Left = styled.div`
  flex: 9;
  display: flex;
  flex-direction: column;
  @media ${DEVICES.DESKTOP} {
    flex: 2;
  }
`;

export const NameAuthor = styled.div`
  font-size: var(--fs-sm);
  /* padding: var(--s-2) 0; */
  @media ${DEVICES.DESKTOP} {
    font-size: var(--fs-lg);
    padding: var(--s-4) 0;
  }
`;

export const Title = styled.div`
  font-size: var(--fs-md);
  font-weight: var(--fw-semibold);
  margin: var(--s-3) 0;
  @media ${DEVICES.DESKTOP} {
    font-size: var(--fs-xl);
    padding-bottom: var(--s-5);
  }
`;

export const Description = styled.div``;

export const InteractionContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: var(--s-10) 0 var(--s-3) 0;
  gap: var(--s-5);
`;

export const Like = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: var(--s-1);
`;

export const Comment = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: var(--s-1);
`;

export const Right = styled.div`
  flex: 3;
  @media ${DEVICES.DESKTOP} {
    flex: 10;
  }
`;

export const Image = styled.img`
  width: 100%;
  height: auto;
  aspect-ratio: 1;
  object-fit: cover;
`;
