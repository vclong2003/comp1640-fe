import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: var(--s-6);
`;

export const Title = styled.div`
  font-size: var(--fs-6xl);
`;

export const Description = styled.div`
  font-size: var(--fs-3xl);
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: var(--s-4);
`;

export const FormGroup = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Label = styled.label`
  font-size: var(--fs-2xl);
`;

export const Input = styled.input`
  padding: var(--s-4) var(--s-3);
  font-size: var(--fs-xl);
  border: 1px solid;
`;

export const LinkRegis = styled.div`
  font-size: var(--fs-2xl);
`;

export const Button = styled.div`
  display: flex;
  flex-direction: column;
  gap: var(--s-5);
  padding: 0 var(--s-40);
`;

export const BtnLogin = styled.button`
  background-color: #f2ba1d;
  padding: var(--s-3) 0;
  font-size: var(--fs-xl);
  color: white;
  border-radius: var(--fs-xs);
  cursor: pointer;
`;

export const Divider = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  gap: var(--s-3);
  font-size: var(--fs-xl);
  padding: 0 var(--s-10);
`;

export const Line = styled.div`
  border: 1px solid black;
  width: 100%;
`;

export const BtnLoginWithGoogle = styled.button`
  background-color: #898989;
  padding: var(--s-3) 0;
  font-size: var(--fs-xl);
  color: white;
  border-radius: var(--fs-xs);
  cursor: pointer;
`;
