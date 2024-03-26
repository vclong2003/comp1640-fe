import * as S from "./LoginForm.styled";

const LoginForm = () => {
  return (
    <S.Container>
      <S.Title>Hey, Welcome Back!</S.Title>
      <S.Description>We are very happy to see you back!</S.Description>
      <S.Form>
        <S.FormGroup>
          <S.Label>Email</S.Label>
          <S.Input></S.Input>
        </S.FormGroup>
        <S.FormGroup>
          <S.Label>Password</S.Label>
          <S.Input></S.Input>
        </S.FormGroup>
      </S.Form>
      <S.LinkRegis>
        <a href="">Don't have an account? Register here!</a>
      </S.LinkRegis>
      <S.Button>
        <S.BtnLogin>Continue</S.BtnLogin>
        <S.Divider>
          <S.Line />
          OR
          <S.Line />
        </S.Divider>
        <S.BtnLoginWithGoogle>Login With Google</S.BtnLoginWithGoogle>
      </S.Button>
    </S.Container>
  );
};

export default LoginForm;
