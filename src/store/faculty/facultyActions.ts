import facultyService from "@service/faculty";
import { createAsyncThunk } from "@reduxjs/toolkit";
import {
  ICreateFacultyPayload,
  IFindFacultiesPayload,
} from "@interfaces/faculty.interfaces";

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
