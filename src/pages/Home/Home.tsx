import React from "react";
import AuthorizedPage from "../../components/Authorized/AuthorizedPage";
import * as S from "./Home.styled";
import FeaturedContribution from "./FeaturedContribution/FeaturedContribution";
import SecondaryContribution from "./SecondaryContribution/SecondaryContribution";
import PopularContributions from "./PopularContributions/PopularContributions";

const Home = () => {
  // add auth page for testing
  return (
    <AuthorizedPage>
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
      </S.Container>
    </AuthorizedPage>
  );
};

export default Home;
