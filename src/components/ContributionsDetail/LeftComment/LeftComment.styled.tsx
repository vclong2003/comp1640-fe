import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  gap: var(--s-4);
`;

export const Ava = styled.div`
  img {
    width: 48px;
    height: 48px;
  }
`;

export const InfoComment = styled.div`
  display: flex;
  flex-direction: column;
  gap: var(--s-2);
`;

export const Author = styled.div``;

export const UserInfor = styled.div`
  font-size: 28px;
`;

export const DateComment = styled.div`
  font-size: 20px;
`;
