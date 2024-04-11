import * as S from "./Home.styled";
import FeaturedContribution from "./FeaturedContribution/FeaturedContribution";
import SecondaryContribution from "./SecondaryContribution/SecondaryContribution";
import PopularContributions from "./PopularContributions/PopularContributions";
import Container from "@components/Container/Container";
import ContributionList from "./ContributionList/ContributionList";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "@store/index";
import { useEffect, useState } from "react";
import { findContributions } from "@store/contribution";
import { IContribution } from "@interfaces/contribution.interfaces";
import { SIZES } from "@config/responsiveBreakpoints";

interface IContributionsMap {
  onBanner: IContribution[];
  onPopular: IContribution[];
  onList: IContribution[];
}

export default function Home() {
  const { contributions } = useSelector(
    (state: RootState) => state.contributionState,
  );
  const dispatch = useDispatch<AppDispatch>();
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const [contributionsMap, setContributionsMap] = useState<IContributionsMap>({
    onBanner: [],
    onPopular: [],
    onList: [],
  });

  const handleResize = () => {
    setWindowWidth(window.innerWidth);
  };

  useEffect(() => {
    dispatch(findContributions({ is_publication: true, popular: true }));
  }, [dispatch]);

  useEffect(() => {
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  useEffect(() => {
    if (windowWidth < Number(SIZES.DESKTOP)) {
      setContributionsMap({
        onBanner: contributions.slice(0, 1),
        onPopular: contributions.slice(1, 5),
        onList: contributions.slice(5),
      });
      return;
    }
    setContributionsMap({
      onBanner: contributions.slice(0, 2),
      onPopular: contributions.slice(2, 6),
      onList: contributions.slice(6),
    });
  }, [contributions, windowWidth]);

  return (
    <Container>
      <S.Container>
        <S.Banner>
          {contributionsMap.onBanner[0] && (
            <S.FeaturedContainer>
              <FeaturedContribution
                contribution={contributionsMap.onBanner[0]}
              />
            </S.FeaturedContainer>
          )}

          {contributionsMap.onBanner[1] && (
            <S.SecondaryContainer>
              <SecondaryContribution
                contribution={contributionsMap.onBanner[1]}
              />
            </S.SecondaryContainer>
          )}
        </S.Banner>
        <PopularContributions contributions={contributionsMap.onPopular} />
        <ContributionList contributions={contributionsMap.onList} />
      </S.Container>
    </Container>
  );
}
