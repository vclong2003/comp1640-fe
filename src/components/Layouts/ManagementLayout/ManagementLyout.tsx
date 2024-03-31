import * as S from "./ManagementLayout.styled";
import { Outlet } from "react-router";
import HeaderComponent from "./Header/Header";
import { Menu } from "./Menu/Menu";

export default function ManagementLayout(): JSX.Element {
  return (
    <S.Container>
      <HeaderComponent />
      <S.Content>
        <Menu />
        <S.ChildrenComponent>
          <Outlet />
        </S.ChildrenComponent>
      </S.Content>
    </S.Container>
  );
}
