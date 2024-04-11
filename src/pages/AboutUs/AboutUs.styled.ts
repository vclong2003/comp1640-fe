import { FormButton } from "@components/formComponents";
import { DEVICES } from "@config/responsiveBreakpoints";
import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  padding: var(--s-6) var(--s-8);
  margin-bottom: var(--s-6);
`;

export const Title = styled.div`
  width: 100%;
  justify-content: center;
  display: flex;
  font-size: var(--fs-2xl);
  font-weight: var(--fw-semibold);
  margin-bottom: var(--s-4);
  @media ${DEVICES.DESKTOP} {
    font-size: var(--fs-3xl);
    margin-bottom: var(--s-4);
  }
`;

export const LeftContent = styled.div`
  flex: 7;
  display: flex;
  flex-direction: column;
  padding: var(--s-5) 0;
  @media ${DEVICES.DESKTOP} {
    padding: var(--s-10) var(--s-6);
  }
`;

export const Text = styled.div`
  font-size: var(--fs-xl);
  margin-bottom: var(--s-4);
  font-weight: var(--fw-semibold);
  @media ${DEVICES.DESKTOP} {
    font-size: var(--fs-2xl);
    margin-bottom: var(--s-4);
  }
`;

export const Description = styled.div`
  font-size: var(--fs-md);
  margin-bottom: var(--s-0);
  line-height: 1.3;
  @media ${DEVICES.DESKTOP} {
    font-size: var(--fs-lg);
    margin-bottom: var(--s-10);
  }
`;

export const Button = styled(FormButton)`
  display: flex;
  justify-content: center;
  font-size: var(--fs-md);
  width: 50%;
  @media ${DEVICES.DESKTOP} {
    width: 20%;
  }
`;

export const RightContent = styled.div`
  width: 100%;
  display: none;
  @media ${DEVICES.DESKTOP} {
    flex: 5;
    display: unset;
  }
`;

export const Image = styled.img`
  aspect-ratio: 4/3;
  object-fit: cover;
  width: 100%;
  height: 100%;
  border-radius: var(--br-lg);
`;
