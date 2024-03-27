import * as S from "./TitlePage.styled";
import Add from "../../../assets/images/addcontributions.png";

const TitlePage = () => {
  return (
    <S.Container>
      <S.Title>Submit Contributions</S.Title>
      <S.Description>Fill in the required details</S.Description>
      <S.Image>
        <img src={Add} alt="" />
      </S.Image>
    </S.Container>
  );
};

export default TitlePage;
