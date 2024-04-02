import { Field } from "formik";
import styled from "styled-components";

interface IInputProps {
  disabled?: boolean;
}

export const Input = styled(Field)<IInputProps>`
  padding: var(--s-2) var(--s-4);
  font-size: var(--fs-md);
  background-color: ${({ disabled }) =>
    disabled ? "var(--light-gray)" : "var(--ice-blue)"};
  border-radius: var(--br-md);
  border: 2px solid white;
  transition: border-color 0.3s;
  &:hover {
    border-color: var(--light-gray-2);
  }
  &:focus {
    border-color: var(--yellow);
  }
`;
