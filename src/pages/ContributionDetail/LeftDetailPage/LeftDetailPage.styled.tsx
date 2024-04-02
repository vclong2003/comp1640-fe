import { FormInput } from "@components/formComponents";
import { DEVICES } from "@config/responsiveBreakpoints";
import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
`;

export const TopContainer = styled.div`
  position: relative;
  display: flex;
`;

export const Image = styled.img`
  border-radius: var(--br-md);
  z-index: 0;
  width: 100%;
  height: 100%;
  aspect-ratio: 16/9;
  object-fit: cover;
`;

export const Text = styled.div`
  position: absolute;
  z-index: 1;
`;

export const Status = styled.div`
  margin: var(--s-2) var(--s-1);
  top: 0;
  @media ${DEVICES.DESKTOP} {
    margin: var(--s-3) var(--s-3);
  }
`;
export const TextStatus = styled.div`
  background-color: #71984a;
  padding: var(--s-1) var(--s-3);
  border-radius: var(--br-md);
  color: white;
  font-size: var(--fs-xs);
  @media ${DEVICES.DESKTOP} {
    padding: var(--s-2) var(--s-6);
    font-size: var(--fs-sm);
  }
`;

export const Icon = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  z-index: 1;
  margin: var(--s-2) var(--s-1);
  top: 0;
  font-size: var(--fs-xl);
  @media ${DEVICES.DESKTOP} {
    margin: var(--s-3) var(--s-3);
    font-size: var(--fs-2xl);
  }
`;

export const Bottom = styled.div`
  position: absolute;
  bottom: 0;
  padding: var(--s-5) var(--s-2);
  @media ${DEVICES.DESKTOP} {
    padding: var(--s-10) var(--s-5);
  }
`;

export const Description = styled.div`
  color: white;
  font-size: var(--fs-lg);
  margin-bottom: var(--s-3);
  font-weight: bold;
  @media ${DEVICES.DESKTOP} {
    font-size: var(--fs-2xl);
    margin-bottom: var(--s-5);
  }
`;

export const Author = styled.div`
  color: white;
`;

export const BottomContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin: var(--s-5) 0;
  gap: var(--s-7);
`;

export const Title = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: var(--s-1);
  font-size: var(--fs-lg);
  border-bottom: 2px solid black;
  @media ${DEVICES.DESKTOP} {
    gap: var(--s-2);
    font-size: var(--fs-xl);
  }
`;

export const ContainerComment = styled.div`
  display: flex;
  flex-direction: column;
  gap: var(--s-4);
`;

export const Person = styled.div``;

export const TextCmt = styled.div`
  font-weight: bold;
`;

export const CmtItem = styled.div`
  width: 100%;
`;

export const AddCmt = styled.div`
  display: flex;
  flex-direction: row;
  gap: var(--s-2);
  align-items: center;
`;

export const ImageAva = styled.div`
  width: 48px;
  height: 48px;
`;

export const InputCmt = styled(FormInput)`
  flex: 1;
  width: 100%;
  border: 1px solid rgba(179, 180, 179, 1);
  padding: var(--s-1) var(--s-3);
  border-radius: var(--br-lg);
  font-size: var(--fs-md);
  background-color: transparent;
`;

export const IconSent = styled.div`
  font-size: var(--fs-lg);
  cursor: pointer;
`;
