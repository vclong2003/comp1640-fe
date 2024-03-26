import { useSelector } from "react-redux";
import * as S from "./LandingPage.styled";
import { RootState } from "../../store";
import { Navigate } from "react-router";

export default function LandingPage() {
  const { user } = useSelector((state: RootState) => state.userState);

  return (
    <S.Container>
      {user && <Navigate to="/home" />}
      <S.Title>Team name here</S.Title>
      <S.Button>
        <S.Register>
          <S.BtnRegister>Register</S.BtnRegister>
        </S.Register>
        <S.Login>
          <S.BtnLogin>Login</S.BtnLogin>
        </S.Login>
      </S.Button>
    </S.Container>
  );
}
