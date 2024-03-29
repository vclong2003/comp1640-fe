import * as S from "./Home.styled";
import FeaturedContribution from "./FeaturedContribution/FeaturedContribution";
import SecondaryContribution from "./SecondaryContribution/SecondaryContribution";
import PopularContributions from "./PopularContributions/PopularContributions";
import Container from "@components/Container/Container";
import ContributionList from "./ContributionList/ContributionList";

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
        <ContributionList />
      </S.Container>
    </Container>
  );
};

export default Home;
