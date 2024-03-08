import styled from "styled-components";

export const Foot = styled.div`
  border: none;
  width: 100%;
  background-color: var(--black);
`;

export const ContainerTop = styled.div`
  display: flex;
  flex-direction: row;
  padding: var(--s-12);
  color: var(--white);
`;

export const Left = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  flex: 6;
`;

export const FirstLeft = styled.div`
  font-size: 36px;
  margin-bottom: var(--s-1);
`;

export const SecondLeft = styled.div`
  font-size: 18px;
`;

export const ThirdLeft = styled.div`
  font-size: 18px;
  display: flex;
  flex-direction: row;
  gap: 10px;
`;

export const Middle = styled.div`
  display: flex;
  flex-direction: column;
  flex: 3;
  align-items: center;
`;

export const MiddleFirst = styled.div`
  font-size: 36px;
  margin-bottom: var(--s-5);
`;

export const MiddleSecond = styled.div`
  font-size: 18px;
  margin-bottom: var(--s-6);
`;

export const MiddleThird = styled.div`
  font-size: 18px;
`;

export const Right = styled.div`
  display: flex;
  flex-direction: column;
  flex: 3;
  align-items: center;
`;

export const RightFirst = styled.div`
  font-size: 36px;
  margin-bottom: var(--s-5);
`;

export const RightSecond = styled.div`
  font-size: 18px;
  margin-bottom: var(--s-6);
`;

export const RightThird = styled.div`
  font-size: 18px;
`;

export const ContainerMiddle = styled.div`
  padding: var(--s-3) var(--s-12);
`;

export const Line = styled.div`
  border: 1px solid white;
  width: 100%;
`;

export const ContainerBottom = styled.div`
  padding: var(--s-3) var(--s-12);
`;

export const TextBottom = styled.div`
  color: white;
  display: flex;
  flex-direction: row;
  justify-content: center;
  gap: 20px;
`;

export const text = styled.div`
  font-size: 20px;
`;

export const icon = styled.div`
  margin-top: 2px;
  font-size: 20px;
`;
