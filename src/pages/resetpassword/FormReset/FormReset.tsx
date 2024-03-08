import React, { useState } from "react";
import * as S from "./FormReset.styled";
import Popup from "../../../components/Popup/Popup";

const FormReset = () => {
  const [showPopup, setShowPopup] = useState(false);

  return (
    <S.Container>
      <Popup show={showPopup} onClose={() => setShowPopup(false)}>
        <div>asdasdasd</div>
      </Popup>
      <S.Title>RESET PASSWORD</S.Title>
      <S.Center>
        <S.Form>
          <S.Text>New Password</S.Text>
          <S.Input>
            <input type="password" />
          </S.Input>
          <S.Text>Confirm New Password</S.Text>
          <S.Input>
            <input type="password" />
          </S.Input>
          <S.ButtonReset>
            <S.BtnReset onClick={() => setShowPopup(true)}>Reset</S.BtnReset>
          </S.ButtonReset>
        </S.Form>
      </S.Center>
      <S.Bottom>
        <S.BtnBack>Back to Login</S.BtnBack>
      </S.Bottom>
    </S.Container>
  );
};

export default FormReset;
