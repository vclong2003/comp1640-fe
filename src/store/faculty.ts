import {
  IDeleteFacultyPayload,
  IFacultyState,
} from "@interfaces/faculty.interfaces";
import { createSlice } from "@reduxjs/toolkit";
import facultyService from "@service/faculty";
import { createAsyncThunk } from "@reduxjs/toolkit";
import {
  ICreateFacultyPayload,
  IFindFacultiesPayload,
} from "@interfaces/faculty.interfaces";

const name = "facultyState";
const initialState: IFacultyState = {
  faculties: [],
  faculty: null,
};

// Find faculties --------------------------------------
export const findFaculties = createAsyncThunk(
  "facultyState/findFaculties",
  async (payload: IFindFacultiesPayload) => {
    return await facultyService.findFaculties(payload);
  },
);

// Create faculty --------------------------------------
export const createFaculty = createAsyncThunk(
  "facultyState/createFaculty",
  async (payload: ICreateFacultyPayload) => {
    return await facultyService.createFaculty(payload);
  },
);

// Update faculty --------------------------------------
export const updateFaculty = createAsyncThunk(
  "facultyState/updateFaculty",
  async (payload: ICreateFacultyPayload) => {
    return await facultyService.createFaculty(payload);
  },
);

// Delete event ------------------------------------------
export const deleteFaculty = createAsyncThunk(
  "eventState/deleteFaculty",
  async (payload: IDeleteFacultyPayload) => {
    await facultyService.deleteFaculty(payload);
    return payload;
  },
);

const facultyState = createSlice({
  name,
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    // Find faculties -------------------------------------------
    builder.addCase(findFaculties.fulfilled, (state, action) => {
      state.faculties = action.payload;
    });
    // Create faculty -------------------------------------------
    builder.addCase(createFaculty.fulfilled, (state, action) => {
      state.faculties.push(action.payload);
    });
    // Update faculty -------------------------------------------
    builder.addCase(updateFaculty.fulfilled, (state, action) => {
      state.faculties = state.faculties.map((faculty) =>
        faculty._id === action.payload._id ? action.payload : faculty,
      );
    });
    // Delete faculty ---------------------------------------------
    builder.addCase(deleteFaculty.fulfilled, (state, action) => {
      state.faculties = state.faculties.filter(
        (faculty) => faculty._id !== action.payload._id,
      );
    });
  },
});

export default facultyState;
