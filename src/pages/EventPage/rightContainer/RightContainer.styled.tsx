import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: var(--s-10);
`;

export const TopContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

export const Title = styled.div`
  font-size: 60px;
  color: var(--blue);
  font-weight: bold;
`;

export const InputSearch = styled.div`
  input {
    border: none;
    width: 400px;
    border-radius: 15px;
    padding: 10px;
    &:hover {
      background-color: #dedede;
    }
  }
`;

export const CenterContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  border-bottom: 2px solid var(--black);
`;

export const ItemEvent = styled.div`
  display: flex;
  flex-direction: column;
  gap: var(--s-20);
  width: 100%;
`;

export const LoadMore = styled.div`
  padding: var(--s-6) 0;
`;

export const BtnLoad = styled.button`
  background-color: var(--blue);
  padding: var(--s-2) var(--s-10);
  color: white;
  border-radius: var(--s-1);

  cursor: pointer;
  &:hover {
    background-color: rgba(46, 111, 194, 0.7);
  }
`;

export const BottomContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding: 0 var(--s-5);
`;

export const StatusEvent = styled.div`
  font-size: 20px;
`;

export const Status = styled.div`
  display: flex;
  flex-direction: row;
  gap: var(--s-2);
`;

export const ColorStatus = styled.div`
  padding: var(--s-3);
  border-radius: 50%;
  background-color: #e54335;
`;

export const ColorStatus1 = styled.div`
  padding: var(--s-3);
  border-radius: 50%;
  background-color: #236192;
`;

export const ColorStatus2 = styled.div`
  padding: var(--s-3);
  border-radius: 50%;
  background-color: #d9d9d9;
`;
