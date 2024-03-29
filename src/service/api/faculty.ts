import {
  IFaculty,
  IFindFacultiesPayload,
} from "@interfaces/faculty.interfaces";
import { axiosInstance } from "@lib/axios.lib";
import { buildQueryString } from "@utils/string.utils";

const findFaculties = async (
  payload: IFindFacultiesPayload,
): Promise<IFaculty[]> => {
  const queryString = buildQueryString(payload as { [key: string]: unknown });
  return await axiosInstance.get(`/faculty${queryString}`);
};

export default { findFaculties };
