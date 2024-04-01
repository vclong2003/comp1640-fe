import * as S from './AboutUs.styled';

const AboutUs = () => {
  return (
    <S.Container>
      <S.Header>
        <S.Title>About Us</S.Title> 
      </S.Header>
      <S.Section>
        <S.ContentContainer>
          <S.ContentTitle>We Help To Get Solutions</S.ContentTitle>
          <S.ContentParagraph>
            Lorem Ipsum is simply dummy text of the printing and
            typesetting industry. Lorem Ipsum has been the
            industry's standard dummy text ever since the 1500s.
            The lightness of a color can be described as how much light you want to give the color, where 0% means no light (black), 50% means
          </S.ContentParagraph>
          <S.ButtonContainer>
            <S.Button>OUR TEAM</S.Button>
          </S.ButtonContainer>
        </S.ContentContainer>
        <S.Image src="https://www.w3schools.com/w3images/team1.jpg" alt="" />
      </S.Section>
    </S.Container>
  );
};

export default AboutUs;