import { useSelector } from "react-redux";
import * as S from "./BottomDetailPage.styled";
import { RootState } from "@store/index";
import { ERole } from "@interfaces/user.interfaces";
import { IContribution } from "@interfaces/contribution.interfaces";

interface IBottomDetailPageProps {
  contribution: IContribution;
}
export default function BottomDetailPage({
  contribution,
}: IBottomDetailPageProps) {
  const { user } = useSelector((state: RootState) => state.userState);
  console.log(contribution);
  return (
    user?.role === ERole.MarketingCoordinator &&
    !contribution.is_publication && (
      <S.Container>
        <S.BtnPublish>Publish</S.BtnPublish>
      </S.Container>
    )
  );
}
