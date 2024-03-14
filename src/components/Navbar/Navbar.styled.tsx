import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

export const ContainerTop = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  flex-direction: row;
  font-size: 20px;
  font-family: JetBrains Mono !important;
`;

export const ContainerBottom = styled.div`
  width: 100%;
`;

export const Dash = styled.div`
  border: 1px solid gray;
  width: 100%;
`;

export const Logo = styled.div`
  color: #fc4308;
  font-weight: bold;
  padding: 5px;
`;

export const ListUl = styled.ul`
  display: flex;
  gap: 40px;
  padding: 5px;
`;

export const ListLi = styled.li`
  display: inline-block;
  &:hover {
    color: var(--blue);
    cursor: pointer;
  }
`;

export const Search = styled.div`
  display: flex;
  flex-direction: row;
  gap: 10px;
`;

export const SearchBox = styled.input`
  border: none;
  width: 400px;
  border-radius: 15px;
  padding: 5px;
  &:hover {
    background-color: #dedede;
  }
`;

export const LogoSearch = styled.div`
  padding: 5px;
`;

export const TextAccount = styled.div`
  cursor: pointer;
  padding: 5px;
  display: flex;
  margin-right: 60px;
  gap: 4px;
  &:hover {
    color: var(--blue);
    cursor: pointer;
  }
`;
