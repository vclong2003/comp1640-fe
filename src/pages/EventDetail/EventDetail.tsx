import Container from "@components/Container/Container";
import * as S from "./EventDetail.styled";
import HightLight from "./HightLight/HightLight";
import ListEvent from "./ListEvent/ListEvent";

const EventDetail = () => {
  return (
    <Container>
      <S.Container>
        <S.HightLightEvent>
          <HightLight />
        </S.HightLightEvent>
        <S.ListEvent>
          <ListEvent />
        </S.ListEvent>
      </S.Container>
    </Container>
  );
};

export default EventDetail;
