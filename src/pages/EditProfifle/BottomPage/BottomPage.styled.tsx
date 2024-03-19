import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex: row;
  gap: var(--s-10);
`;

export const Cancel = styled.div``;

export const BtnCancel = styled.button`
  background-color: rgba(46, 80, 92, 0.6);
  padding: var(--s-4) var(--s-10);
  color: white;
  border-radius: 10px;
  font-size: 20px;
  cursor: pointer;
  &:hover {
    background-color: #bfbfbf;
  }
`;

export const Save = styled.div``;

export const BtnSave = styled.button`
  background-color: #9cd323;
  padding: var(--s-4) var(--s-10);
  color: white;
  border-radius: 10px;
  font-size: 20px;
  cursor: pointer;
  &:hover {
    background-color: rgba(103, 255, 79, 0.4);
  }
`;
