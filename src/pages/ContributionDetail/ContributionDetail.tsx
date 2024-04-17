import Container from "@components/Container/Container";
import * as S from "./ContributionDetail.styled";
import LeftDetailPage from "./LeftDetailPage/LeftDetailPage";
import RightDetailPage from "./RightDetailPage/RightDetailPage";
import { useEffect, useState } from "react";
import { IContribution } from "@interfaces/contribution.interfaces";
import { useNavigate, useParams } from "react-router-dom";
import service from "@service/contribution";
import BottomDetailPage from "./BottomDetailPage/BottomDetailPage";

export default function ContributionDetail() {
  const navigate = useNavigate();
  const { contributionId } = useParams();
  const [contribution, setContribtion] = useState<IContribution>();

  useEffect(() => {
    if (!contributionId) return;
    service
      .findContributionById({ contributionId })
      .then((res) => setContribtion(res));
  }, [contributionId]);

  const like = () => {
    if (!contribution) return;
    if (contribution.is_liked) return;
    service.likeContribution({ contributionId: contribution._id }).then(() =>
      setContribtion({
        ...contribution,
        is_liked: true,
        likes: contribution.likes + 1,
      }),
    );
  };

  const publish = () => {
    if (!contribution) return;
    service
      .publishContribution({ contributionId: contribution._id })
      .then(() => setContribtion({ ...contribution, is_publication: true }));
  };

  const deleteContribution = () => {
    if (!contribution) return;
    service
      .deleteContribution({ _id: contribution._id })
      .then(() => navigate(-1));
  };

  return (
    <Container>
      <S.Container>
        <S.TopContainer>
          <S.Left>
            {contribution && (
              <LeftDetailPage contribution={contribution} onLike={like} />
            )}
          </S.Left>
          <S.Right>
            {contribution && <RightDetailPage contribution={contribution} />}
          </S.Right>
        </S.TopContainer>
        <S.BottomContainer>
          {contribution && (
            <BottomDetailPage
              onPublish={publish}
              onDelete={deleteContribution}
              contribution={contribution}
            />
          )}
        </S.BottomContainer>
      </S.Container>
    </Container>
  );
}
