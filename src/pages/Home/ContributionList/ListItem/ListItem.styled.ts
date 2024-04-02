import { DEVICES } from "@config/responsiveBreakpoints";
import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  gap: var(--s-4);
  width: 100%;
  box-shadow: var(--shadow-1);
  padding: var(--s-4);
  border-radius: var(--br-xl);
  overflow: hidden;
  @media ${DEVICES.DESKTOP} {
    width: 49%;
  }
`;

export const ContentContainer = styled.div`
  flex: 9;
  display: flex;
  flex-direction: column;
`;

export const EventName = styled.div`
  font-size: var(--fs-sm);
  color: var(--dark-gray);
`;

export const Title = styled.div`
  font-size: var(--fs-lg);
  font-weight: var(--fw-semibold);
  margin-top: var(--s-2);
`;

export const Description = styled.div`
  font-size: var(--fs-md);
  width: 100%;
  display: none;
  @media ${DEVICES.PHONE_L} {
    display: unset;
  }
`;

export const InteractionContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  width: 100%;
  justify-content: space-between;
  margin-top: auto;
  @media ${DEVICES.PHONE_L} {
    width: 30%;
  }
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

export const ImageContainer = styled.div`
  flex: 4;
`;

export const Image = styled.img`
  width: 100%;
  height: 100%;
  aspect-ratio: 1;
  object-fit: cover;
  border-radius: var(--br-lg);
`;
