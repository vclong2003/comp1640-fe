import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  background-color: #236192;
  min-height: 100vh;
  padding: var(--s-12) 0;
`;

export const Left = styled.div`
  flex: 8;
  display: flex;
  justify-content: center;
`;

export const Right = styled.div`
  flex: 4;
  display: flex;

  img {
    width: 100%;
    height: auto;
  }
`;
