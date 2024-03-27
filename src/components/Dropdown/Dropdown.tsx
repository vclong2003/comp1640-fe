import React, { useState } from "react";
import * as S from "./Dropdown.styled";
import { EDropDownPosition } from "./dropdown.enums";

interface IDropdownProps {
  children: React.ReactNode;
  toggleButton: React.ReactNode;
  position: EDropDownPosition;
}

export default function Dropdown({
  children,
  toggleButton,
  position,
}: IDropdownProps) {
  const [open, setOpen] = useState(false);

  return (
    <S.Dropdown>
      <S.DropdownToggle onClick={() => setOpen(!open)}>
        {toggleButton}
      </S.DropdownToggle>
      <S.DropdownMenu
        $open={open}
        $position={position}
        onClick={() => setOpen(!open)}
      >
        {children}
      </S.DropdownMenu>
    </S.Dropdown>
  );
}
