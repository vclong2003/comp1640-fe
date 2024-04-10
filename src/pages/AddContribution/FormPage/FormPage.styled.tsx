import { DEVICES } from "@config/responsiveBreakpoints";
import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  padding: var(--s-3) var(--s-2);
  gap: var(--s-5);
  @media ${DEVICES.DESKTOP} {
    padding: var(--s-6) var(--s-20);
    gap: var(--s-10);
  }
`;

export const ItemInput = styled.div`
  font-size: var(--fs-sm);
  @media ${DEVICES.DESKTOP} {
    font-size: var(--fs-md);
  }
`;

export const Text = styled.div`
  font-size: var(--fs-lg);
  font-weight: bold;
  @media ${DEVICES.DESKTOP} {
    font-size: var(--fs-2xl);
  }
`;

export const InputTitle = styled.div`
  input {
    padding: var(--s-2);
    background-color: var(--light-gray);
    width: 100%;
    font-size: var(--fs-md);
    border-radius: var(--br-md);
  }
  @media ${DEVICES.DESKTOP} {
    input {
      padding: var(--s-3);
      font-size: var(--fs-md);
      border-radius: var(--br-md);
    }
  }
`;

export const Input = styled.div`
input {
    padding: var(--s-2);
    background-color: var(--light-gray);
    width: 100%;
    font-size: var(--fs-md);
    border-radius: var(--br-md);
  }

  @media ${DEVICES.DESKTOP} {
    input {
      padding: var(--s-3);
      font-size: var(--fs-md);
      border-radius: var(--br-md);
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
  padding: var(--s-2) 0;
  color: #bfbfbf;
  @media ${DEVICES.DESKTOP} {
    padding: var(--s-4) 0;
  }
`;

export const Submit = styled.div`
  display: flex;
  justify-content: center;
`;

export const BtnSubmit = styled.button`
  border: none;
  padding: var(--s-2) var(--s-7);
  border-radius: var(--br-md);
  color: white;
  font-size: var(--fs-lg);
  cursor: pointer;
  background-color: var(--blue);
  &:hover {
    background-color: rgba(46, 138, 170, 0.8);
  }
  @media ${DEVICES.DESKTOP}{
    padding: var(--s-4) var(--s-15);
    font-size: var(--fs-xl);
  }
`;
