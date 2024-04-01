import { DEVICES } from "@config/responsiveBreakpoints";
import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  margin-top: var(--s-5);
  flex-direction: column;
  gap: var(--s-3);
`;

export const ContainerTop = styled.div`
  display: flex;
  gap: var(--s-8);
`;

export const Left = styled.div`
  flex: 3;
  display: flex;
  flex-direction: column;
  @media ${DEVICES.DESKTOP} {
    flex: 2;
  }
`;

export const EventName = styled.div`
  font-size: var(--fs-sm);
  @media ${DEVICES.DESKTOP} {
    font-size: var(--fs-lg);
    margin-bottom: var(--s-5);
  }
`;

export const Title = styled.div`
  font-size: var(--fs-md);
  font-weight: var(--fw-semibold);
  margin: var(--s-3) 0;
  @media ${DEVICES.DESKTOP} {
    font-size: var(--fs-2xl);
  }
`;

export const Description = styled.div`
  font-size: var(--fs-md);
  width: 100%;
`;

export const InteractionContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  width: 30%;
  justify-content: space-between;
  margin-top: var(--s-2);
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
  flex: 9;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  @media ${DEVICES.DESKTOP} {
    flex: 10;
  }
`;

export const ContainerImage = styled.div``;

export const Image = styled.img`
  width: 100%;
  height: 100%;
  aspect-ratio: 1/1;
  border-radius: var(--br-md);
  object-fit: cover;
`;

export const ContainerBottom = styled.div`
  border: 1px solid black;
`;
