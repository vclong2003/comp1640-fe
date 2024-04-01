import styled from "styled-components";

export const Container = styled.div`
  padding: var(--s-4);
  border-radius: var(--br-xl);
  width: 25%;
  margin-bottom: var(--s-4);
  box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
`;

export const Image = styled.img`
  aspect-ratio: 3/2;
  border-radius: var(--br-lg);
  width: 100%;
  object-fit: cover;
`;

export const Title = styled.h3`
  padding: var(--s-2) 0;
`;

export const Description = styled.p`
  color: var(--dark-gray);
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
