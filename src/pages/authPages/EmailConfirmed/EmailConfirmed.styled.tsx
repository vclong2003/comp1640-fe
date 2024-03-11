import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  gap: 60px;
`;

export const Top = styled.div``;

export const Title = styled.div`
  font-size: 60px;
`;

export const Description = styled.div`
  font-size: 30px;
  margin-top: var(--s-10);
  margin-bottom: var(--s-8);
`;

export const Middel = styled.div`
  img {
    width: 317px;
    height: auto;
  }
`;

export const Bottom = styled.div``;

export const BtnLogin = styled.button`
  background-color: #236192;
  padding: var(--s-5) var(--s-40);
  border-radius: 20px;
  color: white;
  font-size: 20px;
  cursor: pointer;
  &:hover {
    background-color: rgba(80, 126, 169, 0.8);
  }
`;
