import { IFacultyState } from "@interfaces/faculty.interfaces";
import { createSlice } from "@reduxjs/toolkit";
import { findFaculties } from "./facultyActions";

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
    builder.addCase(findFaculties.fulfilled, (state, action) => {
      console.log(action.payload);
      state.faculties = action.payload;
    });
  },
});

export default facultyState;
