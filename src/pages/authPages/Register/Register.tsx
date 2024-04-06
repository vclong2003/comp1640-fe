import * as S from "./Register.styled";
import image from "@assets/images/login-background.png";
import RegisterForm from "./RegisterForm/RegisterForm";
import { IGuestRegisterPayload } from "@interfaces/user.interfaces";
import userService from "@service/user";
import { useNavigate } from "react-router";
import { useState } from "react";

export default function Register() {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const onRegister = async (values: IGuestRegisterPayload) => {
    userService
      .guestRegister(values)
      .then(() => navigate("/email-sent"))
      .finally(() => setLoading(false));
  };

  return (
    <S.Container>
      <S.Background src={image}></S.Background>
      <S.Form>
        <S.Title>Welcome to register !</S.Title>
        <S.Description>Please enter your email to cotinue</S.Description>
        <RegisterForm loading={loading} onSubmit={onRegister} />
      </S.Form>
    </S.Container>
  );
}
