import { FormButton } from "@components/formComponents";
import styled from "styled-components";

export const BtnConatiner = styled.div`
  display: flex;
  justify-content: center;
  margin-top: var(--s-4);
  gap: var(--s-3);
`;

export const SaveButton = styled(FormButton)`
  font-weight: var(--fw-normal);
  margin: 0;
  padding: var(--s-2) var(--s-10);
`;

export const CancelButton = styled(FormButton)`
  font-weight: var(--fw-normal);
  margin: 0;
  background-color: var(--light-gray-2);
  padding: var(--s-2) var(--s-10);
`;
