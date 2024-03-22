import * as S from "./ManagementLayout.styled";
import { Outlet } from "react-router";
import HeaderComponent from "../../ManagementComponent/Header/Header";
import { Menu } from "../../ManagementComponent/Menu/Menu";

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
