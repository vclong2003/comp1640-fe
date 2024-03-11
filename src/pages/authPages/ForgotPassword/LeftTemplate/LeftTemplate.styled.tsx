import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  color: white;
  width: 100%;
`;

export const TitleTop = styled.div`
  text-align: center;
  color: black;
  font-weight: bold;
  font-size: 80px;
  justify-content: flex-end;
`;

export const Center = styled.div`
  padding: var(--s-6) var(--s-24);
`;

export const Middle = styled.div`
  display: flex;
  flex-direction: column;
  border: 1px solid white;
  border-radius: 20px;
  background-color: white;
  color: black;
  width: auto;
  padding: var(--s-4) var(--s-10);
`;

export const MiddleTop = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

export const Description = styled.div`
  font-size: 28px;
`;

export const Description2 = styled.div`
  font-size: 20px;
`;

export const MiddleBottom = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: var(--s-10);
  justify-content: center;
  gap: 30px;
  padding: 0 var(--s-10) 0 var(--s-20);
`;

export const InputEmail = styled.input`
  border: 1px solid black;
  padding: var(--s-3) var(--s-3);
  border: 1px solid rgba(0, 0, 0, 0.2);
  border-radius: 5px;
  &:hover {
    background-color: #dedede;
`;

export const Next = styled.div`
  display: flex;
  justify-content: flex-end;
  margin-bottom: var(--s-12);
  margin-top: var(--s-10);
`;

export const BtnNext = styled.button`
  background-color: #66665d;
  padding: var(--s-4) var(--s-12);
  color: white;
  border-radius: 20px;
  gap: 5px;
  font-size: 20px;
  display: flex;
  cursor: pointer;
  &:hover {
    background-color: rgba(160, 160, 150, 0.8);
  }
`;

export const Bottom = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  padding: var(--s-6) var(--s-24);
`;

export const BtnBack = styled.button`
  padding: var(--s-6) var(--s-20);
  background-color: #f2ba1d;
  color: black;
  font-size: 20px;
  cursor: pointer;
  border-radius: var(--s-4);
  &:hover {
    background-color: rgba(226, 190, 103, 0.5);
  }
`;
