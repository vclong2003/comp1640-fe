import styled from "styled-components";

export const Headline = styled.h2`
  margin: 20px;
`;

export const Button = styled.button`
  width: 450px;
  height: 48px;
  border-radius: 12px;
  cursor: pointer;
  color: white;
  background-color: ${(props) => props.color || "gray"};
`;

export const ListOfActions = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 40px 20px;
`;
