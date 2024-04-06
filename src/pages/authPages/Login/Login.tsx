import * as S from "./Login.styled";
import BackGround from "@assets/images/login-background.png";
import LoginForm from "./LoginForm/LoginForm";
import { useDispatch } from "react-redux";
import { API_BASE_URL } from "@config/api.config";
import { ILoginPayload } from "@interfaces/user.interfaces";
import { AppDispatch } from "@store/index";
import { login } from "@store/user";
import { useState } from "react";

export default function Login() {
  const dispatch = useDispatch<AppDispatch>();
  const [loading, setLoading] = useState(false);

  const onLogin = (values: ILoginPayload) => {
    setLoading(true);
    dispatch(login(values)).finally(() => setLoading(false));
  };

  const onGoogleLogin = () => {
    window.location.href = `${API_BASE_URL}/auth/google`;
  };

  return (
    <S.Container>
      <S.Background>
        <S.Image src={BackGround}></S.Image>
      </S.Background>
      <S.RightContent>
        <S.Title>Hey, Welcome Back!</S.Title>
        <S.Description>We are very happy to see you back!</S.Description>
        <LoginForm
          loading={loading}
          onSubmit={onLogin}
          onGoogleLogin={onGoogleLogin}
        />
      </S.RightContent>
    </S.Container>
  );
}
