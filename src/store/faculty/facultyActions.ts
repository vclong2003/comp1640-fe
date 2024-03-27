import facultyService from "@service/api/faculty";
import { createAsyncThunk } from "@reduxjs/toolkit";
import { IFindFacultiesPayload } from "@interfaces/faculty.interfaces";

export const findFaculties = createAsyncThunk(
  "facultyState/findFaculties",
  async (payload: IFindFacultiesPayload) => {
    return await facultyService.findFaculties(payload);
  },
);
