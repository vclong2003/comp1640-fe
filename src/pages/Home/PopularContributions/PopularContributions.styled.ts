import { DEVICES } from "@config/responsiveBreakpoints";
import styled from "styled-components";
import { default as BaseItem } from "@components/Item/Item";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  overflow: auto;
`;

export const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: var(--s-2);
`;

export const Title = styled.div`
  font-size: var(--fs-md);
  font-weight: var(--fw-semibold);
  @media ${DEVICES.DESKTOP} {
    display: unset;
    font-size: var(--fs-xl);
  }
`;

export const MoveButtonsContainer = styled.div``;

export const LeftButton = styled.button``;

export const RightButton = styled.button``;

export const PopularContributionItemsContainer = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  @media ${DEVICES.DESKTOP} {
    display: flex;
    flex-wrap: nowrap;
    gap: var(--s-4);
    flex-direction: row;
  }
`;

export const Item = styled(BaseItem)`
  border-radius: var(--br-xl);
  width: 50%;
  box-shadow: var(--shadow-lg);
  @media ${DEVICES.DESKTOP} {
    display: unset;
  }
`;
