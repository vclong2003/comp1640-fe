import React, { FormEvent, useState } from "react";
import * as S from "./LoginForm.styled";
import Group from "../../../../assets/images/Group.png";
import { useDispatch } from "react-redux";
import { AppDispatch } from "../../../../store";
import { login } from "../../../../store/slices/user";

const LoginForm = () => {
  const dispatch = useDispatch<AppDispatch>();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmitLogin = (e: FormEvent) => {
    e.preventDefault();
    dispatch(login({ email, password }));
  };

  return (
    <S.ContainerRight>
      <S.RightForm onSubmit={handleSubmitLogin}>
        <S.Description>Hey, Welcome Back!</S.Description>
        <S.Description2>We are very happy to see you back!</S.Description2>
        <S.TextEmail>Email</S.TextEmail>
        <S.EmailInput
          placeholder="commitcomunity@gmail.com"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        ></S.EmailInput>
        <S.TextPass>Password</S.TextPass>
        <S.PassInput>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </S.PassInput>
        <S.Forgot>
          <a href="/RegisterForm">Forgot Password?</a>
        </S.Forgot>
        <S.CheckRemember>
          <input type="checkbox" /> Remember Me.
        </S.CheckRemember>
        <S.RightFoot>
          <S.BtnContineu type="submit">CONTINEU</S.BtnContineu>
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
