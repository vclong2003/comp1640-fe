import { useSelector } from "react-redux";
import * as S from "./BottomDetailPage.styled";
import { RootState } from "@store/index";
import { ERole } from "@interfaces/user.interfaces";
import { IContribution } from "@interfaces/contribution.interfaces";
// import { notifySuccess } from "@utils/notification.utils";

interface IBottomDetailPageProps {
  contribution: IContribution;
  onPublish: () => void;
}
export default function BottomDetailPage({
  contribution,
  onPublish,
}: IBottomDetailPageProps) {
  const { user } = useSelector((state: RootState) => state.userState);

  return (
    user?.role === ERole.MarketingCoordinator &&
    !contribution.is_publication && (
      <S.Container>
        <S.BtnPublish onClick={onPublish}>Publish</S.BtnPublish>
      </S.Container>
    )
  );
}
