import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  background-color: #236192;
  min-height: 100vh;
  padding: var(--s-28) 0;
`;

export const Left = styled.div`
  flex: 8;
  display: flex;
  justify-content: center;
`;

export const Right = styled.div`
  flex: 4;

  img {
    height: 100%;
  }
`;
