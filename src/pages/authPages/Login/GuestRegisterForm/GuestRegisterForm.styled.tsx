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

export const RegisDescription = styled.div`
  font-size: 60px;
  font-weight: bold;
`;

export const RegisDescription2 = styled.div`
  font-size: 20px;
`;

export const TextEmailRegis = styled.div`
  margin-top: 20px;
  font-size: 30px;
  font-family: Inter;
  font-weight: bold;
  color: #323a46;
`;

export const TextFill = styled.div`
  margin-top: 10px;
  color: #b0b0b0;
`;

export const EmailInputRegis = styled.input`
  width: 70%;
  height: 28px;
  padding: var(--s-5);
  font-size: 18px;
  border: 1px solid rgba(0, 0, 0, 0.2);
  border-radius: 5px;
  &:hover {
    background-color: #dedede;
  }
  placeholder {
    font-family: JetBrains Mono;
  }
`;

export const CheckTermRegis = styled.div`
  margin-top: 20px;
  font-size: 20px;
  color: #7e8b9e;
  input {
    width: 20px;
    height: 18px;
    cursor: pointer;
  }
  b {
    color: #236192;
  }
`;

export const RightFoot = styled.div`
  margin-top: 80px;
  display: flex;
  justify-content: center;
  text-align: center;
`;

export const BtnContineuRegis = styled.button`
  width: 500px;
  height: 40px;
  margin-right: 20px;
  border: none;
  border-radius: 5px;
  background-color: #f2ba1d;
  cursor: pointer;
  font-size: 18px;
  font-family: JetBrains Mono;
  color: white;
  &:hover {
    background-color: rgba(238, 206, 62, 0.5);
  }
`;
