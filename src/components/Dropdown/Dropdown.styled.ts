import styled from "styled-components";
import { EDropDownPosition } from "./dropdown.enums";

export const Dropdown = styled.div`
  position: relative;
`;

export const DropdownToggle = styled.div``;

interface IDropdownMenuProps {
  $open: boolean;
  $position: EDropDownPosition;
}
export const DropdownMenu = styled.div<IDropdownMenuProps>`
  visibility: ${({ $open }) => ($open ? "visible" : "hidden")};
  position: absolute;
  z-index: 20;
  display: flex;
  flex-direction: column;
  padding: var(--s-4);
  width: max-content;
  transform: ${({ $position }) =>
    $position === EDropDownPosition.LEFT
      ? "translateX(-50%)"
      : "translateX(0)"};
`;
