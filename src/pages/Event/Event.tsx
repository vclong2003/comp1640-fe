import * as S from "./Event.styled";
import moment from "moment";
import {
  Calendar,
  Event as EventItem,
  momentLocalizer,
} from "react-big-calendar";
import Container from "@components/Container/Container";
const localizer = momentLocalizer(moment);

import PLaceholderBanner from "@assets/images/banner_placeholder.jpg";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "@store/index";
import { useEffect } from "react";
import { findEvents } from "@store/event/eventActions";
import { getCalendarEvents } from "@utils/event.utils";
import { IEvent } from "@interfaces/event.interfaces";

export default function Event() {
  const { events } = useSelector((state: RootState) => state.eventState);
  const dispatch = useDispatch<AppDispatch>();

  useEffect(() => {
    dispatch(findEvents({}));
  }, [dispatch]);

  const eventStyleGetter = (event: EventItem) => {
    const eventData: IEvent = JSON.parse(event.resource);
    const style = {
      backgroundColor: eventData.is_accepting_new_contribution
        ? "var(--green)"
        : "var(--red)",
    };
    return {
      style,
    };
  };

  return (
    <Container>
      <S.Event>
        <S.BannerImageContainer>
          <S.BannerImage src={PLaceholderBanner} alt="Banner" />
          <S.BannerText>
            <S.FacultyName>Gryffindor</S.FacultyName>
            <S.FacultyDescription>
              Gryffindors are known for being bold, courageous, and adventurous.
              Brave Gryffindors never shy away from a challenge, and they
              fearlessly pursue their goals. Gryffindors are chivalrous and have
              strong moral compasses. They believe in using their strength and
              courage to do what's right.
            </S.FacultyDescription>
          </S.BannerText>
        </S.BannerImageContainer>
        <Calendar
          localizer={localizer}
          startAccessor="start"
          endAccessor="end"
          style={{ height: 500 }}
          events={getCalendarEvents(events)}
          onSelectEvent={(event) => alert(event.resource)}
          eventPropGetter={eventStyleGetter}
        />
      </S.Event>
    </Container>
  );
}
