import styled from "styled-components";

export const AdminMenu = styled.div`
  width: 20%;
  height: 100vh;
  background-color: #236192;
  button {
    background: transparent;
    width: 90%;
    height: 40px;
    cursor: pointer;
    margin-top: 20px;
    margin-left: 5%;
    border-radius: 12px;
    color: white;
  }
  button:hover {
    background-color: white;
    color: #236192;
  }
`;

export const Logo = styled.div`
  width: 100%;
  height: 80px;
  border-bottom: 2px solid white;
  display: flex;
  justify-content: center;
  align-items: center;
  h2 {
    color: white;
  }
`;
