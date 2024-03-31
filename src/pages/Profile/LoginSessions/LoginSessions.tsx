import { useDispatch, useSelector } from "react-redux";
import * as S from "./LoginSessions.styled";
import SessionItem from "./SessionItem/SessionItem";
import { AppDispatch, RootState } from "@store/index";
import { useEffect } from "react";
import { findLoginSessions } from "@store/user/userActions";

export default function LoginSessions() {
  const { loginSessions } = useSelector((state: RootState) => state.userState);
  const dispatch = useDispatch<AppDispatch>();

  useEffect(() => {
    dispatch(findLoginSessions({}));
  }, [dispatch]);

  return (
    <S.LoginSessions>
      <S.Title>Logged in devices</S.Title>
      {loginSessions.map((session) => (
        <SessionItem key={session._id} LoginSession={session} />
      ))}
    </S.LoginSessions>
  );
}
