import React, { FormEvent, useEffect, useState } from "react";
import * as S from "./LoginForm.styled";
import Group from "../../../../assets/images/Group.png";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../../../../store";
import { getCurrentUser, login } from "../../../../store/slices/user";
import { useNavigate, useSearchParams } from "react-router-dom";
import { API_BASE_URL } from "../../../../config/api.config";

const LoginForm = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch<AppDispatch>();
  const { user } = useSelector((state: RootState) => state.userState);

  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [searchParams] = useSearchParams();

  const handleSubmitLogin = (e: FormEvent) => {
    e.preventDefault();
    dispatch(login({ email, password }))
      .unwrap()
      .then(() => dispatch(getCurrentUser()));
  };

  useEffect(() => {
    if (user) {
      navigate(searchParams.get("redirect") || "/");
    }
  }, [user, navigate, searchParams]);

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
          id="email"
        ></S.EmailInput>
        <S.TextPass>Password</S.TextPass>
        <S.PassInput>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            id="password"
          />
        </S.PassInput>
        <S.Forgot>
          <a href="/RegisterForm">Forgot Password?</a>
        </S.Forgot>
        <S.CheckRemember>
          <input type="checkbox" /> Remember Me.
        </S.CheckRemember>
        <S.RightFoot>
          <S.BtnContineu type="submit">LOGIN</S.BtnContineu>
        </S.RightFoot>
        <S.RightMiddle>
          <S.TextOr>
            ------------------------OR------------------------
          </S.TextOr>
          <S.BtnLginGG
            onClick={() =>
              (window.location.href = API_BASE_URL + "/auth/google")
            }
          >
            <img src={Group} alt="" />
            Login With Google
          </S.BtnLginGG>
        </S.RightMiddle>
      </S.RightForm>
    </S.ContainerRight>
  );
};

export default LoginForm;
