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

export const ModalContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const ModalContent = styled.div`
  width: 500px;
  height: 300px;
  background-color: white;
  border-radius: 4px;
  padding: 20px;
  h2 {
    margin-bottom: 20px;
  }
  input {
    width: 90%;
    height: 40px;
    border: 1px solid gray;
    border-radius: 4px;
    margin: 12px 0;
  }
`;

export const SaveAndClose = styled.div`
  margin-top: 12px;
  display: flex;
  justify-content: space-between;
`;
