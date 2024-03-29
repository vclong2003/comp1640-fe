import { FormButton } from "@components/formComponents";
import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  gap: var(--s-3);
`;

export const ButtonCancel = styled(FormButton)`
  padding: var(--s-3) var(--s-9);
  color: white;
  background-color: var(--light-gray-2);
  font-size: var(--fs-lg);
  border-radius: var(--br-md);
  cursor: pointer;
`;

export const ButtonSave = styled(FormButton)`
  padding: var(--s-3) var(--s-11);
  color: white;
  background-color: var(--yellow);
  font-size: var(--fs-lg);
  border-radius: var(--br-md);
  cursor: pointer;
`;
