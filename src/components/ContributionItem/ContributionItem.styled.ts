import { DEVICES } from "@config/responsiveBreakpoints";
import styled from "styled-components";

export const Container = styled.div`
  padding: var(--s-4);
  border-radius: var(--br-xl);
  box-shadow: var(--shadow-1);
  display: flex;
  flex-direction: column;
  @media ${DEVICES.DESKTOP} {
    margin-bottom: var(--s-2);
  }
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
    padding: var(--s-1) 0;
    font-size: var(--fs-lg);
  }
`;

export const Description = styled.p`
  color: var(--dark-gray);
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  overflow: hidden;
  font-size: var(--fs-xs);
  margin-bottom: var(--s-2);
  @media ${DEVICES.PHONE_L} {
    padding: var(--s-2) 0;
    -webkit-line-clamp: 3;
  }
  p {
    overflow: hidden;
  }
`;

export const InteractionContainer = styled.div`
  border-radius: var(--br-lg);
  background-color: var(--light-gray);
  margin-top: auto;
  padding: var(--s-4);
  display: flex;
  justify-content: space-between;
`;

interface ILikeProps {
  $isLiked?: boolean;
}
export const Like = styled.div<ILikeProps>`
  display: flex;
  align-items: center;
  gap: var(--s-1);
  font-size: var(--fs-md);
  color: ${({ $isLiked }) => ($isLiked ? "var(--red)" : "var(--gray)")};
`;

export const Comment = styled.div`
  display: flex;
  align-items: center;
  gap: var(--s-1);
  font-size: var(--fs-md);
  color: var(--black);
`;
