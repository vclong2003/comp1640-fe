import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  height: 100vh;
  flex-direction: row;
`;

export const Background = styled.img`
  width: auto;
  height: 100%;
`;

export const Form = styled.div`
  padding-top: var(--s-30);
  display: flex;
  flex-direction: column;
  gap: var(--s-6);
`;

export const Title = styled.div`
  font-size: var(--fs-6xl);
`;

export const Description = styled.div`
  font-size: var(--fs-2xl);
`;
