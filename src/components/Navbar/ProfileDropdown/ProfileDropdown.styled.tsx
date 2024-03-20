import styled from "styled-components";

export const ProfileButton = styled.button`
  background-color: var(--white);
  display: flex;
  flex-direction: "row";
  align-items: center;
  font-size: var(--fs-md);
  cursor: pointer;
`;

export const DropdownContent = styled.div`
  box-shadow: var(--shadow-2xl);
  background-color: var(--white);
`;

export const DropdownItem = styled.div`
  font-size: var(--fs-md);
  padding: var(--s-3);
  &:hover {
    cursor: pointer;
    background-color: var(--light-gray);
  }
`;
