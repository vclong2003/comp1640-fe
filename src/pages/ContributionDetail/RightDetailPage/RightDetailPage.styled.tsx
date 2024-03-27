import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: var(--s-10);
  padding: 0 var(--s-5);
`;

export const TopContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: var(--s-10);
  padding: 0 var(--s-3);
`;

export const DocumentFile = styled.div`
  display: flex;
  flex-direction: column;
  gap: var(--s-8);
`;

export const Title = styled.div`
  font-size: 20px;
  font-weight: bold;
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  gap: var(--s-3);
`;

export const BtnAddDocs = styled.button`
  background-color: #f2ba1d;
  display: flex;
  flex-direction: row;
  justify-content: center;
  padding: var(--s-3) 0;
  border-radius: var(--fs-md);
  gap: var(--s-3);
  cursor: pointer;
  &:hover {
    background-color: rgba(202, 150, 23, 0.4);
  }
`;

export const BtnIcon = styled.div`
  font-size: var(--fs-md);
`;

export const BtnText = styled.div`
  font-size: var(--fs-md);
  font-weight: bold;
`;

export const Divider = styled.div`
  border: 1px solid black;
`;

export const DocumentImg = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  gap: var(--s-8);
  row-gap: var(--s-6);
  padding: 0 var(--s-3);
`;

export const AddImg = styled.button`
  width: 180px;
  height: 160px;
  background-color: rgba(179, 180, 179, 1);
  border-radius: var(--fs-md);
  cursor: pointer;
  z-index: 0;
  &:hover {
    background-color: rgba(179, 180, 179, 0.6);
  }
`;

export const AddIcon = styled.div`
  font-size: var(--fs-2xl);
`;

export const PrivateCmt = styled.div`
  display: flex;
  flex-direction: column;
  gap: var(--s-10);
`;

export const TitleComment = styled.div`
  display: flex;
  flex-direction: row;
  gap: var(--s-2);
  font-size: var(--fs-xl);
  font-weight: bold;
`;

export const IconTitle = styled.div``;

export const TextTitle = styled.div``;

export const InputAddCmt = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: var(--s-3);
`;

export const Input = styled.input`
  flex: 1;
  border: 1px solid rgba(179, 180, 179, 1);
  padding: var(--s-3) var(--s-3);
  border-radius: var(--fs-md);
  font-size: var(--fs-md);
`;

export const IconSent = styled.div`
  font-size: var(--fs-xl);
`;

export const BottomContainer = styled.div``;

export const BtnPublish = styled.button`
  background-color: rgba(179, 180, 179, 1);
  width: 100%;
  padding: var(--s-4) 0;
  color: white;
  font-weight: bold;
  font-size: var(--fs-md);
  border-radius: var(--fs-md);
  cursor: pointer;
  &:hover {
    background-color: rgba(179, 180, 179, 0.6);
  }
`;
