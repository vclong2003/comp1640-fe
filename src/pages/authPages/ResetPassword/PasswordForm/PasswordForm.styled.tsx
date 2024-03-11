import styled from "styled-components";

export const Container = styled.div`
  dispaly: flex;
  flex-direction column;
  gap: 30px;
`;

export const Title = styled.div`
  color: black;
  font-size: 80px;
  font-weight: bold;
  font-style: italic;
`;

export const Center = styled.div`
  border: 1px solid black;
  width: 100%;
  background-color: White;
  border-radius: 20px;
  border: none;
`;

export const Form = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  padding: var(--s-8) var(--s-10);
  box-shadow: var(--shadow-2xl);
`;

export const Text = styled.div`
  font-size: 20px;
  margin-top: var(--s-6);
`;

export const Input = styled.div`
  border: 1px solid rgba(0, 0, 0, 0.2);
  border-radius: 10px;
  padding: var(--s-2) var(--s-1);
  input {
    width: 100%;
    padding: var(--s-2);
    font-size: 20px;
  }
  &:hover {
    background-color: #dedede;
  }
`;

export const ButtonReset = styled.div`
  justify-content: flex-end;
  display: flex;
`;

export const BtnReset = styled.button`
  padding: var(--s-5) var(--s-14);
  background-color: #f2ba1d;
  border: none;
  color: black;
  font-size: 20px;
  cursor: pointer;
  border-radius: 10px;
  &:hover {
    background-color: rgba(226, 190, 103, 0.5);
  }
`;

export const Bottom = styled.div`
  display: flex;
  justify-content: center;
  margin-top: var(--s-20);
  margin-bottom: var(--s-10);
`;

export const BtnBack = styled.button`
  padding: var(--s-5) var(--s-30);
  font-size: 20px;
  border: none;
  border-radius: 10px;
  cursor: pointer;
  background-color: #66665d;
  color: white;
  box-shadow: var(--shadow-2xl);
  &:hover {
    background-color: rgba(131, 138, 138, 0.7);
  }
`;
