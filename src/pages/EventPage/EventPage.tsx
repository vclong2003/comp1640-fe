import React from "react";
import * as S from "./EventPage.styled";
import AuthorizedPage from "../../components/Authorized/AuthorizedPage";
import LeftContainer from "./leftContainer/LeftContainer";

const EventPage = () => {
  return (
    <AuthorizedPage>
      <S.Container>
        <S.LeftContainer>
          <LeftContainer />
        </S.LeftContainer>
        <S.RightContainer></S.RightContainer>
      </S.Container>
    </AuthorizedPage>
  );
};

export default EventPage;
