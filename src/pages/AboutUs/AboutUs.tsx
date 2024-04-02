import Container from "@components/Container/Container";
import * as S from "./AboutUs.styled";
import image from "../../assets/images/unsplash_JaoVGh5aJ3E.png";

const AboutUs = () => {
  return (
    <Container>
      <S.Container>
        <S.Title>About Us</S.Title>

        <S.LeftContent>
          <S.Text>We Help To Get Solutions</S.Text>
          <S.Description>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s.
          </S.Description>
          <S.Button>Our Team</S.Button>
        </S.LeftContent>
        <S.RightContent>
          <S.Image src={image}></S.Image>
        </S.RightContent>
      </S.Container>
    </Container>
  );
};

export default AboutUs;
