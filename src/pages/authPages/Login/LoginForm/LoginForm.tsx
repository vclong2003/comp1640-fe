import React from "react";
import * as S from "./LoginForm.styled";
import Group from "../../../../assets/images/Group.png";

const LoginForm = () => {
  return (
    <S.ContainerRight>
      <S.RightForm>
        <S.Description>Hey, Welcome Back!</S.Description>
        <S.Description2>We are very happy to see you back!</S.Description2>
        <S.TextEmail>Email</S.TextEmail>
        <S.EmailInput placeholder="commitcomunity@gmail.com"></S.EmailInput>
        <S.TextPass>Password</S.TextPass>
        <S.PassInput>
          <input type="password" />
        </S.PassInput>
        <S.Forgot>
          <a href="/RegisterForm">Forgot Password?</a>
        </S.Forgot>
        <S.CheckRemember>
          <input type="checkbox" /> Remember Me.
        </S.CheckRemember>
        <S.RightFoot>
          <S.BtnContineu>CONTINEU</S.BtnContineu>
        </S.RightFoot>
        <S.RightMiddle>
          <S.TextOr>
            ------------------------OR------------------------
          </S.TextOr>
          <S.BtnLginGG>
            <img src={Group} alt="" />
            Login With Google
          </S.BtnLginGG>
        </S.RightMiddle>
      </S.RightForm>
    </S.ContainerRight>
  );
};

export default LoginForm;
