import * as S from "./Profile.styled";
import Container from "../../components/Container/Container";
import ProfileInfoForm from "./ProfileInfoForm/ProfileInfoForm";
import Avatar from "@components/Avatar/Avatar";

export default function Profile() {
  return (
    <Container>
      <S.Profile>
        <S.Title>My Profile</S.Title>
        <S.Left>
          <S.AvatarContainer>
            <Avatar isUpdateable={true} />
          </S.AvatarContainer>
          <ProfileInfoForm />
        </S.Left>
        <S.Right>//Avatar</S.Right>
      </S.Profile>
    </Container>
  );
}
