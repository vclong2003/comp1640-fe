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

const eventsTest: EventItem[] = [
  {
    title: "Test event",
    start: new Date("2024-03-20T10:00:00"),
    end: new Date("2024-03-20T12:00:00"),
    resource: "you select vcl event",
  },
  {
    title: "Test event 1",
    start: new Date("2024-03-21T10:00:00"),
    end: new Date("2024-03-21T19:00:00"),
    resource: "you select event 1",
  },
  {
    title: "Test long event",
    start: new Date("2024-03-22T12:00:00"),
    end: new Date("2024-04-22T14:00:00"),
    resource: "you select long event",
  },
];

export default function Event() {
  const { events } = useSelector((state: RootState) => state.eventState);
  const dispatch = useDispatch<AppDispatch>();

  useEffect(() => {
    dispatch(findEvents({}));
  }, [dispatch]);

  useEffect(() => {
    console.log(events);
  }, [events]);

  const eventStyleGetter = (event: EventItem) => {
    const backgroundColor =
      event.resource === "you select event 1" ? "red" : "blue";
    const style = {
      backgroundColor,
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
          events={eventsTest}
          onSelectEvent={(event) => alert(event.resource)}
          eventPropGetter={eventStyleGetter}
        />
      </S.Event>
    </Container>
  );
}
