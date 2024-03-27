import styled from "styled-components";

export const AddUserButton = styled.button`
  height: 48px;
  background-color: green;
  color: white;
  border-radius: 8px;
  cursor: pointer;
  width: 160px !important;
  margin-left: 56px !important;
  &:focus {
    boxShadow: 0 0 0 0.2rem rgba(0,123,255,.5),
  },
`;

export const SortByButton = styled.button`
  height: 48px;
  background-color: transparent;
  color: gray;
  border-radius: 8px;
  cursor: pointer;
  width: 160px !important;
  margin-left: 56px !important;
  border: 1px solid gray;
  &:focus {
    boxShadow: 0 0 0 0.2rem rgba(0,123,255,.5),
  },
`;

export const HeadlineAndDelete = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const DeleteButton = styled.button`
height: 36px;
  background-color: red;
  color: white;
  border-radius: 8px;
  cursor: pointer;
  width: 160px !important;
  margin-right: 56px !important;
  &:focus {
    boxShadow: 0 0 0 0.2rem rgba(0,123,255,.5),
  },
`;
