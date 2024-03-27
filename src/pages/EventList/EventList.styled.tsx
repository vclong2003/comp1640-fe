import moment from "moment";
import { Calendar, Event, momentLocalizer } from "react-big-calendar";
import Container from "../../components/Container/Container";

const localizer = momentLocalizer(moment);

const events: Event[] = [
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

export default function EventList() {
  return (
    <Container>
      <Calendar
        localizer={localizer}
        startAccessor="start"
        endAccessor="end"
        style={{ height: 500 }}
        events={events}
        onSelectEvent={(event) => alert(event.resource)}
      />
    </Container>
  );
}
