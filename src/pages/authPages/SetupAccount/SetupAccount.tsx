import * as S from "./SetupAccount.styled";
import Setup from "../../../assets/images/Setup.png";
import SetupForm from "./SetupForm/SetupForm";

const SetupAccount = () => {
  return (
    <S.Container>
      <S.Left>
        <img src={Setup} alt="" />
      </S.Left>
      <S.Right>
        <SetupForm />
      </S.Right>
    </S.Container>
  );
};

export default SetupAccount;
