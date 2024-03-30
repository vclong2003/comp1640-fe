import * as S from "./Login.styled";
import BackGround from "@assets/images/login-background.png";
import LoginForm from "./LoginForm/LoginForm";
import { useDispatch, useSelector } from "react-redux";
import { Navigate, useSearchParams } from "react-router-dom";
import { useState } from "react";
import { API_BASE_URL } from "@config/api.config";
import { login } from "@store/user/userActions";
import { ILoginPayload } from "@interfaces/user.interfaces";
import { AppDispatch, RootState } from "@store/index";

export default function Login() {
  const { user } = useSelector((state: RootState) => state.userState);
  const dispatch = useDispatch<AppDispatch>();

  const [searchParams] = useSearchParams();

  const [error, setError] = useState("");
  const onLogin = (values: ILoginPayload) => {
    setError("");
    dispatch(login(values));
  };

  const onGoogleLogin = () => {
    window.location.href = `${API_BASE_URL}/auth/google`;
  };

  return (
    <S.Container>
      {user && <Navigate to={searchParams.get("redirect") || "/home"} />}
      <S.Background>
        <S.Image src={BackGround}></S.Image>
      </S.Background>
      <S.RightContent>
        <S.Title>Hey, Welcome Back!</S.Title>
        <S.Description>We are very happy to see you back!</S.Description>
        <LoginForm
          error={error}
          onSubmit={onLogin}
          onGoogleLogin={onGoogleLogin}
        />
      </S.RightContent>
    </S.Container>
  );
}
