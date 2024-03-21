import styled from "styled-components";

export const Container = styled.div`
  display: flex;
`;

export const Left = styled.div`
  flex: 10;
  display: flex;
  flex-direction: row;
  gap: var(--s-2);
`;

export const Ava = styled.div`
  img {
    width: 36px;
    height: 36px;
  }
`;

export const InfoComment = styled.div`
  display: flex;
  flex-direction: column;
  gap: var(--s-2);
`;

export const Author = styled.div``;

export const UserInfor = styled.div`
  font-size: 20px;
`;

export const DateComment = styled.div``;

export const TypeComment = styled.div``;

export const Right = styled.div`
  flex: 2;
`;
