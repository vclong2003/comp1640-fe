import styled from "styled-components";
import Landing from "../../assets/images/Landing.png";

export const Container = styled.div`
  background-image: url(${Landing});
  min-height: 100vh;
  background-repeat: no-repeat;
  background-size: cover;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: var(--s-10);
`;

export const Title = styled.div`
  font-size: 150px;
  color: #df6a2e;
  font-weight: bold;
`;

export const Button = styled.div`
  display: flex;
  flex-direction: column;
  gap: var(--s-5);
`;

export const Register = styled.div``;

export const Login = styled.div``;

export const BtnRegister = styled.button``;

export const BtnLogin = styled.button``;
