import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100%;
  gap: 50px;
  padding: var(--s-40) 0 var(--s-12) 0;
`;

export const Top = styled.div``;

export const Title = styled.div`
  font-size: 60px;
`;

export const Description = styled.div`
  margin-top: var(--s-10);
  margin-bottom: var(--s-10);
  font-size: 20px;
`;

export const Back = styled.div`
  margin-top: var(--s-10);
  margin-bottom: var(--s-10);
`;

export const BtnBack = styled.button`
  background-color: #236192;
  padding: var(--s-5) var(--s-20);
  border-radius: 20px;
  color: white;
  font-size: 20px;
  cursor: pointer;
  &:hover {
    background-color: rgba(80, 126, 169, 0.8);
  }
`;
