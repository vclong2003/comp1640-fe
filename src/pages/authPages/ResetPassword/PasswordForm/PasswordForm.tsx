import * as S from "./PasswordForm.styled";
import { Formik } from "formik";
import { Form, FormGroup } from "@components/formComponents";

const PasswordForm = () => {
  return (
    <S.ContainerForm>
      <Formik>
        <Form>
          <FormGroup>
            <S.Label>Email</S.Label>
            <S.Input></S.Input>
          </FormGroup>
          <FormGroup>
            <S.Label>Password</S.Label>
            <S.Input></S.Input>
          </FormGroup>
        </Form>
      </Formik>
      <S.BtnReset>Reset</S.BtnReset>
      <S.Text>Back To Login</S.Text>
    </S.ContainerForm>
  );
};

export default PasswordForm;
