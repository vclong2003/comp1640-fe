import styled from "styled-components";

interface DropdownContentProps {
  isOpen: boolean;
}

export const DropdownContainer = styled.div`
  position: relative;
  display: inline-block;
  width: 100%;
  margin-top: 20px;
`;

export const DropdownButton = styled.button`
  background-color: light-gray;
  color: black;
  padding: 10px;
  font-size: 16px;
  border: none;
  cursor: pointer;
  width: 100%;
  border-radius: 8px;
`;

export const DropdownContent = styled.div<DropdownContentProps>`
  display: ${(props) => (props.isOpen ? "block" : "none")};
  position: absolute;
  background-color: #f9f9f9;
  min-width: 160px;
  box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);
  z-index: 1;
  width: 100%;
  border-radius: 8px;
`;

export const DropdownItem = styled.a`
  color: black;
  padding: 12px 16px;
  text-decoration: none;
  display: block;
  &:hover {
    background-color: #f1f1f1;
  }
`;
