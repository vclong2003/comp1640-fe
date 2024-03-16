import styled from "styled-components";

export const Headline = styled.h2`
  margin: 20px 0;
`;

export const SearchAndSort = styled.div`
  display: flex;
  input {
    width: 360px;
    height: 40px;
    border: 1px solid gray;
    border-radius: 4px;
    margin-right: 40px;
  }
  button {
    width: 120px;
    height: 40px;
    border-radius: 4px;
    cursor: pointer;
    background: transparent;
    border: 1px solid gray;
  }
`;

export const ListAllFaculty = styled.div`
  margin-top: 20px;
`;
