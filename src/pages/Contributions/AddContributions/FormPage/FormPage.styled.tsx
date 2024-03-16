import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  padding: var(--s-6) var(--s-20);
  gap: var(--s-10);
`;

export const ItemInput = styled.div``;

export const Text = styled.div`
  font-size: 30px;
  font-weight: bold;
`;

export const Input = styled.div`
  input {
    width: 100%;
    height: 28px;
    padding: var(--s-5);
    font-size: 18px;
    border: 1px solid rgba(0, 0, 0, 0.2);
    border-radius: 5px;
    justify-content: center;
    &:hover {
      background-color: #dedede;
    }
  }
  textarea {
    width: 100%;
    padding: var(--s-5);
    font-size: 18px;
    border: 1px solid rgba(0, 0, 0, 0.2);
    border-radius: 5px;
    &:hover {
      background-color: #dedede;
    }
  }
`;

export const InputCheckbox = styled.div`
  padding: var(--s-6);
  font-size: 20px;
  color: #000000;
  font-weight: bold;
  input {
    cursor: pointer;
  }
`;

export const Description = styled.div`
  padding: var(--s-4) 0;
  color: #bfbfbf;
`;

export const Submit = styled.div`
  display: flex;
  justify-content: center;
`;

export const BtnSubmit = styled.button`
  border: none;
  padding: var(--s-4) var(--s-15);
  border-radius: 10px;
  color: white;
  font-size: 20px;
  cursor: pointer;
  background-color: var(--blue);
  &:hover {
    background-color: rgba(46, 138, 170, 0.8);
  }
`;
