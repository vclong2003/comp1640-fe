import Container from "@components/Container/Container";
import * as S from "./EventDetail.styled";
import HightLight from "./HightLight/HightLight";
import ListEvent from "./ListEvent/ListEvent";
import { useEffect, useState } from "react";
import { IEvent } from "@interfaces/event.interfaces";
import eventService from "@service/event";
import { useParams } from "react-router-dom";

const EventDetail = () => {
  const { eventId } = useParams();
  const [event, setEvent] = useState<IEvent>();

  useEffect(() => {
    if (!eventId) return;
    eventService
      .findEventById({ _id: eventId })
      .then((event) => setEvent(event));
  }, [eventId]);

  return (
    <Container>
      <S.Container>
        <S.HightLightEvent>
          <HightLight event={event} />
        </S.HightLightEvent>
        <S.ListEvent>
          <ListEvent event={event} />
        </S.ListEvent>
      </S.Container>
    </Container>
  );
};

export default EventDetail;
