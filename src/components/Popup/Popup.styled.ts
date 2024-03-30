import styled from "styled-components";
import { IoClose } from "react-icons/io5";

interface IPopupOverlayProps {
  $show?: boolean;
}

const PopupOverlay = styled.div<IPopupOverlayProps>`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: var(--black-opacity);
  display: ${({ $show }) => ($show ? "flex" : "none")};
  flex-direction: row;
  align-items: center;
  justify-content: center;
  z-index: 5;
`;

const PopupContainer = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 768px;
  max-height: 80%;
  margin: 0 var(--s-8);
  background-color: var(--white);
  padding: var(--s-3);
  border-radius: var(--br-md);
  box-shadow: var(--shadow-md);
  overflow: hidden;
`;

const PopupHeader = styled.div`
  display: flex;
  justify-content: flex-end;
`;

const PopupBody = styled.div`
  overflow-y: auto;
  border-radius: var(--br-md);
`;

const CloseButton = styled(IoClose)`
  font-size: var(--fs-3xl);
  color: var(--gray);
  margin: 0;
  border-radius: 50%;
  background-color: var(--light-gray);
  cursor: pointer;
`;

export { PopupOverlay, PopupContainer, PopupHeader, PopupBody, CloseButton };
