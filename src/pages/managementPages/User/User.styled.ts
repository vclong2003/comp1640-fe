import styled from "styled-components";
export const Headline = styled.h2`
  margin: 20px 0;
`;
export const HeadlineAndDelete = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 24px;
  @media (max-width: 600px) {
    display: block;
  }
`;

export const Form = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const AddAndSort = styled.div`
  width: 20%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  @media (max-width: 600px) {
    width: 100%;
  }
`;
