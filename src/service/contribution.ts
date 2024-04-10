import {
  IAddCommentPayload,
  IAddContributionPayload,
  IAddContributionResponse,
  IComment,
  IContribution,
  IFindCommentsPayload,
  IFindContributionByIdPayload,
  IFindContributionsPayload,
  ILikeContributionPayload,
  IRemoveCommentPayload,
  IRemoveContributionFilePayload,
  IUpdateContriButionPayload,
  IDeleteContributionPayload,
  IGetContrubutionsPerYearPayload,
  IContributionsByFacultyYear,
  ITotalContributionsByFaculty,
  IDownloadContributionFilesPayload,
} from "@interfaces/contribution.interfaces";
import { axiosInstance } from "@lib/axios.lib";
import { objectToFormData } from "@utils/data.utils";
import { notifyError } from "@utils/notification.utils";
import { buildQueryString } from "@utils/string.utils";

// Add contribution ---------------------------------
const addContribution = async (
  payload: IAddContributionPayload,
): Promise<IAddContributionResponse> => {
  console.log("payload", objectToFormData({ ...payload }));
  return await axiosInstance.post(
    "/contribution",
    objectToFormData({ ...payload }),
    {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    },
  );
};

// Update contribution ------------------------------
const updateContribution = async (
  payload: IUpdateContriButionPayload,
): Promise<void> => {
  return await axiosInstance.put(
    `/contribution/${payload._id}`,
    objectToFormData({ ...payload }),
    {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    },
  );
};

// Remove contribution file -------------------------
const removeContributionFile = async (
  payload: IRemoveContributionFilePayload,
): Promise<void> => {
  return await axiosInstance.post(
    `/contribution/${payload.contributionId}/delete-file`,
    {
      file_url: payload.file_url,
    },
  );
};

// Find contribution by id ---------------------------
const findContributionById = async (
  payload: IFindContributionByIdPayload,
): Promise<IContribution> => {
  return await axiosInstance.get(`/contribution/${payload.contributionId}`);
};

// Find contributions --------------------------------
const findContributions = async (
  payload: IFindContributionsPayload,
): Promise<IContribution[]> => {
  const query = buildQueryString(payload as { [key: string]: unknown });
  return await axiosInstance.get(`/contribution${query}`);
};

// Find comments --------------------------------
const findAllComments = async (
  payload: IFindCommentsPayload,
): Promise<IComment[]> => {
  return await axiosInstance.get(
    `/contribution/${payload.contributionId}/comment`,
  );
};

// Add comment --------------------------------------
const addComment = async (payload: IAddCommentPayload): Promise<IComment> => {
  return await axiosInstance.post(
    `/contribution/${payload.contributionId}/comment`,
    {
      content: payload.content,
    },
  );
};

//Like contribution -----------------------------------
const likeContribution = async (
  payload: ILikeContributionPayload,
): Promise<void> => {
  return await axiosInstance.post(
    `/contribution/${payload.contributionId}/like`,
  );
};

// Find all private comments ----------------------------------------
const findAllPrivateComments = async (
  payload: IFindCommentsPayload,
): Promise<IComment[]> => {
  return await axiosInstance.get(
    `/contribution/${payload.contributionId}/comment/private`,
  );
};

// Add private comment ----------------------------------------------
const addPrivateComment = async (
  payload: IAddCommentPayload,
): Promise<IComment> => {
  return await axiosInstance.post(
    `/contribution/${payload.contributionId}/comment/private`,
    {
      content: payload.content,
    },
  );
};

// Remove private comment ----------------------------------------------
const removePrivateComment = async (
  payload: IRemoveCommentPayload,
): Promise<void> => {
  return await axiosInstance.delete(
    `/contribution/${payload.contributionId}/comment/private/${payload.commentId}`,
  );
};

// Delete Contribution ----------------------------------------------------------------
const deleteContribution = async (
  payload: IDeleteContributionPayload,
): Promise<void> => {
  const { _id } = payload;
  return await axiosInstance.delete(`/contribution/${_id}`);
};

// Download contribution files -------------------------------------------------------
const downloadContributionFiles = async (
  payload: IDownloadContributionFilesPayload,
): Promise<void> => {
  try {
    // Get data
    const query = buildQueryString(payload.query as { [key: string]: unknown });
    const data = await axiosInstance.get<never, Blob>(
      `/contribution/download${query}`,
      {
        responseType: "blob",
      },
    );
    // Create a link element, click it and remove it
    const url = window.URL.createObjectURL(new Blob([data]));
    const link = document.createElement("a");
    link.href = url;
    link.setAttribute("download", `${payload.fileName.trim()}.zip`);
    document.body.appendChild(link);
    link.click();
    window.URL.revokeObjectURL(url);
  } catch (error) {
    notifyError("Download failed, please contact Long!");
  }
};

// Analysis ----------------------------------------------------------------
const getContributionsPerYear = async (
  payload: IGetContrubutionsPerYearPayload,
): Promise<IContributionsByFacultyYear[]> => {
  return await axiosInstance.get(
    `/contribution/yearly-analysis/${payload.year}`,
  );
};
const getTotalContributionsByFaculty = async (): Promise<
  ITotalContributionsByFaculty[]
> => {
  return await axiosInstance.get(`/contribution/lifetime-analysis`);
};

export default {
  addContribution,
  findContributionById,
  findContributions,
  findAllComments,
  addComment,
  updateContribution,
  removeContributionFile,
  likeContribution,
  findAllPrivateComments,
  addPrivateComment,
  removePrivateComment,
  deleteContribution,
  getContributionsPerYear,
  getTotalContributionsByFaculty,
  downloadContributionFiles,
};
