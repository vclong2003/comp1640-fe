import { toLocaleDateTime } from "@utils/date.utils";
import * as S from "./SessionItem.styled";
import { ILoginSession } from "@interfaces/user.interfaces";
import { useDispatch } from "react-redux";
import { AppDispatch } from "@store/index";
import { removeLoginSession } from "@store/userActions";
import { notifyInfo } from "@utils/notification.utils";

interface ILoginSessionProps {
  LoginSession: ILoginSession;
}
export default function SessionItem({ LoginSession }: ILoginSessionProps) {
  const { browser, date, isCurrentDevice } = LoginSession;

  const dispatch = useDispatch<AppDispatch>();

  const logutDevice = () => {
    dispatch(removeLoginSession({ sessionId: LoginSession._id }))
      .unwrap()
      .then(() => notifyInfo(`Logged out from ${browser}`));
  };

  return (
    <S.SessionItem>
      <S.DeviceName>
        {browser}
        {isCurrentDevice && (
          <S.CurrentDeviceBadge>Current Device</S.CurrentDeviceBadge>
        )}
      </S.DeviceName>
      <S.Date>{toLocaleDateTime(date)}</S.Date>
      <S.LogoutButton onClick={logutDevice} />
    </S.SessionItem>
  );
}
