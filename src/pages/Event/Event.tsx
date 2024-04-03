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
import { useEffect, useState } from "react";
import { findEvents } from "@store/event/eventActions";
import { getCalendarEvents } from "@utils/event.utils";
import { IEvent } from "@interfaces/event.interfaces";
import { useNavigate } from "react-router";

import facultyService from "@service/api/faculty";
import { IFaculty } from "@interfaces/faculty.interfaces";

export default function Event() {
  const { events } = useSelector((state: RootState) => state.eventState);
  const { user } = useSelector((state: RootState) => state.userState);
  const dispatch = useDispatch<AppDispatch>();
  const navigate = useNavigate();

  const [faculty, setFaculty] = useState<IFaculty>();

  useEffect(() => {
    dispatch(findEvents({}));
  }, [dispatch]);

  useEffect(() => {
    const facultyId = user?.faculty?._id;
    if (!facultyId) return;
    facultyService
      .findFacultyById({ _id: user.faculty!._id })
      .then((faculty) => setFaculty(faculty));
  }, [user?.faculty]);

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

  const handleEventClick = (event: EventItem) => {
    const eventData: IEvent = JSON.parse(event.resource);
    navigate(`/event/${eventData._id}`);
  };

  return (
    <Container>
      <S.Event>
        <S.BannerImageContainer>
          <S.BannerImage
            src={faculty?.banner_image_url || PLaceholderBanner}
            alt="Banner"
          />
          <S.BannerText>
            <S.FacultyName>{faculty?.name}</S.FacultyName>
            <S.FacultyDescription>{faculty?.description}</S.FacultyDescription>
          </S.BannerText>
        </S.BannerImageContainer>
        <Calendar
          localizer={localizer}
          startAccessor="start"
          endAccessor="end"
          style={{ height: 500 }}
          events={getCalendarEvents(events)}
          onSelectEvent={handleEventClick}
          eventPropGetter={eventStyleGetter}
        />
      </S.Event>
    </Container>
  );
}
