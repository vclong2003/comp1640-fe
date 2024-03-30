import * as S from "./Profile.styled";
import Container from "@components/Container/Container";
import ProfileInfoForm from "./ProfileInfoForm/ProfileInfoForm";
import Avatar from "@components/Avatar/Avatar";
import ChangePassword from "./ChangePassword/ChangePassword";

export default function Profile() {
  return (
    <Container>
      <S.Profile>
        <S.Title>My Profile</S.Title>
        <S.InfoContainer>
          <S.AvatarContainer>
            <Avatar isUpdateable={true} />
          </S.AvatarContainer>
          <ProfileInfoForm />
        </S.InfoContainer>
        <S.AuthContainer>
          <S.SecurityTitle>Security</S.SecurityTitle>
          <ChangePassword />
          <S.LogoutFromAllDevicesBtn>
            Logout from all devices
          </S.LogoutFromAllDevicesBtn>
        </S.AuthContainer>
      </S.Profile>
    </Container>
  );
}
