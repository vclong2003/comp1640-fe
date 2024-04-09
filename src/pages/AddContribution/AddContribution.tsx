import TitlePage from "./TitlePage/TitlePage";
import FormPage from "./FormPage/FormPage";
import * as S from "./AddContribution.styled";
import Container from "@components/Container/Container";

export default function AddContribution() {
  return (
    <Container>
      <S.Container>
        <S.TopPage>
          <TitlePage />
        </S.TopPage>
        <S.BottomPage>
          <FormPage />
        </S.BottomPage>
      </S.Container>
    </Container>
  );
}
