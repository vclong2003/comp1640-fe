import * as S from "./Register.styled";
import image from "@assets/images/login-background.png";
import RegisterForm from "./RegisterForm/RegisterForm";
import { IGuestRegisterPayload } from "@interfaces/user.interfaces";
import userService from "@service/api/user";
import { useNavigate } from "react-router";

export default function Register() {
  const navigate = useNavigate();
  const onRegister = async (values: IGuestRegisterPayload) => {
    userService.guestRegister(values).then(() => navigate("/email-sent"));
  };

  return (
    <S.Container>
      <S.Background src={image}></S.Background>
      <S.Form>
        <S.Title>Welcome to register !</S.Title>
        <S.Description>Please enter your email to cotinue</S.Description>
        <RegisterForm onSubmit={onRegister} />
      </S.Form>
    </S.Container>
  );
}
