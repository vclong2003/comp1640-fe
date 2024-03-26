import * as S from "./Login.styled";
import BackGround from "../../../assets/images/login-background.png";
import LoginForm from "./LoginForm/LoginForm";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../../../store";
import { ILoginPayload } from "../../../interfaces/user.interfaces";
import { login } from "../../../store/slices/userActions";

export default function Login() {
  const { user } = useSelector((state: RootState) => state.userState);
  const dispatch = useDispatch<AppDispatch>();

  const onLogin = (values: ILoginPayload) => {
    dispatch(login(values));
  };

  return (
    <S.Container>
      <S.Background>
        <S.Image src={BackGround}></S.Image>
      </S.Background>
      <S.FormLogin>
        <LoginForm onSubmit={onLogin} />
      </S.FormLogin>
    </S.Container>
  );
}
