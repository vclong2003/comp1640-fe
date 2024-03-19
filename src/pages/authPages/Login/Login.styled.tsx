import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
  gap: 20px;
  background-color: white;
  height: auto;
  margin-top: 40px;
`;

export const ContainerLeft = styled.div`
  flex: 3;
  img {
    display: flex;
    margin: 0 auto;
    width: 700px;
    height: 600px;
  }
`;

export const ContainerRight = styled.div`
  flex: 2;
`;

export const RightTop = styled.div`
  display: flex;
  flex-direction: row;
  gap: 20px;
`;

interface IBtntopProps {
  $active: boolean;
}

export const Btntop = styled.button<IBtntopProps>`
  margin-top: 30px;
  width: 160px;
  font-size: 18px;
  height: 38px;
  border-radius: 20px;
  border: none;
  font-family: JetBrains Mono;
  cursor: pointer;
  &:hover {
    background-color: rgba(238, 206, 62, 0.5);
  }
  background-color: ${(props) => (props.$active ? "#f2ba1d" : "#e0dcdc")};
  color: ${(props) => (props.$active ? "#1c1c1c" : "#ffffff")};
`;

export const RightForm = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  margin-top: 20px;
`;

export const RightFoot = styled.div`
  margin-top: 80px;
  display: flex;
  justify-content: center;
  text-align: center;
`;

export const RightMiddle = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 20px;
`;
