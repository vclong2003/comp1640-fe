import * as S from "./HightLight.styled";
import image from "../../../assets/images/detail.png";
import { IoIosTimer } from "react-icons/io";
import { IEvent } from "@interfaces/event.interfaces";
import { toLocaleDateTime } from "@utils/date.utils";

interface IHightLightProps {
  event?: IEvent;
}

const HightLight = ({ event }: IHightLightProps) => {
  return (
    <S.Container>
      <S.Image src={image} />
      <S.TextContainer>
        <S.Title>{event && event.name}</S.Title>
        <S.Bottom>
          <S.Description>{event && event.description}</S.Description>
          <S.Date>
            <S.Text>
              <IoIosTimer />
              {event && toLocaleDateTime(event.start_date)} -{" "}
              {event && toLocaleDateTime(event.first_closure_date)}
            </S.Text>
            {event?.is_accepting_new_contribution && (
              <S.BtnAdd>Add contribution</S.BtnAdd>
            )}
          </S.Date>
        </S.Bottom>
      </S.TextContainer>
    </S.Container>
  );
};

export default HightLight;