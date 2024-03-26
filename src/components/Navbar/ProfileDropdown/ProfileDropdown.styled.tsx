import styled from "styled-components";

export const ProfileButton = styled.button`
  background-color: var(--white);
  display: flex;
  flex-direction: "row";
  align-items: center;
  font-size: var(--fs-xl);
  cursor: pointer;
  gap: var(--s-2);
`;

export const AvatarContainer = styled.div`
  width: 48px;
  height: 48px;
  border-radius: 50%;
  border: 2.4px solid var(--black);
`;

export const UserName = styled.p``;

export const DropdownContent = styled.div`
  box-shadow: var(--shadow-2xl);
  background-color: var(--white);
`;

export const DropdownItem = styled.div`
  font-size: var(--fs-lg);
  padding: var(--s-3);
  &:hover {
    cursor: pointer;
    background-color: var(--light-gray);
  }
`;
