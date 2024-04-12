import Container from "@components/Container/Container";
import * as S from "./AboutUs.styled";
import image from "@assets/images/LandWater10.jpg";

const AboutUs = () => {
  return (
    <Container>
      <S.Container>
        <S.Title>About Us</S.Title>

        <S.LeftContent>
          <S.Text>We Help To Get Solutions</S.Text>
          <S.Description>
            Welcome to ALHQK, the premier platform for showcasing student
            creativity and talent at Greenwich. Our web-based secure role-based
            system facilitates the collection of student contributions for our
            annual university magazine, where innovation and expression thrive.
            Explore the diverse array of content curated by our vibrant
            community of students, faculty, and staff.
            <br />
            At ALHQK, we prioritize your privacy and security. Rest assured,
            your information is safeguarded according to the highest standards.
            For more details, please refer to our comprehensive Privacy Policy
            and Terms of Use.
            <br />
            We value your feedback and are here to assist you. Whether you have
            inquiries, suggestions, or simply want to connect, our team is ready
            to assist. Feel free to reach out to us via{" "}
            <a href="https://github.com/vclong2003">this address</a>
            <br />
            Stay inspired, stay connected, and join us in celebrating the spirit
            of creativity and collaboration at Greenwich. reserved.
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
