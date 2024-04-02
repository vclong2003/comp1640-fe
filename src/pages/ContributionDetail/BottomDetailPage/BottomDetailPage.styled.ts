import { FormButton } from "@components/formComponents";
import { DEVICES } from "@config/responsiveBreakpoints";
import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  gap: var(--s-3);
`;

export const ButtonCancel = styled(FormButton)`
  padding: var(--s-2) var(--s-4);
  color: white;
  background-color: var(--light-gray-2);
  font-size: var(--fs-lg);
  border-radius: var(--br-md);
  cursor: pointer;
  @media ${DEVICES.DESKTOP} {
    padding: var(--s-3) var(--s-9);
  }
`;

export const ButtonSave = styled(FormButton)`
  padding: var(--s-2) var(--s-7);
  color: white;
  background-color: var(--yellow);
  font-size: var(--fs-lg);
  border-radius: var(--br-md);
  cursor: pointer;
  @media ${DEVICES.DESKTOP} {
    padding: var(--s-2) var(--s-11);
  }
`;
