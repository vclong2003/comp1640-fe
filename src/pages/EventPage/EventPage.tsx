import React from "react";
import * as S from "./EventPage.styled";
import AuthorizedPage from "../../components/Authorized/AuthorizedPage";
import LeftContainer from "./leftContainer/LeftContainer";
import RightContainer from "./rightContainer/RightContainer";

const EventPage = () => {
  return (
    <AuthorizedPage>
      <S.Container>
        <S.LeftContainer>
          <LeftContainer />
        </S.LeftContainer>
        <S.RightContainer>
          <RightContainer />
        </S.RightContainer>
      </S.Container>
    </AuthorizedPage>
  );
};

export default EventPage;
