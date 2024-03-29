import { FormButton } from "@components/formComponents";
import { DEVICES } from "@config/responsiveBreakpoints";
import { NavLink } from "react-router-dom";
import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  padding: var(--s-2) var(--s-3);
  @media ${DEVICES.DESKTOP} {
    padding: var(--s-3) var(--s-8);
  }
`;

export const ContainerTop = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  @media ${DEVICES.DESKTOP} {
    display: flex;
  }
`;

export const ContainerBottom = styled.div`
  width: 100%;
`;

export const Dash = styled.div`
  border: 1px solid gray;
  width: 100%;
  margin: 0;
  @media ${DEVICES.DESKTOP} {
    margin-top: var(--s-4);
  }
`;

export const Logo = styled.div`
  font-size: var(--fs-3xl);
  color: var(--black);
  font-weight: var(--fw-bold);
  flex: 10;
  font-style: italic;
  @media ${DEVICES.DESKTOP} {
    color: var(--black);
    font-weight: var(--fw-bold);
    font-size: var(--fs-4xl);
    flex: 2;
  }
`;

export const ListUl = styled.ul`
  display: none;
  gap: var(--s-4);
  @media ${DEVICES.DESKTOP} {
    display: flex;
    justify-content: center;
    flex: 8;
  }
`;

export const ListLi = styled(NavLink)`
  flex-direction: column;
  align-items: flex-start;
  margin: var(--s-3) var(--s-8);
  display: flex;
  font-size: var(--fs-xl);
  color: var(--black);
  text-decoration: none;
  @media ${DEVICES.DESKTOP} {
    display: inline-block;
    font-size: var(--fs-lg);
    cursor: pointer;
    margin: 0 var(--s-5);
    &:hover {
      color: var(--blue);
    }
  }
`;

export const ResponsiveNavButton = styled(FormButton)`
  color: var(--black);
  background-color: transparent;
  display: flex;
  align-items: center;
  font-size: var(--fs-2xl);
  margin-right: var(--s-2);

  @media ${DEVICES.DESKTOP} {
    display: none;
  }
`;

export const VerticalNavList = styled(ListLi)`
  flex-direction: column;
  align-items: flex-start;
  row-gap: var(--s-3);
  margin: var(--s-10) var(--s-10);
`;

export const Profile = styled.div`
  flex: 2;
  display: flex;
  justify-content: flex-end;
  @media ${DEVICES.DESKTOP} {
    flex: 2;
  }
`;
