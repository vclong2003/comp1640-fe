import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding: var(--s-6) var(--s-20);
  background-color: #e54335;
  color: white;
`;

export const ImageDocument = styled.div`
  border: 1 px solid black;
  border-radius: 50%;
  padding: var(--s-4);
  background-color: white;
`;

export const TitleEvent = styled.div`
  font-size: 30px;
  padding: var(--s-2) 0;
`;

export const StartDateEvent = styled.div`
  font-size: 20px;
  padding: var(--s-4) 0;
`;

export const EndDateEvent = styled.div`
  font-size: 20px;
  padding: var(--s-4) 0;
`;
