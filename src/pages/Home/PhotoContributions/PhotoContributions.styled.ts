import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Title = styled.div`
  font-size: var(--fs-10);
  padding: var(--s-4) var(--s-4);
  border-bottom: 2px solid var(--black);
  font-weight: bold;
`;

export const Center = styled.div`
  display: flex;
  padding: var(--s-6) 0;
  gap: var(--s-6);
`;

export const Right = styled.div`
  flex: 8;
`;

export const Left = styled.div`
  flex: 4;
`;
