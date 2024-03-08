import React from "react";
import { useState } from "react";
import Other03 from "../../assets/images/Other03.png";
import Login from "./Login/Login";
import RegisterForm from "./Register/RegisterForm";
import * as S from "./lginform.styled";
import "./login.css";

const Lginform = () => {
  const [isLogin, setIsLogin] = useState(true);
  return (
    <S.Container>
      <S.ContainerLeft>
        <img src={Other03} alt="" />
      </S.ContainerLeft>
      <S.ContainerRight>
        <S.RightTop>
          <S.Btntop
            active={isLogin}
            onClick={() => setIsLogin(true)}
          >
            Login
          </S.Btntop>
          <S.Btntop
            active={!isLogin}
            onClick={() => setIsLogin(false)}
          >
            Register
          </S.Btntop>
        </S.RightTop>
        <S.RightForm>{isLogin ? <Login /> : <RegisterForm />}</S.RightForm>
      </S.ContainerRight>
    </S.Container>
  );
};

export default Lginform;
