import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  padding: var(--s-8) var(--s-12);
  min-height: 100vh;
  gap: var(--s-8);
`;

export const LeftContainer = styled.div`
  flex: 3;
`;

export const RightContainer = styled.div`
  flex: 9;
`;
