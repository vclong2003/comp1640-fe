import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  padding: var(--s-8) var(--s-12);
  gap: var(--s-10);
`;

export const Title = styled.div`
  font-size: 60px;
  color: var(--blue);
  font-weight: bold;
`;

export const StatusFilter = styled.div`
  padding-bottom: var(--s-4);
  border-bottom: 2px solid var(--black);
`;

export const TitleStatus = styled.div`
  font-size: 30px;
  font-weight: bold;
`;

export const CheckBoxStatus = styled.div`
  display: flex;
  flex-direction: column;
  gap: var(--s-6);
  padding: var(--s-9) var(--s-7);
  font-size: 20px;
  input {
    cursor: pointer;
  }
`;
export const ItemCheckbox = styled.div``;

export const DateFilter = styled.div`
  display: flex;
  flex-direction: column;
  padding-bottom: var(--s-4);
  border-bottom: 2px solid var(--black);
  gap: var(--s-5);
  padding-top: var(--s-6);
`;

export const TitleDate = styled.div`
  font-size: 30px;
  font-weight: bold;
  padding-bottom: var(--s-8);
`;

export const DateTime = styled.div`
  display: flex;
  flex-direction: row;
  gap: var(--s-5);
  justify-content: center;
  padding-bottom: var(--s-7);
`;

export const StartDate = styled.div`
  input {
    font-size: 20px;
  }
`;

export const EndDate = styled.div`
  input {
    font-size: 20px;
  }
`;

export const BtnDate = styled.button`
  background-color: var(--blue);
  padding: var(--s-5) 0;
  font-size: 20px;
  color: white;
`;

export const BottomFilter = styled.div``;

export const BtnOldest = styled.button``;

export const Text = styled.div``;
