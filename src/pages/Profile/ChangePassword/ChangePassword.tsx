import Popup from "@components/Popup/Popup";
import * as S from "./ChangePassword.styled";
import { useState } from "react";
import ChangePwdForm from "./ChangePwdForm/ChangePwdForm";

export default function ChangePassword() {
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  const openPopup = () => setIsPopupOpen(true);
  const closePopup = () => setIsPopupOpen(false);

  return (
    <S.ChangePassword>
      <Popup show={isPopupOpen} onClose={closePopup}>
        <ChangePwdForm onCancel={closePopup} onDone={closePopup} />
      </Popup>
      <S.ChangePwdButton onClick={openPopup}>Change Password</S.ChangePwdButton>
    </S.ChangePassword>
  );
}
