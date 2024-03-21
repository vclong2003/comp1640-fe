import TitlePage from "./TitlePage/TitlePage";
import FormPage from "./FormPage/FormPage";
import * as S from "./AddContributions.styled";
import AuthorizedPage from "../../../components/Authorized/AuthorizedPage";

const AddContributions = () => {
  return (
    <AuthorizedPage>
      <S.Container>
        <S.TopPage>
          <TitlePage />
        </S.TopPage>
        <S.BottomPage>
          <FormPage />
        </S.BottomPage>
      </S.Container>
    </AuthorizedPage>
  );
};

export default AddContributions;
