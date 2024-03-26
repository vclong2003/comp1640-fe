import * as S from "./NewRegister.styled";
import image from "../../assets/images/login-background.png";
import RegisterForm from "./RegisterForm/RegisterForm";

const NewRegister = () => {
  return (
    <S.Container>
      <S.Background src={image}></S.Background>
      <S.Form>
        <S.Title>Welcome to register !</S.Title>
        <S.Description>Please enter your email to cotinue</S.Description>
        <RegisterForm />
      </S.Form>
    </S.Container>
  );
};

export default NewRegister;
