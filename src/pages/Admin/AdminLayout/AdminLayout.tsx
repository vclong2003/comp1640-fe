import React, { ReactNode } from "react";
import { Menu } from "../../../components/AdminComponents/Menu/Menu";
import { ChildrenComponent, Container, Content } from "./AdminLayout.styled";
import HeaderComponent from "../../../components/AdminComponents/Header/Header";

interface LayoutProps {
  children: ReactNode;
}

export const AdminLayout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <Container>
      <Menu></Menu>
      <Content>
        <HeaderComponent></HeaderComponent>
        <ChildrenComponent>{children}</ChildrenComponent>
      </Content>
    </Container>
  );
};
