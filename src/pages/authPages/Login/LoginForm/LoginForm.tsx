// import React, { FormEvent, useState } from "react";
import React, { useState } from "react";
import * as S from "./LoginForm.styled";
import Group from "../../../../assets/images/Group.png";
// import { useDispatch } from "react-redux";
// import { AppDispatch } from "../../../../store";
// import { login } from "../../../../store/slices/user";

const LoginForm = () => {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  const handleSubmitLogin = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    try {
      const response = await fetch("https://api.alhkq.live/auth/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password }),
      });

      if (!response.ok) {
        throw new Error("Đăng nhập không thành công");
      }

      const data = await response.json();

      // Kiểm tra xem dữ liệu có tồn tại không trước khi sử dụng
      if (!data || !data.token) {
        throw new Error("Dữ liệu trả về không hợp lệ");
      }

      // Lưu token vào localStorage
      localStorage.setItem("token", data.token);

      // Thực hiện hành động sau khi đăng nhập thành công, ví dụ: chuyển hướng trang
    } catch (error) {
      console.error("Đã xảy ra lỗi:");
    }
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
