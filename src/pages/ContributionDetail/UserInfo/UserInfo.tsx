import Avatar from "@components/Avatar/Avatar";
import * as S from "./UserInfo.styled";

interface IUserInfoProps {
  name: string;
  avatar_url: string;
  additionalInfo: string;
}

const UserInfo = ({ name, avatar_url, additionalInfo }: IUserInfoProps) => {
  return (
    <S.Container>
      <S.AvatarContainer>
        <Avatar imageUrl={avatar_url} />
      </S.AvatarContainer>
      <S.InfoContainer>
        <S.NameUser>{name}</S.NameUser>
        <S.Date>{additionalInfo}</S.Date>
      </S.InfoContainer>
    </S.Container>
  );
};

export default UserInfo;
