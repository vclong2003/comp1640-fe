import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  height: 100vh;
`;

export const Background = styled.div``;

export const Image = styled.img`
  width: auto;
  height: 100%;
`;

export const RightContent = styled.div`
  margin-top: var(--s-10);
  display: flex;
  flex-direction: column;
  gap: var(--s-5);
`;

export const Title = styled.div`
  font-size: var(--fs-6xl);
`;

export const Description = styled.div`
  font-size: var(--fs-3xl);
`;
