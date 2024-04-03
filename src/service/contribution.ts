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
  IRemoveContributionFilePayload,
  IUpdateContriButionPayload,
} from "@interfaces/contribution.interfaces";
import { axiosInstance } from "@lib/axios.lib";
import { objectToFormData } from "@utils/data.utils";
import { buildQueryString } from "@utils/string.utils";

// Add contribution ---------------------------------
const addContribution = async (
  payload: IAddContributionPayload,
): Promise<IAddContributionResponse> => {
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

// Find comments by contribution id ------------------
const findCommentsByContributionId = async (
  payload: IFindCommentsPayload,
): Promise<IComment> => {
  return await axiosInstance.get(
    `/contribution/${payload.contributionId}/comment`,
  );
};

// Add comment --------------------------------------
const addComment = async (payload: IAddCommentPayload): Promise<void> => {
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
  contributionId: string,
): Promise<IComment[]> => {
  return await axiosInstance.get(
    `/contribution/${contributionId}/comment/private`,
  );
};

// Add private comment ----------------------------------------------
const addPrivateComment = async (
  contributionId: string,
  dto: IAddCommentPayload,
): Promise<void> => {
  return await axiosInstance.post(
    `/contribution/${contributionId}/comment/private`,
    {
      content: dto.content,
    },
  );
};

// Remove private comment ----------------------------------------------
const removePrivateComment = async (
  contributionId: string,
  commentId: string,
): Promise<void> => {
  return await axiosInstance.delete(
    `/contribution/${contributionId}/comment/private/${commentId}`,
  );
};

export default {
  addContribution,
  findContributionById,
  findContributions,
  findCommentsByContributionId,
  addComment,
  updateContribution,
  removeContributionFile,
  likeContribution,
  findAllPrivateComments,
  addPrivateComment,
  removePrivateComment,
};
