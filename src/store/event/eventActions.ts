import {
  ICreatEventPayload,
  IDeleteEventPayload,
  IEvent,
  IFindEventsPayload,
} from "@interfaces/event.interfaces";
import { createAsyncThunk } from "@reduxjs/toolkit";
import eventService from "@service/api/event";

// Find events -------------------------------------------
export const findEvents = createAsyncThunk(
  "eventState/findEvents",
  async (payload: IFindEventsPayload) => {
    return await eventService.findEvents(payload);
  },
);

// Create event ------------------------------------------
export const createEvent = createAsyncThunk(
  "eventState/createEvent",
  async (payload: ICreatEventPayload) => {
    return await eventService.createEvent(payload);
  },
);

// Update event ------------------------------------------
export const updateEvent = createAsyncThunk(
  "eventState/updateEvent",
  async (payload: IEvent) => {
    return await eventService.updateEvent(payload);
  },
);

// Delete event ------------------------------------------
export const deleteEvent = createAsyncThunk(
  "eventState/deleteEvent",
  async (payload: IDeleteEventPayload) => {
    await eventService.deleteEvent(payload);
    return payload;
  },
);
