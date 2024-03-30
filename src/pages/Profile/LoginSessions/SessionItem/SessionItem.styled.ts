import styled from "styled-components";
import { IoLogOutSharp } from "react-icons/io5";

export const SessionItem = styled.div`
  background-color: var(--white);
  position: relative;
  border-radius: var(--br-md);
  padding: var(--s-3) var(--s-4);
`;

export const DeviceName = styled.div`
  font-weight: var(--fw-bold);
  font-size: var(--fs-lg);
  margin-bottom: var(--s-2);
  display: flex;
  align-items: center;
`;

export const CurrentDeviceBadge = styled.span`
  background-color: var(--green);
  color: var(--white);
  font-size: var(--fs-xs);
  padding: var(--s-1) var(--s-2);
  border-radius: var(--br-md);
  font-weight: var(--fw-normal);
  margin-left: var(--s-2);
`;

export const Date = styled.div`
  font-size: var(--fs-sm);
  color: var(--blue-gray);
`;

export const LogoutButton = styled(IoLogOutSharp)`
  cursor: pointer;
  font-size: var(--fs-xl);
  position: absolute;
  top: 0;
  right: 0;
  margin: var(--s-3);
  color: var(--red);
`;
