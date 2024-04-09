import {
  ICreateEventPayload,
  IEventState,
  IUpdateEventPayload,
} from "@interfaces/event.interfaces";
import { createSlice } from "@reduxjs/toolkit";
import {
  IDeleteEventPayload,
  IFindEventsPayload,
} from "@interfaces/event.interfaces";
import { createAsyncThunk } from "@reduxjs/toolkit";
import eventService from "@service/event";

const name = "eventState";
const initialState: IEventState = {
  events: [],
  filter: {},
};

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
  async (payload: ICreateEventPayload) => {
    return await eventService.createEvent(payload);
  },
);

// Update event ------------------------------------------
export const updateEvent = createAsyncThunk(
  "eventState/updateEvent",
  async (payload: IUpdateEventPayload) => {
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

const eventState = createSlice({
  name,
  initialState,
  reducers: {
    setFilter: (state, action) => {
      state.filter = action.payload;
    },
  },
  extraReducers: (builder) => {
    // Find events ------------------------------------------------
    builder.addCase(findEvents.fulfilled, (state, action) => {
      state.events = action.payload;
    });
    // Create event -----------------------------------------------
    builder.addCase(createEvent.fulfilled, (state, action) => {
      state.events.push(action.payload);
    });
    // Update event -----------------------------------------------
    builder.addCase(updateEvent.fulfilled, (state, action) => {
      state.events = state.events.map((event) => {
        if (event._id === action.payload._id) {
          return action.payload;
        }
        return event;
      });
    });
    // Delete event -----------------------------------------------
    builder.addCase(deleteEvent.fulfilled, (state, action) => {
      state.events = state.events.filter(
        (event) => event._id !== action.payload._id,
      );
    });
  },
});

export default eventState;
export const { setFilter } = eventState.actions;
