import * as S from "./NewLogin.styled";
import image from "../../assets/images/Other03.png";
import LoginForm from "./LoginForm/LoginForm";

const NewLogin = () => {
  return (
    <S.Container>
      <S.Background>
        <S.Image src={image}></S.Image>
      </S.Background>
      <S.FormLogin>
        <LoginForm />
      </S.FormLogin>
    </S.Container>
  );
};

export default NewLogin;
