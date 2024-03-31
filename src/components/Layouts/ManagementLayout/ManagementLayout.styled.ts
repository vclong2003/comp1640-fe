import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
`;

export const Content = styled.div`
  width: 100%;
  display: flex;
`;

export const Headline = styled.h2`
  margin: 20px;
`;

export const ChildrenComponent = styled.div`
  margin: 0 20px;
  width: 85%;

  @media (max-width: 890px) {
    width: 100%;
  }
`;
