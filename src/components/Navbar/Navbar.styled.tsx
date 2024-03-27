import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: var(--s-2);
  padding: var(--s-5) var(--s-10);
`;

export const ContainerTop = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: row;
`;

export const ContainerBottom = styled.div`
  width: 100%;
`;

export const Dash = styled.div`
  border: 1px solid gray;
  width: 100%;
`;

export const Logo = styled.div`
  color: var(--black);
  font-weight: var(--fw-bold);
  font-size: var(--fs-4xl);
  font-style: italic;
`;

export const ListUl = styled.ul`
  display: flex;
  gap: var(--s-6);
`;

export const ListLi = styled.li`
  display: inline-block;
  font-size: var(--fs-2xl);
  cursor: pointer;
  &:hover {
    color: var(--blue);
  }
`;
