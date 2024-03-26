import * as S from "./EventEdit.styled";
import HightLight from "./HightLight/HightLight";
import ListEvent from "./ListEvent/ListEvent";

const EventDetail = () => {
  return (
    <S.Container>
      <S.HightLightEvent>
        <HightLight />
      </S.HightLightEvent>
      <S.ListEvent>
        <ListEvent />
      </S.ListEvent>
    </S.Container>
  );
};

export default EventDetail;
