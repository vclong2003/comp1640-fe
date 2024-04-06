import Container from "@components/Container/Container";
import * as S from "./ContributionDetail.styled";
import LeftDetailPage from "./LeftDetailPage/LeftDetailPage";
import RightDetailPage from "./RightDetailPage/RightDetailPage";
import { useEffect, useState } from "react";
import { IContribution } from "@interfaces/contribution.interfaces";
import { useParams } from "react-router-dom";
import service from "@service/contribution";

export default function ContributionDetail() {
  const { contributionId } = useParams();
  const [contribution, setContribtion] = useState<IContribution>();

  useEffect(() => {
    if (!contributionId) return;
    service
      .findContributionById({ contributionId })
      .then((res) => setContribtion(res));
  }, [contributionId]);

  console.log(contribution);

  return (
    <Container>
      <S.Container>
        <S.TopContainer>
          <S.Left>
            {contribution && <LeftDetailPage contribution={contribution} />}
          </S.Left>
          <S.Right>
            <RightDetailPage />
          </S.Right>
        </S.TopContainer>
      </S.Container>
    </Container>
  );
}
