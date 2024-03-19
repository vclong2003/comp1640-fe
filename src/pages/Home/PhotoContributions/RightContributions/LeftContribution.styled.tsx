import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: var(--s-4);
`;

export const Image = styled.img`
  border-radius: var(--br-lg);
  width: 100%;
  height: auto;
  z-index: 0;
`;

export const Divider = styled.div``;

export const Title = styled.div`
  font-size: 50px;
  font-weight: bold;
  padding-bottom: var(--s-6);
`;

export const Description = styled.div`
  font-size: 20px;
`;
