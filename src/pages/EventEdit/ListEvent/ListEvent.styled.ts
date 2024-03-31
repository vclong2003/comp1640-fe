import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: var(--s-4);
`;

export const Header = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

export const Button = styled.div`
  border: 1px solid #d9d9d9;
`;

interface IBtnPublishProps {
  $active: boolean;
}
export const BtnPublish = styled.button<IBtnPublishProps>`
  padding: var(--s-2) var(--s-7);
  font-size: var(--fs-lg);
  cursor: pointer;
  background-color: ${(props) => (props.$active ? "#D9D9D9" : "#FFFFFF")};
  color: ${(props) => (props.$active ? "#1c1c1c" : "#D9D9D9")};
`;

interface IBtnMyContributionProps {
  $active: boolean;
}
export const BtnMyContribution = styled.button<IBtnMyContributionProps>`
  padding: var(--s-2) var(--s-4);
  font-size: var(--fs-lg);
  cursor: pointer;
  color: ${(props) => (props.$active ? "#1c1c1c" : "#D9D9D9")};
  background-color: ${(props) => (props.$active ? "#D9D9D9" : "#FFFFFF")};
`;

export const Search = styled.div`
  position: relative;
`;

export const Input = styled.div`
  input {
    padding: var(--s-1) var(--s-3);
    font-size: var(--fs-lg);
    padding-right: var(--s-20);
    border: 1px solid rgba(126, 136, 137, 1);
    border-radius: var(--fs-sm);
    width: auto;
  }
`;

export const Icon = styled.div`
  position: absolute;
  right: 0;
  top: 0;
  padding: var(--s-2) var(--s-1);
`;

export const ListItem = styled.div`
  display: flex;
  gap: var(--s-3);
`;
