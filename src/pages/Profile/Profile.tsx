import * as S from "./Profile.styled";
import Container from "@components/Container/Container";
import ProfileInfoForm from "./ProfileInfoForm/ProfileInfoForm";
import Avatar from "@components/Avatar/Avatar";
import ChangePassword from "./ChangePassword/ChangePassword";
import LoginSessions from "./LoginSessions/LoginSessions";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "@store/index";
import { FaShieldDog } from "react-icons/fa6";
import Popup from "@components/Popup/Popup";
import ImageCropper from "@components/ImageCropper/ImageCropper";
import { useState } from "react";
import { notifySuccess } from "@utils/notification.utils";
import { updateUser } from "@store/user";

export default function Profile() {
  const { user } = useSelector((state: RootState) => state.userState);
  const dispatch = useDispatch<AppDispatch>();

  const [showImageCropper, setShowImageCropper] = useState(false);
  const openImageCropper = () => setShowImageCropper(true);
  const closeImageCropper = () => setShowImageCropper(false);
  const updateAvatar = (file: File) =>
    dispatch(updateUser({ avatar: file }))
      .unwrap()
      .then(() => notifySuccess("Nice! Your avatar has been updated!"))
      .then(closeImageCropper);

  return (
    <Container>
      <S.Profile>
        <S.Title>My Profile</S.Title>
        <S.InfoContainer>
          <S.AvatarContainer>
            <Avatar
              onUpdateClick={openImageCropper}
              isUpdateable={true}
              imageUrl={user?.avatar_url}
            />
          </S.AvatarContainer>
          <Popup show={showImageCropper} onClose={closeImageCropper}>
            {showImageCropper && (
              <ImageCropper
                initialImageUrl={user?.avatar_url}
                onClose={closeImageCropper}
                onSave={updateAvatar}
              />
            )}
          </Popup>
          <ProfileInfoForm />
        </S.InfoContainer>
        <S.SecurityContainer>
          <S.SecurityTitle>
            Security
            <FaShieldDog />
          </S.SecurityTitle>
          <ChangePassword />
          <S.LogoutFromAllDevicesBtn>
            Logout from all devices
          </S.LogoutFromAllDevicesBtn>
          <LoginSessions />
        </S.SecurityContainer>
      </S.Profile>
    </Container>
  );
}
