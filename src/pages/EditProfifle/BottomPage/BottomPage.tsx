import * as S from "./BottomPage.styled";

const BottomPage = () => {
  return (
    <S.Container>
      <S.Cancel>
        <S.BtnCancel>Cancel</S.BtnCancel>
      </S.Cancel>
      <S.Save>
        <S.BtnSave>Save</S.BtnSave>
      </S.Save>
    </S.Container>
  );
};

export default BottomPage;
