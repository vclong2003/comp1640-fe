import styled from "styled-components";

export const Container = styled.div`
  padding: var(--s-4);
  border-radius: var(--br-xl);
  width: 25%;
  box-shadow: var(--shadow-lg);
`;

export const Image = styled.img`
  width: 100%;
  border-radius: var(--br-lg);
  width: 100%;
  height: 200px;
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
