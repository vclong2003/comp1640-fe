import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  height: 100vh;
  justify-content: center;
`;

export const Background = styled.div`
  flex: 3;
`;

export const Image = styled.img`
  width: auto;
  height: 100%;
`;

export const FormLogin = styled.div`
  display: flex;
  flex-direction: column;
  gap: var(--s-5);
  flex: 9;
  padding: var(--s-30) 0;
`;

export const Title = styled.div`
  font-size: var(--fs-6xl);
`;

export const Description = styled.div`
  font-size: var(--fs-3xl);
`;