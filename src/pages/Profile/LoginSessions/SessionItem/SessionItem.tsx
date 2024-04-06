import { toLocaleDateTime } from "@utils/date.utils";
import * as S from "./SessionItem.styled";
import { ILoginSession } from "@interfaces/user.interfaces";
import { useDispatch } from "react-redux";
import { AppDispatch } from "@store/index";
import { notifyInfo } from "@utils/notification.utils";
import { removeLoginSession } from "@store/user";
import { useState } from "react";

interface ILoginSessionProps {
  LoginSession: ILoginSession;
}
export default function SessionItem({ LoginSession }: ILoginSessionProps) {
  const { browser, date, isCurrentDevice } = LoginSession;

  const [loading, setLoading] = useState(false);
  const dispatch = useDispatch<AppDispatch>();

  const logutDevice = () => {
    if (loading) return;
    setLoading(true);
    dispatch(removeLoginSession({ sessionId: LoginSession._id }))
      .unwrap()
      .then(() => notifyInfo(`Logged out from ${browser}`))
      .finally(() => setLoading(false));
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
