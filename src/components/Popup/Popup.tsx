import { ReactNode } from "react";
import * as S from "./Popup.styled";

interface IPopupProps extends JSX.IntrinsicAttributes {
  children: ReactNode;
  show?: boolean;
  onClose: () => void;
}

export default function Popup({
  children,
  show,
  onClose,
  ...rest
}: IPopupProps): JSX.Element {
  const handleClickContent = (
    e: React.MouseEvent<HTMLDivElement, MouseEvent>,
  ) => {
    e.stopPropagation();
  };

  return (
    <S.PopupOverlay $show={show} onClick={onClose} {...rest}>
      <S.PopupContainer onClick={handleClickContent}>
        <S.PopupHeader>
          <S.CloseButton onClick={onClose} />
        </S.PopupHeader>
        <S.PopupBody>{children}</S.PopupBody>
      </S.PopupContainer>
    </S.PopupOverlay>
  );
}
