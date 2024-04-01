import * as S from "./HightLight.styled";
import image from "../../../assets/images/detail.png";
import { IoIosTimer } from "react-icons/io";
import { Formik } from "formik";

const HightLight = () => {
  return (
    <S.Container>
      <S.Image src={image} />
      <S.TextContainer>
        <S.Title>Event 1</S.Title>
        <S.Bottom>
          <S.Description>
            Description is any type of communication that aims to make vivid a
            place, object, person, group, or other physical entity. Description
            is one of four rhetorical modes, along with exposition,
            argumentation, and narration.
          </S.Description>
          <S.Date>
            <S.Text>
              <IoIosTimer />
              Sunday, March 24 - Sunday, March 30
            </S.Text>
            <Formik>
              <S.BtnAdd>Add contribution</S.BtnAdd>
            </Formik>
          </S.Date>
        </S.Bottom>
      </S.TextContainer>
    </S.Container>
  );
};

export default HightLight;
