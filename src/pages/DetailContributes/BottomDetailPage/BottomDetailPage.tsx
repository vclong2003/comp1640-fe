import * as S from "./BottomDetailPage.styled";
const BottomDetailPage = () => {
  return (
    <S.Container>
      <S.Cancel>
        <S.ButtonCancel>Cancel</S.ButtonCancel>
      </S.Cancel>
      <S.Save>
        <S.ButtonSave>Save</S.ButtonSave>
      </S.Save>
    </S.Container>
  );
};

export default BottomDetailPage;
