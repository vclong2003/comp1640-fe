import styled from "styled-components";
import {
  FormGroup as BaseFormGroup,
  FormButton,
} from "../../../components/formComponents";

export const HorizontalFormGroup = styled.div`
  display: flex;
  flex-direction: row;
  gap: var(--s-3);
`;

export const FormGroup = styled(BaseFormGroup)`
  flex: 1;
`;

export const ButtonGroup = styled.div`
  display: flex;
  flex-direction: row;
  gap: var(--s-3);
  justify-content: center;
`;

export const SaveButton = styled(FormButton)`
  padding: var(--s-2) var(--s-7);
`;

export const CancelButton = styled(FormButton)`
  padding: 0 var(--s-6);
  background-color: var(--gray);
`;
