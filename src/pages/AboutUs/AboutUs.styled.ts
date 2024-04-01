import styled from "styled-components";

export const Container = styled.div`
  text-align: center;
  min-height: 100vh;
`;

export const Header = styled.header`
  width: 98%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  text-align: center;
  margin: 20px auto;
`;

export const Title = styled.h1`
  font-size: 55px;
  text-transform: uppercase;
  margin-bottom: 20px;
  position: relative;
`;

export const Section = styled.section`
  display: flex;
  align-items: center;
  width: 85%;
  margin: auto;
  padding-bottom: 30px;
`;

export const ContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  flex: 0 50%;
  padding: 30px;
  height: 100%;
`;

export const Image = styled.img`
  flex: 0 50%;
  max-width: 50%;
  height: auto;
  margin: 5px;
  border-radius: 10px;
`;

export const ContentTitle = styled.h2`
  font-size: 35px;
  margin: 0;
  margin-bottom: 20px;
  text-align: left;
`;

export const ContentParagraph = styled.p`
  color: #666;
  font-size: 20px;
  line-height: 1.5;
  margin: 0;
  margin-bottom: 30px;
  text-align: left;
`;

export const ButtonContainer = styled.div`
  text-align: left;
  margin-bottom: 20px;
`;

export const Button = styled.button`
  display: inline-block;
  background-color: #ffa500;
  border: none;
  border-radius: 10px;
  padding: 15px 30px;
  cursor: pointer;

  &:hover {
    background-color: orangered;
  }
`;
