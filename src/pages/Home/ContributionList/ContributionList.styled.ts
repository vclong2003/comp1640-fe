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
  border-bottom: 2px solid var(--black);
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

export const Content = styled.div``;

export const Bottom = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
`;

export const Button = styled(FormButton)`
  padding: var(--s-3) var(--s-4);
  background-color: var(--blue);
`;
