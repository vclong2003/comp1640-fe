import { DEVICES } from "@config/responsiveBreakpoints";
import styled from "styled-components";
import { default as BaseItem } from "@components/ContributionItem/ContributionItem";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: var(--s-3);
`;

export const Title = styled.div`
  font-size: var(--fs-lg);
  font-weight: var(--fw-semibold);
  @media ${DEVICES.DESKTOP} {
    font-size: var(--fs-xl);
  }
`;

export const PopularContributionItemsContainer = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  gap: var(---s-2);
  justify-content: space-between;
`;

export const Item = styled(BaseItem)`
  width: 48%;

  @media ${DEVICES.DESKTOP} {
    width: 24%;
  }
`;
