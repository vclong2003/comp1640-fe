import { ReactNode } from "react";
import * as S from "./Link.styled";

interface ILinkProps extends JSX.IntrinsicAttributes {
  to: string;
  children: ReactNode;
}

export default function Link({ to, children, ...props }: ILinkProps) {
  return (
    <S.Link to={to} {...props}>
      {children}
    </S.Link>
  );
}
