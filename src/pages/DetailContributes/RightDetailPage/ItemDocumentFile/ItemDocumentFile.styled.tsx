import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding: 0 var(--s-3);
  align-items: center;
  border: 1px solid #f2ba1d;
  border-radius: var(--fs-md);
`;

export const LeftContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: var(--s-3);
`;

export const ImageDoc = styled.img`
  width: 42px;
  height: 42px;
`;

export const TitleDoc = styled.div``;

export const RightContainer = styled.div`
  font-size: var(--fs-xl);
  padding-top: var(--s-1);
  cursor: pointer;
`;
