import TitlePage from "./TitlePage/TitlePage";
import FormPage from "./FormPage/FormPage";
import * as S from "./AddContribution.styled";

export default function AddContribution() {
  return (
    <S.Container>
      <S.TopPage>
        <TitlePage />
      </S.TopPage>
      <S.BottomPage>
        <FormPage />
      </S.BottomPage>
    </S.Container>
  );
}
