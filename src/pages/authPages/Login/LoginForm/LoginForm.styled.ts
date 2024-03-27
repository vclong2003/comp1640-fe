import { Formik } from "formik";
import styled from "styled-components";
import { FormButton } from "../../../../components/formComponents";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: var(--s-5);
`;

export const Title = styled.div`
  font-size: var(--fs-6xl);
`;

export const Description = styled.div`
  font-size: var(--fs-3xl);
`;

export const FormContainer = styled(Formik)``;

export const LinkRegis = styled.div`
  font-size: var(--fs-xl);
  color: var(--yellow);
  text-decoration: underline;
  cursor: pointer;
`;

export const Error = styled.p`
  color: var(--red);
  font-size: var(--fs-md);
`;

export const Divider = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  gap: var(--s-3);
  font-size: var(--fs-xl);
  padding: 0 var(--s-10);
`;

export const Line = styled.div`
  border: 1px solid black;
  width: 100%;
`;

export const BtnLoginWithGoogle = styled(FormButton)`
  margin: 0;
  background-color: var(--white);
  color: var(--blue-gray);
  border: 2px solid var(--blue-gray);
`;
