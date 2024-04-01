import { FormButton } from "@components/formComponents";
import { DEVICES } from "@config/responsiveBreakpoints";
import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Header = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding-bottom: var(--s-3);
  border-bottom: 2px solid var(--dark-gray);
`;

export const TitleHeader = styled.div`
  font-size: var(--fs-md);
  font-weight: var(--fw-semibold);
  @media ${DEVICES.DESKTOP} {
    font-size: var(--fs-2xl);
  }
`;

export const Filters = styled.div`
  display: flex;
  flex-direction: row;
  gap: var(--s-2);
`;

export const Icon = styled.div``;

export const Text = styled.div``;

export const Content = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-between;
  padding: var(--s-4) 0;
  gap: var(--s-3);
`;

export const Bottom = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
`;

export const Button = styled(FormButton)`
  padding: var(--s-2) var(--s-8);
  background-color: var(--black);
  font-size: var(--fs-md);
  font-weight: var(--fw-normal);
`;
