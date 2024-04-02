import styled from "styled-components";

export const Container = styled.div`
  position: relative;
  display: flex;
  width: 29%;
`;

export const Image = styled.img`
  width: 100%;
  height: 100%;
  aspect-ratio: 1;
  object-fit: cover;
  z-index: 0;
  border-radius: var(--br-md);
`;

export const IconDelete = styled.div`
  position: absolute;
  z-index: 1;
  color: white;
  right: 0;
  margin: var(--s-3);
  font-size: var(--fs-md);
  cursor: pointer;
`;
