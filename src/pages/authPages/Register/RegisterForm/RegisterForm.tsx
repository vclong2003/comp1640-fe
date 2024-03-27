import { Form } from "@components/formComponents";
import * as S from "./RegisterForm.styled";

const RegisterForm = () => {
  return (
    <S.Container>
      <S.ContainerForm>
        <Form>
          <S.Input placeholder="Enter your Email"></S.Input>
          <S.BtnContinue>Continue</S.BtnContinue>
        </Form>
      </S.ContainerForm>
    </S.Container>
  );
};

export default RegisterForm;
