import styled from "styled-components";
import {
  FormButton,
  FormInput,
  FormLabel,
} from "../../../components/formComponents";
import { Formik } from "formik";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
`;

export const ContainerForm = styled(Formik)``;

export const Input = styled(FormInput)``;

export const BtnContinue = styled(FormButton)``;
