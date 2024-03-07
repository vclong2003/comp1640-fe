import React from "react";
import * as S from "./LoginPageForm.styled";
import Other03 from "../../assets/images/Other03.png";
import Group from "../../assets/images/Group.png";
import { useState } from "react";

const LoginPageForm = () => {
  const [action, setAction] = useState("Login");

  return (
    <S.Container>
      <S.ContainerLeft>
        <img src={Other03} alt="" />
      </S.ContainerLeft>
      <S.ContainetRight>
        <S.RightTop>
          <S.Btntop
            className={action === "Register" ? "Btntopgray" : "Btntop"}
            onClick={() => {
              setAction("Login");
            }}
          >
            Login
          </S.Btntop>
          <S.Btntop
            className={action === "Login" ? "Btntopgray" : "Btntop"}
            onClick={() => {
              setAction("Register");
            }}
          >
            Register
          </S.Btntop>
        </S.RightTop>
        <S.RightForm>
          {action === "Login" ? (
            <S.Description>Hey, Welcome Back!</S.Description>
          ) : (
            <S.RegisDescription>Welcome, Register.</S.RegisDescription>
          )}

          {action === "Login" ? (
            <S.Description2>We are very happy to see you back!</S.Description2>
          ) : (
            <S.RegisDescription2>Nice to meet you</S.RegisDescription2>
          )}

          {action === "Login" ? (
            <S.TextEmail>Email</S.TextEmail>
          ) : (
            <S.TextEmailRegis>Email</S.TextEmailRegis>
          )}

          {action === "Login" ? (
            <S.none></S.none>
          ) : (
            <S.TextFill>Fill your mail hear</S.TextFill>
          )}

          {action === "Login" ? (
            <S.EmailInput placeholder="commitcomunity@gmail.com"></S.EmailInput>
          ) : (
            <S.EmailInputRegis placeholder="commitcomunity@gmail.com"></S.EmailInputRegis>
          )}

          {action === "Login" ? (
            <S.TextPass>Password</S.TextPass>
          ) : (
            <S.none></S.none>
          )}

          {action === "Login" ? (
            <S.PassInput>
              <input type="password" />
            </S.PassInput>
          ) : (
            <S.none></S.none>
          )}

          {action === "Login" ? (
            <S.Forgot>
              <a href="/RegisterForm">Forgot Password?</a>
            </S.Forgot>
          ) : (
            <S.none></S.none>
          )}

          {action === "Login" ? (
            <S.none></S.none>
          ) : (
            <S.CheckTermRegis>
              <input type="checkbox" /> <b>Term of Use</b> and <b>Condition</b>{" "}
              & <b>Privacy Policy.</b>
            </S.CheckTermRegis>
          )}

          {action === "Login" ? (
            <S.CheckRemember>
              <input type="checkbox" /> Remember Me.
            </S.CheckRemember>
          ) : (
            <S.none></S.none>
          )}
        </S.RightForm>
        <S.RightFoot>
          {action === "Login" ? (
            <S.BtnContineu>CONTINEU</S.BtnContineu>
          ) : (
            <S.BtnContineuRegis>CONTINEU</S.BtnContineuRegis>
          )}
        </S.RightFoot>
        <S.RightMiddle>
          {action === "Login" ? (
            <S.TextOr>
              ------------------------OR------------------------
            </S.TextOr>
          ) : (
            <S.none></S.none>
          )}

          {action === "Login" ? (
            <S.BtnLginGG>
              <img src={Group} alt="" />
              Login With Google
            </S.BtnLginGG>
          ) : (
            <S.none></S.none>
          )}
        </S.RightMiddle>
      </S.ContainetRight>
    </S.Container>
  );
};

export default LoginPageForm;
