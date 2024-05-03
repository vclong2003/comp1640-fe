import { useEffect, useState } from "react";
import * as S from "./EditContribution.styled";
import EditForm from "./EditForm/EditForm";
import { useNavigate, useParams } from "react-router";
import service from "@service/contribution";
import { IContribution } from "@interfaces/contribution.interfaces";
import { useSelector } from "react-redux";
import { RootState } from "@store/index";
import { ERole } from "@interfaces/user.interfaces";
import { notifyError } from "@utils/notification.utils";

export default function EditContribution() {
  const { contributionId } = useParams();
  const [contribution, setContribution] = useState<IContribution>();
  const { user } = useSelector((state: RootState) => state.userState);
  const navigate = useNavigate();

  useEffect(() => {
    if (!contributionId) return;
    service
      .findContributionById({ contributionId })
      .then((res) => setContribution(res));
  }, [contributionId]);

  useEffect(() => {
    if (!contribution) return;
    if (user?.role === ERole.MarketingCoordinator) {
      if (contribution?.faculty._id !== user?.faculty?._id) {
        notifyError("You don't have permission to edit this contribution");
        navigate("/");
      }
    } else {
      if (contribution?.author._id !== user?._id) {
        notifyError("You don't have permission to edit this contribution");
        navigate("/");
      }
    }
  }, [user, contribution, navigate]);
  return (
    <S.EditContribution>
      <S.Title>Edit contribution </S.Title>
      <S.Content>{contribution?.title}</S.Content>
      {contribution && <EditForm contribution={contribution} />}
    </S.EditContribution>
  );
}
