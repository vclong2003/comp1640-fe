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

export const BtnLogin = styled.button`
  width: 240px;
  height: 36px;
  background-color: #df6a2e;
  border-radius: 24px;
  color: #fff;
  font-size: 14px;
  font-weight: bold;
  cursor: pointer;
  &:hover {
    color: #df6a2e;
    background-color: white;
  }
`;

export const BtnRegister = styled.button`
  width: 240px;
  height: 36px;
  background-color: rgba(0, 0, 0, 0.5);
  border-radius: 24px;
  color: #fff;
  font-size: 14px;
  font-weight: bold;
  cursor: pointer;
  &:hover {
    color: black;
    background-color: white;
  }
`;
