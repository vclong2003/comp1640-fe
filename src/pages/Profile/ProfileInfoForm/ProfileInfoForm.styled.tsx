import styled from "styled-components";
import { FormGroup as BaseFormGroup } from "../../../components/formComponents";

export const HorizontalFormGroup = styled.div`
  display: flex;
  flex-direction: row;
  gap: var(--s-3);
`;

export const FormGroup = styled(BaseFormGroup)`
  flex: 1;
`;
