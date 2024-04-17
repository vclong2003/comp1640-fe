import { useSelector } from "react-redux";
import * as S from "./BottomDetailPage.styled";
import { RootState } from "@store/index";
import { ERole } from "@interfaces/user.interfaces";
import { IContribution } from "@interfaces/contribution.interfaces";


interface IBottomDetailPageProps {
  contribution: IContribution;
  onPublish: () => void;
}

export default function BottomDetailPage({
  contribution,
  onPublish,
}: IBottomDetailPageProps) {
  const { user } = useSelector((state: RootState) => state.userState);

  const handlePublish = () => {
    const shouldPublish = window.confirm("Are you sure you want to publish?");
    if (shouldPublish) {
      onPublish();
    }
  };

  return (
    user?.role === ERole.MarketingCoordinator &&
    !contribution.is_publication && (
      <S.Container>
        <S.BtnPublish onClick={handlePublish}>Publish</S.BtnPublish>
      </S.Container>
    )
  );
}
