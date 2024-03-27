import styled from "styled-components";
import { FormButton, FormInput } from "../../../../components/formComponents";
import { Formik } from "formik";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
`;

export const ContainerForm = styled(Formik)``;

export const Input = styled(FormInput)`
  margin-bottom: var(--s-4);
`;

export const BtnContinue = styled(FormButton)`
  background-color: var(--dark-brown);
  margin-bottom: var(--s-4);
`;

export const BtnBack = styled(FormButton)`
  margin: 0;
`;
