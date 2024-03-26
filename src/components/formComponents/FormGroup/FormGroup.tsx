import { HTMLAttributes, ReactNode } from "react";
import * as S from "./FormGroup.styled";

interface IFormGroupProps extends HTMLAttributes<HTMLDivElement> {
  children: ReactNode;
}

export default function FormGroup({ children, ...props }: IFormGroupProps) {
  return <S.FormGroup {...props}>{children}</S.FormGroup>;
}
