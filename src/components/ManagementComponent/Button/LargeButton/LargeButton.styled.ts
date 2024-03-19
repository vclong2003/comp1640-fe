import styled from "styled-components";

export const LargeButton = styled.button`
  width: 120px;
  height: 40px;
  border-radius: 4px;
  cursor: pointer;
  background-color: ${(props) => props.color || "gray"};
  color: white;
`;
