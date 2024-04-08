import { IFindEventByIdPayload } from "@interfaces/event.interfaces";
import {
  ICreateFacultyPayload,
  IFaculty,
  IFindFacultiesPayload,
  IMoveStudentPayload,
  IRemoveStudentPayload,
  IUpdateFacultyPayload,
  IFindFacultyByIdPayload,
  IGetFacultyByIdPayload,
} from "@interfaces/faculty.interfaces";
import { axiosInstance } from "@lib/axios.lib";
import { objectToFormData } from "@utils/data.utils";
import { buildQueryString } from "@utils/string.utils";

// Find faculties -------------------------------------------
const findFaculties = async (
  payload: IFindFacultiesPayload,
): Promise<IFaculty[]> => {
  const queryString = buildQueryString(payload as { [key: string]: unknown });
  return await axiosInstance.get(`/faculty${queryString}`);
};

// Find faculty by id ----------------------------------------
const findFacultyById = async (
  payload: IFindEventByIdPayload,
): Promise<IFaculty> => {
  const { _id } = payload;
  return await axiosInstance.get(`/faculty/${_id}`);
};

// Create faculty ------------------------------------------
const createFaculty = async (
  payload: ICreateFacultyPayload,
): Promise<IFaculty> => {
  return await axiosInstance.post(
    "/faculty",
    objectToFormData({ ...payload }),
    {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    },
  );
};

// Update faculty ------------------------------------------
const updateFaculty = async (
  payload: IUpdateFacultyPayload,
): Promise<IFaculty> => {
  const { _id, ...rest } = payload;
  return await axiosInstance.put(
    `/faculty/${_id}`,
    objectToFormData({ ...rest }),
  );
};

// Get Faculty By Id --------------------------------------------------
const getFacultyById = async (
  payload: IGetFacultyByIdPayload,
): Promise<IFaculty> => {
  return await axiosInstance.get(`/faculty/${payload.id}`);
};

// Delete faculty ----------------------------------------------------------------
const deleteFaculty = async (
  payload: IFindFacultyByIdPayload,
): Promise<void> => {
  const { _id } = payload;
  return await axiosInstance.delete(`/faculty/${_id}`);
};

// Move student --------------------------------------------
const moveStudent = async (payload: IMoveStudentPayload): Promise<void> => {
  const { facultyId, studentId } = payload;
  return await axiosInstance.put(`/faculty/${facultyId}/student/${studentId}`);
};

// Remove student ------------------------------------------
const removeStudent = async (payload: IRemoveStudentPayload): Promise<void> => {
  const { facultyId, studentId } = payload;
  return await axiosInstance.delete(
    `/faculty/${facultyId}/student/${studentId}`,
  );
};

export default {
  findFaculties,
  findFacultyById,
  createFaculty,
  updateFaculty,
  moveStudent,
  removeStudent,
  deleteFaculty,
  getFacultyById,
};
