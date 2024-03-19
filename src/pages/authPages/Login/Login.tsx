import React from "react";
import { useState } from "react";
import Other03 from "../../../assets/images/Other03.png";
import * as S from "./Login.styled";
import LoginForm from "./LoginForm/LoginForm";
import GuestRegisterForm from "./GuestRegisterForm/GuestRegisterForm";

const Login = () => {
  const [isLogin, setIsLogin] = useState(true);

  return (
    <S.Container>
      <S.ContainerLeft>
        <img src={Other03} alt="" />
      </S.ContainerLeft>
      <S.ContainerRight>
        <S.RightTop>
          <S.Btntop $active={isLogin} onClick={() => setIsLogin(true)}>
            Login
          </S.Btntop>
          <S.Btntop $active={!isLogin} onClick={() => setIsLogin(false)}>
            Register
          </S.Btntop>
        </S.RightTop>
        <S.RightForm>
          {isLogin ? <LoginForm /> : <GuestRegisterForm />}
        </S.RightForm>
      </S.ContainerRight>
    </S.Container>
  );
};

export default Login;
