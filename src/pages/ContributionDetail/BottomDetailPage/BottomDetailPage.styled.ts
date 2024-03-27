import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  gap: var(--s-7);
`;

export const Cancel = styled.div``;

export const ButtonCancel = styled.button`
  padding: var(--s-3) var(--s-9);
  color: white;
  background-color: #bfbfbf;
  font-size: var(--fs-xl);
  border-radius: var(--fs-sm);
  cursor: pointer;
  &:hover {
    background-color: rgba(179, 180, 179, 0.6);
  }
`;

export const ButtonSave = styled.button`
  padding: var(--s-3) var(--s-9);
  color: white;
  background-color: #f2ba1d;
  font-size: var(--fs-xl);
  border-radius: var(--fs-sm);
  cursor: pointer;
  &:hover {
    background-color: rgba(202, 150, 23, 0.4);
  }
`;

export const Save = styled.div``;
