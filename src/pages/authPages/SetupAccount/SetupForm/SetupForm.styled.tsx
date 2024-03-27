import styled from "styled-components";
import { DEVICES } from "../../../../config/responsiveBreakpoints";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  padding: var(--s-3) var(--s-3);
  width: 100%;
  @media ${DEVICES.DESKTOP_L} {
    padding: var(--s-20) var(--s-30) var(--s-5) var(--s-1);
  }
`;

export const Title = styled.div`
  font-size: var(--fs-4xl);
  @media ${DEVICES.DESKTOP_L} {
    font-size: var(--fs-6xl);
  }
`;

export const Description = styled.div`
  font-size: var(--fs-lg);
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

export const Error = styled.p`
  color: var(--red);
  font-size: var(--fs-md);
`;
