import styled from "styled-components";

export const dropdownProfile = styled.div`
  position: absolute;
  top: 4.5rem;
  right: 2rem;
  width: 190px;
  border: none;
  background-color: white;
`;

export const dropUl = styled.ul`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const textLi = styled.li`
  display: inline-block;
  padding: 10px;
  width: 100%;
  &:hover {
    background-color: #111927;
    cursor: pointer;
    color: white;
  }
`;
