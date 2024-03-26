import * as S from "./Home.styled";
import FeaturedContribution from "./FeaturedContribution/FeaturedContribution";
import SecondaryContribution from "./SecondaryContribution/SecondaryContribution";
import PopularContributions from "./PopularContributions/PopularContributions";
import PhotoContributions from "./PhotoContributions/PhotoContributions";
import Container from "../../components/Container/Container";

const Home = () => {
  return (
    <Container>
      <S.Container>
        <S.Banner>
          <S.FeaturedContainer>
            <FeaturedContribution />
          </S.FeaturedContainer>
          <S.SecondaryContainer>
            <SecondaryContribution />
          </S.SecondaryContainer>
        </S.Banner>
        <PopularContributions />
        <PhotoContributions />
      </S.Container>
    </Container>
  );
};

export default Home;
