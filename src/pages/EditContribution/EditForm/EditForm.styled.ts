import { DEVICES } from "@config/responsiveBreakpoints";
import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  padding: var(--s-2) var(--s-4);
  gap: var(--s-5);
  @media ${DEVICES.DESKTOP} {
    padding: var(--s-6) var(--s-20);
  }
`;

export const ItemInput = styled.div``;

export const Text = styled.div`
  font-size: var(--fs-lg);
  font-weight: var(--fw-semibold);
  @media ${DEVICES.DESKTOP} {
    font-size: var(--fs-xl);
    margin-bottom: var(--s-2);
  }
`;

export const InputTitle = styled.div`
  input {
    padding: var(--s-3);
    background-color: var(--light-gray);
    width: 100%;
    font-size: var(--fs-md);
    border-radius: var(--br-md);
  }
`;

export const Input = styled.div``;

export const InputFile = styled.div`
  font-size: var(--fs-sm);
  color: var(--blue);
  text-decoration: underline;
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
  flex-direction: row;
  gap: var(--s-2);
`;

export const BtnSubmit = styled.button`
  border: none;
  padding: var(--s-2) var(--s-7);
  border-radius: var(--br-md);
  color: var(--white);
  font-size: var(--fs-sm);
  cursor: pointer;
  background-color: var(--blue);
  @media ${DEVICES.DESKTOP} {
    padding: var(--s-3) var(--s-10);
    font-size: var(--fs-lg);
  }
`;
export const BtnCancel = styled.button`
  border: none;
  padding: var(--s-2) var(--s-7);
  border-radius: var(--br-md);
  color: var(--white);
  font-size: var(--fs-sm);
  cursor: pointer;
  background-color: var(--blue-gray);
  @media ${DEVICES.DESKTOP} {
    padding: var(--s-3) var(--s-9);
    font-size: var(--fs-lg);
  }
`;

export const StatusFile = styled.div`
  font-size: var(--fs-sm);
  margin-top: var(--s-2);
  color: var(--light-gray-2);
`;
