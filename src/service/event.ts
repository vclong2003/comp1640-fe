import {
  ICreateEventPayload,
  IEvent,
  IFindEventByIdPayload,
  IFindEventsPayload,
  IUpdateEventPayload,
} from "@interfaces/event.interfaces";
import { axiosInstance } from "@lib/axios.lib";
import { objectToFormData } from "@utils/data.utils";
import { buildQueryString } from "@utils/string.utils";

// Create event ----------------------------------------------------------------
const createEvent = async (payload: ICreateEventPayload): Promise<IEvent> => {
  return await axiosInstance.post("/event", objectToFormData({ ...payload }), {
    headers: {
      "Content-Type": "multipart/form-data",
    },
  });
};

//Update event ----------------------------------------------------------------
const updateEvent = async (payload: IUpdateEventPayload): Promise<IEvent> => {
  const { _id, ...rest } = payload;
  return await axiosInstance.put(
    `/event/${_id}`,
    objectToFormData({ ...rest }),
    {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    },
  );
};

// Delete event ----------------------------------------------------------------
const deleteEvent = async (payload: IFindEventByIdPayload): Promise<void> => {
  const { _id } = payload;
  return await axiosInstance.delete(`/event/${_id}`);
};

// Find event by id ------------------------------------------------------------
const findEventById = async (
  payload: IFindEventByIdPayload,
): Promise<IEvent> => {
  const { _id } = payload;
  return await axiosInstance.get(`/event/${_id}`);
};

// Find events ----------------------------------------------------------------
const findEvents = async (payload: IFindEventsPayload): Promise<IEvent[]> => {
  const queryString = buildQueryString(payload as { [key: string]: unknown });
  return await axiosInstance.get(`/event${queryString}`);
};

export default {
  createEvent,
  findEvents,
  findEventById,
  updateEvent,
  deleteEvent,
};
