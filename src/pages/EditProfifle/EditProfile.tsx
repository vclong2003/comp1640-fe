import React from "react";
import * as S from "./EditProfile.styled";
import MiddleForm from "./MiddleForm/MiddleForm";
import BottomPage from "./BottomPage/BottomPage";
import AuthorizedPage from "../../components/Authorized/AuthorizedPage";

const EditProfile = () => {
  return (
    <AuthorizedPage>
      <S.Container>
        <S.Top>Edit Profile</S.Top>
        <S.Middle>
          <MiddleForm />
        </S.Middle>
        <S.Bottom>
          <BottomPage />
        </S.Bottom>
      </S.Container>
    </AuthorizedPage>
  );
};

export default EditProfile;
