import * as S from "./Login.styled";
import BackGround from "../../../assets/images/login-background.png";
import LoginForm from "./LoginForm/LoginForm";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../../../store";
import { ILoginPayload } from "../../../interfaces/user.interfaces";
import { login } from "../../../store/slices/userActions";
import { Navigate, useSearchParams } from "react-router-dom";

export default function Login() {
  const { user } = useSelector((state: RootState) => state.userState);
  const dispatch = useDispatch<AppDispatch>();

  const [searchParams] = useSearchParams();

  const onLogin = (values: ILoginPayload) => {
    dispatch(login(values));
  };

  return (
    <S.Container>
      {user && <Navigate to={searchParams.get("redirect") || "/"} />}
      <S.Background>
        <S.Image src={BackGround}></S.Image>
      </S.Background>
      <S.RightContent>
        <S.Title>Hey, Welcome Back!</S.Title>
        <S.Description>We are very happy to see you back!</S.Description>
        <LoginForm onSubmit={onLogin} />
      </S.RightContent>
    </S.Container>
  );
}
