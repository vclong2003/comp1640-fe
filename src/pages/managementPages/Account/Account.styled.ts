import styled from "styled-components";

export const Headline = styled.h2`
  margin: 20px;
`;

export const AdminProfile = styled.div`
  display: flex;
  margin-right: 20px;
`;

export const AvatarImage = styled.div`
  width: 120px;
  height: 120px;
  border-radius: 50%;
  background-color: gray;
`;

export const ChangeAvatarButton = styled.button`
  width: 120px;
  height: 40px;
  background: transparent;
  border: 1.5px solid blue;
  border-radius: 10px;
  cursor: pointer;
  &:hover {
    background-color: blue;
    color: white;
  }

  margin-top: 20px;
`;

export const AdminAction = styled.div`
  margin-left: 240px;
  input {
    width: 480px;
    border: 1px solid gray;
    height: 40px;
    border-radius: 4px;
  }
  p {
    margin: 12px 0;
  }
  button {
    width: 80px;
    height: 40px;
    background-color: green;
    color: white;
    border-radius: 4px;
    margin-left: 12px;
    cursor: pointer;
    &:hover {
      background-color: yellow;
    }
  }
`;
