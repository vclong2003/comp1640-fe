
import styled from "styled-components";

export const FileList = styled.div``;

export const FilesContainer = styled.div`
  border-radius: var(--br-md);
  padding: var(--s-4);
  background-color: var(--light-gray);
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  gap: var(--s-3);
`;

export const Container = styled.div`
  display: flex;
  cursor: pointer;
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

export const ContainerCiCirleRemove = styled.div`
  width: 32px;
  align-items: center;
  display: flex;
  justify-content: center;
`;
