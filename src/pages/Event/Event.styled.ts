import { DEVICES } from "@config/responsiveBreakpoints";
import styled from "styled-components";

export const Event = styled.div`
  display: flex;
  flex-direction: column;
  gap: var(--s-3);
  padding-top: var(--s-2);
  margin-bottom: var(--s-3);
  padding-bottom: var(--s-5);
  border-bottom: 2px solid black;
`;

export const BannerImageContainer = styled.div`
  position: relative;
`;

export const BannerImage = styled.img`
  aspect-ratio: 16/9;
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: var(--br-md);
  filter: brightness(0.7);
  @media ${DEVICES.DESKTOP} {
    aspect-ratio: 3;
  }
`;

export const BannerText = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  margin: var(--s-6);
`;

export const FacultyName = styled.p`
  font-size: var(--fs-2xl);
  font-weight: var(--fw-semibold);
  color: var(--white);
  text-shadow: var(--text-shadow);
  @media ${DEVICES.DESKTOP} {
    font-size: var(--fs-4xl);
  }
`;

export const FacultyDescription = styled.p`
  font-size: var(--fs-md);
  color: var(--white);
  font-style: italic;
  text-shadow: var(--text-shadow);
  @media ${DEVICES.DESKTOP} {
    font-size: var(--fs-xl);
  }
`;

export const StatusEvent = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  gap: var(--s-20);
  margin-bottom: var(--s-6);
`;

export const ContainerItem = styled.div`
display: flex;
flex-direction: row;
align-items: center;
gap: var(--s-2);
`;

export const BoderDone = styled.div`
  background-color: var(--red);
  padding: var(--s-3);
  border-radius: 50%;
`;

export const Done = styled.div``;

export const BoderInProcess = styled.div`
background-color: var(--green);
  padding: var(--s-3);
  border-radius: 50%;
`;

export const Inprocess = styled.div``;
