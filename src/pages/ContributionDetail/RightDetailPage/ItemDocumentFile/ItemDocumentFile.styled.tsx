import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  
  padding: 0 var(--s-3);
  align-items: center;
  border: 2px solid #f2ba1d;
  border-radius: var(--br-md);
`;

export const LeftContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`;

export const ImageDoc = styled.img`
  width: 32px;
  height: 32px;
`;

export const TitleDoc = styled.div`
  font-size: var(--fs-sm);
`;


