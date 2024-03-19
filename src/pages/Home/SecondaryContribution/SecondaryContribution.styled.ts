import styled from "styled-components";

export const Container = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
`;
export const Title = styled.h2`
  font-size: var(--fs-2xl);
  padding: var(--s-4) 0;
`;

export const Description = styled.p`
  font-size: var(--fs-lg);
  padding-bottom: var(--s-4);
  border-bottom: 2px solid var(--black);
`;

export const Divider = styled.div``;

export const Image = styled.img`
  border-radius: var(--br-lg);
  width: 100%;
  height: auto;
  z-index: 0;
`;

export const Bottom = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  margin: var(--s-4) 0;
`;

export const Text = styled.div``;
