import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  padding: var(--s-20) var(--s-30) var(--s-5) var(--s-1);
`;

export const Title = styled.div`
  font-size: 50px;
`;

export const Description = styled.div`
  a {
    text-decoration: none;
    color: #1c1c1c;
    font-size: 20px;
    &:hover {
      text-decoration: underline;
      color: var(--blue);
    }
  }
`;

export const Center = styled.div`
  display: flex;
  flex-direction: row;
  gap: var(--s-6);
`;

export const CenterLeft = styled.div`
  flex: 6;
  display: flex;
  flex-direction: column;
  row-gap: var(--s-4);
`;

export const CenterRight = styled.div`
  flex: 6;
  display: flex;
  flex-direction: column;
  row-gap: var(--s-4);
`;

export const Input = styled.input`
  padding: var(--s-5) var(--s-5);
  font-size: 18px;
  border: 1px solid rgba(0, 0, 0, 0.2);
  border-radius: 5px;
  box-shadow: var(--shadow-xl);
  width: 100%;
  &:hover {
    background-color: #dedede;
  }
`;

export const Input4 = styled.div`
  display: flex;
  flex-direction: row;
  gap: 20px;
  font-size: 20px;
  input {
    font-size: 20px;
  }
`;

export const Input5 = styled.div`
  input {
    padding: var(--s-5) var(--s-5);
    font-size: 18px;
    width: 100%;
    border: 1px solid rgba(0, 0, 0, 0.2);
    border-radius: 5px;
    box-shadow: var(--shadow-xl);
    &:hover {
      background-color: #dedede;
    }
  }
`;

export const CheckTerm = styled.div`
  display: flex;
  flex-direction: row;
  gap: 10px;
  margin-top: var(--s-8);
  font-size: 20px;
  color: var(--blue);
  input {
    cursor: pointer;
  }
`;

export const Register = styled.div`
  display: flex;
  justify-content: flex-end;
`;

export const BtnRegister = styled.button`
  padding: var(--s-4) var(--s-10);
  background-color: #f2ba1d;
  color: black;
  font-size: 20px;
  cursor: pointer;
  border-radius: var(--s-4);
  &:hover {
    background-color: rgba(226, 190, 103, 0.5);
  }
`;
