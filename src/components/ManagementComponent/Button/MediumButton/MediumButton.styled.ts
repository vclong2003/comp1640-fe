import styled from "styled-components";

export const MediumButton = styled.button`
  width: 80px;
  height: 32px;
  background: transparent;
  color: ${(props) => props.color || "gray"};
  border: 1.5px solid ${(props) => props.color || "gray"};
  border-radius: 4px;
  cursor: pointer;
  &:hover {
    background-color: ${(props) => props.color || "gray"};
    color: white;
  }
`;
