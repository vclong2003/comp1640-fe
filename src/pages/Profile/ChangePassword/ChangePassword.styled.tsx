import { FormButton } from "@components/formComponents";
import { DEVICES } from "@config/responsiveBreakpoints";
import styled from "styled-components";

export const ChangePassword = styled.div``;

export const ChangePwdButton = styled(FormButton)`
  font-weight: var(--fw-medium);
  padding: var(--s-2) var(--s-2);
  @media ${DEVICES.DESKTOP} {
    padding: var(--s-2) var(--s-4);
  }
`;
