import { IEvent } from "@interfaces/event.interfaces";
import { Event } from "react-big-calendar";

export const getCalendarEvents = (events: IEvent[]): Event[] => {
  return events.map((event) => {
    const {
      _id,
      name,
      start_date,
      first_closure_date,
      is_accepting_new_contribution,
    } = event;
    return {
      title: name,
      start: new Date(start_date),
      end: new Date(first_closure_date),
      resource: JSON.stringify({ _id, is_accepting_new_contribution }),
    };
  });
};
