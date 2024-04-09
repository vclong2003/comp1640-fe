import * as S from "./Home.styled";
import FeaturedContribution from "./FeaturedContribution/FeaturedContribution";
import SecondaryContribution from "./SecondaryContribution/SecondaryContribution";
import PopularContributions from "./PopularContributions/PopularContributions";
import Container from "@components/Container/Container";
import ContributionList from "./ContributionList/ContributionList";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "@store/index";
import { useEffect } from "react";
import { findContributions } from "@store/contribution";

export default function Home() {
  const { contributions } = useSelector(
    (state: RootState) => state.contributionState,
  );
  const dispatch = useDispatch<AppDispatch>();

  useEffect(() => {
    dispatch(findContributions({ is_publication: true, popular: true }));
  }, [dispatch]);

  return (
    <Container>
      <S.Container>
        <S.Banner>
          <S.FeaturedContainer>
            {contributions.length > 0 && (
              <FeaturedContribution contribution={contributions[0]} />
            )}
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
}
