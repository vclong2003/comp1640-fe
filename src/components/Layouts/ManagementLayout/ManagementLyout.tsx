import React from "react";
import * as S from "./ManagementLayout.styled";
import { Outlet } from "react-router";
import HeaderComponent from "../../AdminComponents/Header/Header";
import { Menu } from "../../AdminComponents/Menu/Menu";

export default function ManagementLayout(): JSX.Element {
  return (
    <S.Container>
      <Menu />
      <S.Content>
        <HeaderComponent />
        <S.ChildrenComponent>
          <Outlet />
        </S.ChildrenComponent>
      </S.Content>
    </S.Container>
  );
}
