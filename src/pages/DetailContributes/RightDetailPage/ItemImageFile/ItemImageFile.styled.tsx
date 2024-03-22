import styled from "styled-components";

export const Container = styled.div`
  position: relative;
  display: flex;
`;

export const Image = styled.img`
  width: 160px;
  height: 140px;
  z-index: 0;
`;

export const IconDelete = styled.div`
  position: absolute;
  z-index: 1;
  color: white;
  right: 0;
  padding: var(--s-2) var(--s-3);
  font-size: var(--fs-xl);
  cursor: pointer;
`;
