import { FormButton } from "@components/formComponents";
import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  position: relative;
  justify-content: space-between;
`;

export const Image = styled.img`
  width: 100%;
  height: 650px;
`;

export const TextContainer = styled.div`
  position: absolute;
  bottom: 0;
  padding: var(--s-6) var(--s-6);
  color: white;
  display: flex;
  flex-direction: column;
  flex: 7;
`;

export const Title = styled.div`
  font-size: 40px;
  padding: var(--s-5) 0;
  font-weight: bold;
`;

export const Description = styled.div`
  font-size: var(--fs-lg);
  padding: var(--s-5) 0;
  padding-right: var(--s-40);
  width: auto;
`;

export const Bottom = styled.div`
  font-size: var(--fs-3xl);
`;

export const Date = styled.div`
  display: flex;
  gap: var(--s-4);
  align-items: center;
`;

export const Icon = styled.div`
  padding-top: var(--s-2);
`;

export const Text = styled.div``;

export const BtnAdd = styled(FormButton)`
  float: right;
  padding: var(--s-2) var(--s-8);
  background-color: var(--yellow);
  color: white;
  cursor: pointer;
  font-size: var(--fs-md);
  border-radius: var(--br-md);
  &:hover {
    background-color: rgba(231, 205, 23, 0.5);
  }
`;

export const Button = styled.div`
  position: absolute;
  right: 0;
  bottom: 0;
  padding: var(--s-4) var(--s-3);
  flex: 5;
`;
