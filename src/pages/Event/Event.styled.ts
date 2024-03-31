import styled from "styled-components";

export const Event = styled.div`
  display: flex;
  flex-direction: column;
  gap: var(--s-3);
  padding-top: var(--s-2);
  padding-bottom: var(--s-8);
`;

export const BannerImageContainer = styled.div`
  position: relative;
`;

export const BannerImage = styled.img`
  aspect-ratio: 3;
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: var(--br-md);
  filter: brightness(0.7);
`;

export const BannerText = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  margin: var(--s-6);
`;

export const FacultyName = styled.p`
  font-size: var(--fs-4xl);
  font-weight: var(--fw-semibold);
  color: var(--white);
  text-shadow: var(--text-shadow);
`;

export const FacultyDescription = styled.p`
  font-size: var(--fs-xl);
  color: var(--white);
  font-style: italic;
  text-shadow: var(--text-shadow);
`;
