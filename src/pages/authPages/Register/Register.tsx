import * as S from "./Register.styled";
import image from "@assets/images/login-background.png";
import RegisterForm from "./RegisterForm/RegisterForm";

export default function Register() {
  return (
    <S.Container>
      <S.Background src={image}></S.Background>
      <S.Form>
        <S.Title>Welcome to register !</S.Title>
        <S.Description>Please enter your email to cotinue</S.Description>
        <RegisterForm />
      </S.Form>
    </S.Container>
  );
}
