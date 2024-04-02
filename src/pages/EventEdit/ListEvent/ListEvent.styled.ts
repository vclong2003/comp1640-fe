import styled from "styled-components";
import { default as BaseItem } from "@components/ContributionItem/ContributionItem";
import { DEVICES } from "@config/responsiveBreakpoints";
import { FormButton } from "@components/formComponents";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: var(--s-1);
  @media ${DEVICES.DESKTOP} {
    display: flex;
    flex-direction: column;
    gap: var(--s-4);
  }
`;

export const Header = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  margin-bottom: var(--s-2);
  @media ${DEVICES.DESKTOP} {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
  }
`;

export const Button = styled.div`
  border: 2px solid #d9d9d9;
`;

interface IBtnPublishProps {
  $active: boolean;
}
export const BtnPublish = styled.button<IBtnPublishProps>`
  padding: var(--s-2) var(--s-6);
  font-size: var(--fs-xs);
  cursor: pointer;
  background-color: ${(props) => (props.$active ? "#D9D9D9" : "#FFFFFF")};
  color: ${(props) => (props.$active ? "#1c1c1c" : "#D9D9D9")};
  @media ${DEVICES.DESKTOP} {
    padding: var(--s-2) var(--s-7);
    font-size: var(--fs-sm);
  }
`;

interface IBtnMyContributionProps {
  $active: boolean;
}
export const BtnMyContribution = styled.button<IBtnMyContributionProps>`
  padding: var(--s-2) var(--s-3);
  font-size: var(--fs-xs);
  cursor: pointer;
  color: ${(props) => (props.$active ? "#1c1c1c" : "#D9D9D9")};
  background-color: ${(props) => (props.$active ? "#D9D9D9" : "#FFFFFF")};
  @media ${DEVICES.DESKTOP} {
    padding: var(--s-2) var(--s-4);
    font-size: var(--fs-sm);
  }
`;

export const Search = styled.div`
  display: none;
  @media ${DEVICES.DESKTOP} {
    display: unset;
  }
`;

export const Input = styled.div`
  position: relative;
  input {
    font-size: var(--fs-md);
    border: 1px solid rgba(126, 136, 137, 1);
    border-radius: var(--br-md);
    padding: var(--s-1) var(--s-9) var(--s-1) var(--s-2);
    &::-webkit-search-cancel-button {
      -webkit-appearance: none;
      display: none;
    }
  }
`;

export const Icon = styled.div`
  position: absolute;
  right: 0;
  top: 0;
  margin-top: var(--s-2);
  margin-right: var(--s-2);
`;

export const ListItem = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: var(--s-2);

  @media ${DEVICES.DESKTOP} {
    display: flex;
    flex-wrap: nowrap;
    gap: var(--s-4);
  }
`;

export const Item = styled(BaseItem)`
  width: 48%;
  @media ${DEVICES.DESKTOP} {
    width: 24%;
  }
`;

export const BtnLoadMore = styled(FormButton)`
  margin-top: 0;
  font-size: var(--fs-md);
  padding: var(--s-2) var(--s-4);
  @media ${DEVICES.DESKTOP} {
    display: none;
  }
`;
