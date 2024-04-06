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

export const InputTitle = styled.div`
input{
  padding: var(--s-3);
  background-color: var(--light-gray);
  width: 100%;
  font-size: var(--fs-md);
  border-radius: var(--br-md);
}

`;

export const Input = styled.div`
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
