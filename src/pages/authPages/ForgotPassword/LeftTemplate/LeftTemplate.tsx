import { useState } from "react";
import * as S from "./LeftTemplate.styled";
import Popup from "../../../../components/Popup/Popup";

const LeftTemplate = () => {
  const [showPopup, setShowPopup] = useState(false);

  return (
    <S.Container>
      <Popup show={showPopup} onClose={() => setShowPopup(false)}>
        <div>asdasdasd</div>
      </Popup>
      <S.TitleTop>FORGET PASSWORD</S.TitleTop>
      <S.Center>
        <S.Middle>
          <S.MiddleTop>
            <S.Description>
              Type in your registered email address to reset password
            </S.Description>
            <S.Description2>Enter email address</S.Description2>
          </S.MiddleTop>
          <S.MiddleBottom>
            <S.InputEmail placeholder="Email Address *"></S.InputEmail>
            <S.Next>
              <S.BtnNext onClick={() => setShowPopup(true)}>Next</S.BtnNext>
            </S.Next>
          </S.MiddleBottom>
        </S.Middle>
      </S.Center>
      <S.Bottom>
        <S.BtnBack>Back To Login</S.BtnBack>
      </S.Bottom>
    </S.Container>
  );
};

export default LeftTemplate;
