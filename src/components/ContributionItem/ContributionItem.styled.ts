import { DEVICES } from "@config/responsiveBreakpoints";
import styled from "styled-components";

export const Container = styled.div`
  padding: var(--s-4);
  border-radius: var(--br-xl);
  box-shadow: var(--shadow-1);
`;

export const Image = styled.img`
  aspect-ratio: 3/2;
  border-radius: var(--br-lg);
  width: 100%;
  object-fit: cover;
`;

export const Title = styled.h3`
  padding: var(--s-1) 0;
  display: -webkit-box;
  -webkit-line-clamp: 1;
  -webkit-box-orient: vertical;
  overflow: hidden;
  font-size: var(--fs-md);
  font-weight: var(--fw-semibold);
  @media ${DEVICES.PHONE_L} {
    padding: var(--s-2) 0;
    font-size: var(--fs-lg);
  }
`;

export const Description = styled.p`
  color: var(--dark-gray);
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
  font-size: var(--fs-xs);
  @media ${DEVICES.PHONE_L} {
    padding: var(--s-2) 0;
    -webkit-line-clamp: 3;
  }
`;

export const InteractionContainer = styled.div`
  border-radius: var(--br-lg);
  background-color: var(--light-gray);
  margin-top: var(--s-4);
  padding: var(--s-4);
  display: flex;
  justify-content: space-between;
`;

export const Like = styled.button``;

export const Comment = styled.button``;
