import * as S from "./SetupAccount.styled";
import Setup from "@assets/images/Setup.png";
import SetupForm from "./SetupForm/SetupForm";
import userService from "@service/api/user";
import { useNavigate, useSearchParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { notifySuccess } from "@utils/notification.utils";
import { ISetupAccountPayload } from "@interfaces/user.interfaces";

const SetupAccount = () => {
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();

  const [token, setToken] = useState("");
  const [email, setEmail] = useState("");

  useEffect(() => {
    const token = searchParams.get("token");
    if (!token) {
      navigate("/");
      return;
    }
    setToken(token);
  }, [searchParams, navigate]);

  useEffect(() => {
    if (!token) return;
    userService
      .verifyRegisterToken({ token })
      .then((res) => {
        setEmail(res.email);
      })
      .catch(() => navigate("/"));
  }, [token, navigate]);

  const handleSubmission = async (values: Partial<ISetupAccountPayload>) => {
    if (!token) return;
    userService
      .setupAccount({ ...values, token } as ISetupAccountPayload)
      .then(() =>
        notifySuccess("Account setup successfully, you can login now!"),
      )
      .then(() => navigate("/login"));
  };

  return (
    <S.Container>
      <S.Left>
        <img src={Setup} alt="" />
      </S.Left>
      <S.Right>
        <SetupForm email={email} onSubmit={handleSubmission} />
      </S.Right>
    </S.Container>
  );
};

export default SetupAccount;
