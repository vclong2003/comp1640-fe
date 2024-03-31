import { IFacultyState } from "@interfaces/faculty.interfaces";
import { createSlice } from "@reduxjs/toolkit";
import { createFaculty, findFaculties, updateFaculty } from "./facultyActions";

const name = "facultyState";
const initialState: IFacultyState = {
  faculties: [],
  faculty: null,
};

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
  },
});

export default facultyState;
