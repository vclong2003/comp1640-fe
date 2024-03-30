import { FormButton, FormInput } from "@components/formComponents";
import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
`;

export const TopContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: var(--s-5);
`;

export const ContainerDocument = styled.div`
  background-color: var(--light-gray-1);
  padding: var(--s-3) var(--s-8);
  border-radius: var(--br-md);
`;

export const DocumentFile = styled.div`
  display: flex;
  flex-direction: column;
  gap: var(--s-4);
  margin-bottom: var(--s-5);
`;

export const Title = styled.div`
  font-size: var(--fs-lg);
  font-weight: bold;
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  gap: var(--s-3);
`;

export const BtnAddDocs = styled(FormButton)`
  background-color: #f2ba1d;
  display: flex;
  color: var(--black);
  flex-direction: row;
  justify-content: center;
  align-items: center;
  border-radius: var(--br-md);
  font-size: var(--fs-sm);
  gap: var(--s-1);
  margin: 0;
  cursor: pointer;
  font-weight: bold;
`;

export const BtnText = styled.div``;

export const Divider = styled.div`
  border: 1px solid black;
  margin-top: var(--s-3);
`;

export const DocumentImg = styled.div`
  display: flex;
  flex-direction: row;
  margin: 0 var(--s-1);
  flex-wrap: wrap;
  gap: var(--s-2);
  row-gap: var(--s-4);
`;

export const AddImg = styled.button`
  width: 110px;
  height: 110px;
  background-color: rgba(179, 180, 179, 1);
  border-radius: var(--br-md);
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
  gap: var(--s-4);
  background-color: var(--light-gray-1);
  padding: var(--s-3) var(--s-8);
  border-radius: var(--br-md);
`;

export const TitleComment = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: var(--s-1);
  font-size: var(--fs-lg);
  font-weight: bold;
`;

export const TextTitle = styled.div``;

export const InputAddCmt = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: var(--s-2);
`;

export const Input = styled(FormInput)`
  flex: 1;
  border: 2px solid rgba(179, 180, 179, 1);
  padding: var(--s-1) var(--s-3);
  border-radius: var(--fs-md);
  font-size: var(--fs-md);
  background-color: transparent;
`;

export const IconSent = styled.div`
  font-size: var(--fs-md);
`;

export const BottomContainer = styled.div``;

export const BtnPublish = styled(FormButton)`
  background-color: var(--light-gray-2);
  width: 100%;
  padding: var(--s-3) 0;
  color: white;
  font-weight: bold;
  font-size: var(--fs-md);
  border-radius: var(--br-md);
  cursor: pointer;
`;