import { FormButton } from "@components/formComponents";
import styled from "styled-components";

export const SaveButton = styled(FormButton)`
  font-weight: var(--fw-normal);
  margin: var(--s-4) 0;
`;

export const CancelButton = styled(FormButton)`
  font-weight: var(--fw-normal);
  margin: 0;
  background-color: var(--light-gray-2);
`;
