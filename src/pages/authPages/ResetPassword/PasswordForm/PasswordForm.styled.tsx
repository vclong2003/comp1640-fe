import { FormButton, FormInput, FormLabel } from "@components/formComponents";
import styled from "styled-components";

export const ContainerForm = styled.div`
  display: flex;
  flex-direction: column;
  border-radius: var(--br-md);
  padding: var(--s-6);
  box-shadow: var(--shadow-md);
  background-color: var(--ice-blue);
`;

export const Label = styled(FormLabel)``;

export const Input = styled(FormInput)`
  background-color: var(--white);
`;

export const BtnReset = styled(FormButton)``;

export const Text = styled.div`
  margin-left: auto;
  color: var(--black);
`;
