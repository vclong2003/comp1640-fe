import * as S from "./Profile.styled";
import Container from "../../components/Container/Container";
import ProfileInfoForm from "./ProfileInfoForm/ProfileInfoForm";

export default function Profile() {
  return (
    <Container>
      <S.Profile>
        <S.Title>My Profile</S.Title>
        <S.FormContainer>
          <ProfileInfoForm />
        </S.FormContainer>
        <S.AvatarContainer>Avatar</S.AvatarContainer>
      </S.Profile>
    </Container>
  );
}
