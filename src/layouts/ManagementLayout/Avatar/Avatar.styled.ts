import styled from "styled-components";

export const ProfileButton = styled.button`
  display: flex;
  flex-direction: row;
  font-size: var(--fs-xl);
  cursor: pointer;
  gap: var(--s-2);
  border-radius: 50%;
`;

export const AvatarContainer = styled.div`
  width: 48px;
  height: 48px;
  border-radius: 50%;
`;

export const DropdownContent = styled.div`
  box-shadow: var(--shadow-2x2);
  background-color: var(--white);
  border-radius: var(--br-md);
  border: 1px solid var(--light-gray);
`;

export const UserInfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;
export const UserName = styled.p``;
export const UserRole = styled.p`
  font-size: var(--fs-sm);
  color: var(--dark-gray);
`;

export const DropdownItem = styled.div`
  font-size: var(--fs-lg);
  padding: var(--s-3);
  color: var(--black);
  &:hover {
    cursor: pointer;
    background-color: var(--light-gray);
  }
`;
