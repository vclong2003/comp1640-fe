import { useSelector } from "react-redux";
import * as S from "./LandingPage.styled";
import { RootState } from "../../store";
import { Navigate } from "react-router";
import { Link } from "react-router-dom";
export default function LandingPage() {
  const { user } = useSelector((state: RootState) => state.userState);

  return (
    <S.Container>
      {user && <Navigate to="/home" />}
      <S.Title>ALHKQ</S.Title>
      <S.Button>
        <Link to="/login">
          <S.Login>
            <S.BtnLogin>Login</S.BtnLogin>
          </S.Login>
        </Link>
        <Link to="/register">
          <S.Register>
            <S.BtnRegister>Register</S.BtnRegister>
          </S.Register>
        </Link>
      </S.Button>
    </S.Container>
  );
}
