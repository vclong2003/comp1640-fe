import styled from "styled-components";

export const FileSelector = styled.div``;

export const FilesContainer = styled.div`
  border-radius: var(--br-md);
  padding: var(--s-4);
  background-color: var(--light-gray);
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  gap: var(--s-3);
`;

export const AddButton = styled.label`
  font-size: var(--fs-sm);
  color: var(--blue);
  text-decoration: underline;
  cursor: pointer;
`;

export const Container = styled.div`
  display: flex;
  align-items: center;
  flex-direction: row;
  gap: var(--s-5);
  background-color: var(--white);
  padding: var(--s-2);
  border-radius: var(--br-md);
`;

export const Title = styled.div`
  display: -webkit-box;
  -webkit-line-clamp: 1;
  -webkit-box-orient: vertical;
  overflow: hidden;
  font-size: var(--fs-sm);
`;

export const RemoveButton = styled.div``;
