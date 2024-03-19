import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  padding: var(--s-6) var(--s-10);
  gap: var(--s-10);
`;

export const LeftContainer = styled.div`
  flex: 8;
  display: flex;
  flex-direction: column;
  gap: var(--s-13);
`;

export const Name = styled.div`
  display: flex;
  gap: var(--s-6);
`;

export const FirstName = styled.div`
  flex: 6;
  input {
    width: 100%;
    height: 30px;
    padding: var(--s-5);
    font-size: 18px;
    border: 1px solid rgba(0, 0, 0, 0.2);
    border-radius: 5px;
    &:hover {
      background-color: #dedede;
    }
  }
`;

export const Text = styled.div`
  font-weight: bold;
  font-size: 20px;
`;

export const LastName = styled.div`
  flex: 6;
  input {
    width: 100%;
    height: 28px;
    padding: var(--s-5);
    font-size: 18px;
    border: 1px solid rgba(0, 0, 0, 0.2);
    border-radius: 5px;
    &:hover {
      background-color: #dedede;
    }
  }
`;

export const Email = styled.div`
  input {
    width: 100%;
    height: 30px;
    padding: var(--s-5);
    font-size: 18px;
    border: 1px solid rgba(0, 0, 0, 0.2);
    border-radius: 5px;
    &:hover {
      background-color: #dedede;
    }
  }
`;

export const Address = styled.div`
  input {
    width: 100%;
    height: 30px;
    padding: var(--s-5);
    font-size: 18px;
    border: 1px solid rgba(0, 0, 0, 0.2);
    border-radius: 5px;
    &:hover {
      background-color: #dedede;
    }
  }
`;

export const ContactNumber = styled.div`
  input {
    width: 100%;
    height: 30px;
    padding: var(--s-5);
    font-size: 18px;
    border: 1px solid rgba(0, 0, 0, 0.2);
    border-radius: 5px;
    &:hover {
      background-color: #dedede;
    }
  }
`;

export const Password = styled.div`
  input {
    width: 100%;
    height: 30px;
    padding: var(--s-5);
    font-size: 18px;
    border: 1px solid rgba(0, 0, 0, 0.2);
    border-radius: 5px;
    &:hover {
      background-color: #dedede;
    }
  }
`;

export const RightContainer = styled.div`
  display: flex;
  flex: 4;
  flex-direction: column;
  gap: var(--s-10);
`;

export const Avatar = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: var(--s-5);
`;

export const Image = styled.div`
  padding: 0 var(--s-30);
`;

export const ImgAva = styled.img`
  border-radius: 50%;
  z-index: 0;
  width: 100%;
  height: auto;
`;

export const ChangeAva = styled.div``;

export const BtnChangeAva = styled.button`
  background-color: #236192;
  padding: var(--s-3) var(--s-6);
  border-radius: 10px;
  cursor: pointer;
  color: white;
  &:hover {
    background-color: rgba(46, 111, 194, 0.7);
  }
`;

export const Gender = styled.div`
  display: flex;
  flex-direction: column;
  gap: var(--s-5);
`;

export const GenderType = styled.div`
  font-size: 20px;
  input {
    cursor: pointer;
  }
`;

export const Birthday = styled.div`
  display: flex;
  flex-direction: column;
  gap: var(--s-5);
`;

export const Date = styled.div`
  input {
    font-size: 20px;
    cursor: pointer;
  }
`;
