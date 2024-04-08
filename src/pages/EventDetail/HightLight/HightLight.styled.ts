import { FormButton } from "@components/formComponents";
import styled from "styled-components";
import { DEVICES } from "@config/responsiveBreakpoints";

export const Container = styled.div`
  display: flex;
  position: relative;
  max-height: 80vh;
`;

export const Image = styled.img`
  width: 100%;
  height: auto;
  object-fit: cover;
  aspect-ratio: 1;
  border-radius: var(--br-md);
  aspect-ratio: 21/9;
`;

export const TextContainer = styled.div`
  position: absolute;
  bottom: 0;
  color: white;
  display: flex;
  flex-direction: column;
  flex: 7;
  width: 100%;
  border-radius: 0 0 var(--br-md) var(--br-md);
  @media ${DEVICES.DESKTOP} {
    border-radius: 0 0 var(--br-lg) var(--br-lg);
  }
`;

export const Title = styled.div`
  font-size: var(--fs-xl);
  margin-bottom: var(--s-2);
  font-weight: var(--fw-semibold);
  padding: 0 var(--s-1);
  @media ${DEVICES.DESKTOP} {
    font-size: var(--fs-4xl);
    margin-bottom: var(--s-5);
    padding: 0 var(--s-6);
  }
`;

export const Description = styled.div`
  font-size: var(--fs-xs);
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
  padding: 0 var(--s-1);
  @media ${DEVICES.DESKTOP} {
    padding: 0 var(--s-6);
    font-size: var(--fs-md);
    margin-bottom: var(--s-3);
  }
`;

export const Bottom = styled.div``;

export const Date = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 var(--s-1);
  @media ${DEVICES.DESKTOP} {
    padding: 0 var(--s-6);
  }
`;

export const Text = styled.div`
  align-items: center;
  display: flex;
  gap: var(--s-1);
  font-size: var(--fs-xs);
  margin-bottom: 0;
  @media ${DEVICES.DESKTOP} {
    gap: var(--s-2);
    font-size: var(--fs-2xl);
  }
`;

export const BtnAdd = styled(FormButton)`
  float: right;
  padding: var(--s-1) var(--s-1);
  background-color: var(--yellow);
  color: white;
  cursor: pointer;
  font-size: var(--fs-xs);
  border-radius: var(--br-md);
  &:hover {
    background-color: rgba(231, 205, 23, 0.5);
  }
  @media ${DEVICES.DESKTOP} {
    padding: var(--s-2) var(--s-8);
    font-size: var(--fs-md);
  }
`;
