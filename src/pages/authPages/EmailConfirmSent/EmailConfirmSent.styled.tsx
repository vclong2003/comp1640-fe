import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  max-height: 100vh;
`;

export const Left = styled.div`
  flex: 8;
`;

export const Right = styled.div`
  flex: 4;
  img {
    height: 100%;
    width: 100%;
  }
`;
