import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  min-height: 100vh;
  background-color: #236192;
`;

export const Left = styled.div`
  flex: 8;
  display: flex;
  justify-content: flex-end;
  padding: var(--s-14) var(--s-14) 0 var(--s-30);
`;

export const Right = styled.div`
  flex: 4;
  display: flex;
  justify-content: center;
`;
