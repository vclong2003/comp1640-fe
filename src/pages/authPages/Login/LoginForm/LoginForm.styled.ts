import { Formik } from "formik";
import styled, { keyframes } from "styled-components";
import { FormButton } from "../../../../components/formComponents";
const slideInFromRight = keyframes`
0% {
  opacity: 0;
  transform: translateX(100%);
}
100% {
  opacity: 1;
  transform: translateX(0);
}
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: var(--s-5);
  animation: ${slideInFromRight} 2s ease forwards;
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
  transition: box-shadow 0.3s, transform 0.3s;
  &:hover {
    transform: translateY(-2px);
  }
`;

export const BtnLoginWithGoogle = styled(FormButton)`
  margin: 0;
  background-color: var(--white);
  color: var(--blue-gray);
  border: 2px solid var(--blue-gray);
  transition: box-shadow 0.3s, transform 0.3s;
  &:hover {
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    transform: translateY(-2px);
  }
`;
