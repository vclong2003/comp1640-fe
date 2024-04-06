import { FormButton } from "@components/formComponents";
import { DEVICES } from "@config/responsiveBreakpoints";
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
  padding: var(--s-2) var(--s-4);
  border-radius: var(--br-md);
  @media ${DEVICES.DESKTOP} {
    padding: var(--s-3) var(--s-8);
  }
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
  display: flex;
  color: var(--black);
  justify-content: center;
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
  justify-content: space-between;
  flex-wrap: wrap;
  gap: var(--s-2);
  row-gap: var(--s-4);
`;

export const AddImg = styled.button`
  width: 29%;
  aspect-ratio: 1;

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
  padding: var(--s-3) var(--s-4);
  border-radius: var(--br-md);
  @media ${DEVICES.DESKTOP} {
    padding: var(--s-3) var(--s-8);
  }
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

export const Input = styled.input`
  flex: 1;
  border: 2px solid rgba(179, 180, 179, 1);
  padding: var(--s-1) var(--s-3);
  border-radius: var(--br-lg);
  font-size: var(--fs-md);
  background-color: transparent;
`;

export const IconSent = styled.div`
  font-size: var(--fs-md);
`;



