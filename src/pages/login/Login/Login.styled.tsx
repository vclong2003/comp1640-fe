import styled from "styled-components";

export const ContainerRight = styled.div`
flex: 2;
`;

export const RightForm = styled.div`
display: flex;
  flex-direction: column;
  gap: 10px;
  margin-top: 20px;
`;

export const Description = styled.div`
font-size: 60px;
  font-weight: bold;
`;

export const Description2 = styled.div`
font-size: 20px;
`;

export const TextEmail = styled.div`
margin-top: var(--s-5);
  font-size: 30px;
  font-family: Inter;
  font-weight: bold;
  color: #323a46;
`;

export const EmailInput = styled.input`
width: 70%;
  height: 28px;
  padding: var(--s-5);
  font-size: 18px;
  border: 1px solid rgba(0, 0, 0, 0.2);
  border-radius: 5px;
  &:hover {
    background-color: #dedede;
`;

export const TextPass = styled.div`
margin-top: 20px;
  font-size: 30px;
  font-family: Inter;
  font-weight: bold;
  color: #323a46;
`;

export const PassInput = styled.div`
input {
    padding: var(--s-5);
    height: 28px;
    width: 70%;
    font-size: 18px;
    border: 1px solid rgba(0, 0, 0, 0.2);
    border-radius: 5px;
    &:hover {
      background-color: #dedede;
    }
  }
`;

export const Forgot = styled.div`
a {
    text-decoration: none;
    color: #1c1c1c;
    &:hover {
      text-decoration: underline;
    }
  }
`;

export const CheckRemember = styled.div`
margin-top: 10px;
  font-size: 20px;
  input {
    width: 20px;
    height: 18px;
    cursor: pointer;
  }
`;

export const RightFoot = styled.div`
margin-top: 80px;
  display: flex;
  justify-content: center;
  text-align: center;
`;

export const BtnContineu = styled.button`
width: 500px;
  height: 40px;
  border: none;
  font-size: 18px;
  border-radius: 5px;
  background-color: #f2ba1d;
  cursor: pointer;
  font-family: JetBrains Mono;
  color: white;
  &:hover {
    background-color: rgba(238, 206, 62, 0.5);
  }
`;

export const RightMiddle = styled.div`
display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 20px;
`;

export const TextOr = styled.div``;

export const BtnLginGG = styled.button`
height: 40px;
  border-radius: 5px;
  cursor: pointer;
  font-weight: bold;
  background-color: white;
  font-family: JetBrains Mono;
  font-size: 18px;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 500px;
  border: 1px solid black;
  margin-top: 10px;
  &:hover {
    background-color: #dedede;
  }
  img {
    width: 18px;
    height: 18px;
    margin-right: 20px;
  }
`;