import styled from "styled-components";

export const DropdownContainer = styled.div`
  position: relative;
  display: inline-block;
`;

export const DropdownButton = styled.button`
  background-color: #4caf50;
  color: white;
  padding: 12px;
  font-size: 12px;
  border: none;
  cursor: pointer;
  border-radius: 4px;
  margin-top: 12px;
`;

export const DropdownContent = styled.div<{ isOpen: boolean }>`
  display: ${({ isOpen }) => (isOpen ? "block" : "none")};
  position: absolute;
  background-color: #f9f9f9;
  min-width: 160px;
  box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);
  z-index: 1;
  width: 100%;
  border-radius: 4px;
`;

export const DropdownItem = styled.div`
  padding: 12px 16px;
  text-decoration: none;
  display: block;
  color: black;
  &:hover {
    background-color: #f1f1f1;
    cursor: pointer;
  }
  font-size: 12px;
`;
