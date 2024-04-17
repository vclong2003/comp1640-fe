import { useSelector } from "react-redux";
import * as S from "./BottomDetailPage.styled";
import { RootState } from "@store/index";
import { ERole } from "@interfaces/user.interfaces";
import { IContribution } from "@interfaces/contribution.interfaces";

interface IBottomDetailPageProps {
  contribution: IContribution;
  onPublish: () => void;
  onDelete: () => void;
}

export default function BottomDetailPage({
  contribution,
  onPublish,
  onDelete,
}: IBottomDetailPageProps) {
  const { user } = useSelector((state: RootState) => state.userState);

  const handlePublish = () => {
    const shouldPublish = window.confirm("Are you sure you want to publish?");
    if (shouldPublish) {
      onPublish();
    }
  };
  const handleDelete = () => {
    const shouldDelete = window.confirm("Are you sure you want to delete?");
    if (shouldDelete) {
      onDelete();
    }
  };

  return (
    <S.Container>
      {user?.role === ERole.MarketingCoordinator &&
        !contribution.is_publication && (
          <S.BtnPublish onClick={handlePublish}>Publish</S.BtnPublish>
        )}
      {(user?.role === ERole.MarketingCoordinator ||
        user?._id === contribution.author._id) && (
        <S.BtnPublish onClick={handleDelete}>Delete</S.BtnPublish>
      )}
    </S.Container>
  );
}
