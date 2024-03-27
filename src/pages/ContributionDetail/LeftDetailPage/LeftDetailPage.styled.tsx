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
  border-radius: var(--br-lg);
  z-index: 0;
  width: 100%;
  height: auto;
`;

export const Text = styled.div`
  position: absolute;
  z-index: 1;
`;

export const Status = styled.div`
  padding: var(--s-10) var(--s-10);
  top: 0;
`;
export const TextStatus = styled.div`
  background-color: #71984a;
  padding: var(--s-2) var(--s-6);
  border-radius: 30px;
  color: white;
  font-size: 20px;
`;

export const Icon = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  z-index: 1;
  padding: var(--s-10) var(--s-10);
  top: 0;
  font-size: 30px;
`;

export const Bottom = styled.div`
  position: absolute;
  bottom: 0;
  padding: var(--s-10) var(--s-5);
`;

export const Description = styled.div`
  color: white;
  font-size: var(--fs-3xl);
  padding: var(--s-15) 0;
`;

export const Author = styled.div`
  font-size: 30px;
  color: white;
`;

export const BottomContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: var(--s-10) var(--s-10);
  gap: var(--s-7);
`;

export const Title = styled.div`
  display: flex;
  flex-direction: row;
  gap: var(--s-6);
  font-size: var(--fs-2xl);
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
  gap: var(--s-4);
  align-items: center;
`;

export const ImageAva = styled.img`
  width: 48px;
  height: 48px;
`;

export const InputCmt = styled.input`
  flex: 1;
  width: 100%;
  border: 1px solid rgba(179, 180, 179, 1);
  padding: var(--s-2) var(--s-8);
  border-radius: var(--fs-md);
  font-size: 20px;
`;

export const IconSent = styled.div`
  font-size: 20px;
`;
