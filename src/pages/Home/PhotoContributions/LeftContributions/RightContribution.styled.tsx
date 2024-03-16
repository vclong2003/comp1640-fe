import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: var(--s-6);
`;

export const Image = styled.img`
  border-radius: var(--br-lg);
  z-index: 0;
  width: 100%;
  height: auto;
`;

export const Title = styled.div`
  font-size: 30px;
  font-weight: bold;
`;

export const Description = styled.div`
  font-size: 20px;
`;

export const Divider = styled.div`
  border: 1px solid black;
`;

export const Bottom = styled.div`
  font-size: 20px;
`;
