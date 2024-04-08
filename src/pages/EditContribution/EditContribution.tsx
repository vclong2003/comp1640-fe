import { useEffect, useState } from "react";
import * as S from "./EditContribution.styled";
import EditForm from "./EditForm/EditForm";
import { useParams } from "react-router";
import service from "@service/contribution";
import { IContribution } from "@interfaces/contribution.interfaces";

export default function EditContribution() {
  const { contributionId } = useParams();
  const [contribution, setContribution] = useState<IContribution>();

  useEffect(() => {
    if (!contributionId) return;
    service
      .findContributionById({ contributionId })
      .then((res) => setContribution(res));
  }, [contributionId]);

  return (
    <S.EditContribution>
      <div>Edit contribution {contribution?.title}</div>
      {contribution && <EditForm contribution={contribution} />}
    </S.EditContribution>
  );
}