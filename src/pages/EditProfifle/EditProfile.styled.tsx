import styled from "styled-components";

export const Container = styled.div`
  padding: var(--s-5) var(--s-10);
  display: flex;
  flex-direction: column;
  height: auto;
  background-color: white;
`;

export const Top = styled.div`
  padding: var(--s-10);
  font-size: 50px;
  font-weight: bold;
  width: 100%;
  justify-content: center;
  display: flex;
`;

export const Middle = styled.div`
  padding: var(--s-10) 0;
`;

export const Bottom = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  padding-bottom: var(--s-10);
`;
