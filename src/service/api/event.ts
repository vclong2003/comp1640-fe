import { IEvent, IFindEventsPayload } from "@interfaces/event.interfaces";

const findEvents = async (payload: IFindEventsPayload): Promise<IEvent[]> => {
  console.log("findEvents", payload);
  throw new Error("Not implemented");
};

export default { findEvents };
