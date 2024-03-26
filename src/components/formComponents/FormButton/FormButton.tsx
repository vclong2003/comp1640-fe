import { ButtonHTMLAttributes } from "react";
import * as S from "./FormButton.styled";

interface IFormButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {}

export default function FormButton({ children, ...props }: IFormButtonProps) {
  return <S.Button {...props}>{children}</S.Button>;
}
