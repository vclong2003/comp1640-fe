import { IEventState } from "@interfaces/event.interfaces";
import { createSlice } from "@reduxjs/toolkit";
import {
  createEvent,
  deleteEvent,
  findEvents,
  updateEvent,
} from "./eventActions";

const name = "eventState";
const initialState: IEventState = {
  events: [],
};

const eventState = createSlice({
  name,
  initialState,
  reducers: {},
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
