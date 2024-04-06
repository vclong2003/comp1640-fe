import {
  IAddCommentPayload,
  IContributionState,
  IFindCommentsPayload,
  IFindContributionsPayload,
  IRemoveCommentPayload,
  IUpdateContriButionPayload,
} from "@interfaces/contribution.interfaces";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import contributionService from "@service/contribution";

export const name = "contributionState";
const initialState: IContributionState = {
  contributions: [],
  comments: [],
  privateComments: [],
  total: 0,
};

// Find contributions --------------------------------
export const findContributions = createAsyncThunk(
  `${name}/findContributions`,
  async (payload: IFindContributionsPayload) => {
    return await contributionService.findContributions(payload);
  },
);
// Update contribution ------------------------------
export const updateContribution = createAsyncThunk(
  `${name}/updateContribution`,
  async (payload: IUpdateContriButionPayload) => {
    await contributionService.updateContribution(payload);
    return await contributionService.findContributionById({
      contributionId: payload._id,
    });
  },
);
// Find all comments ---------------------------------
export const findComments = createAsyncThunk(
  `${name}/findComments`,
  async (payload: IFindCommentsPayload) => {
    return await contributionService.findAllComments(payload);
  },
);
// Add comment --------------------------------------
export const addComment = createAsyncThunk(
  `${name}/addComment`,
  async (payload: IAddCommentPayload) => {
    return await contributionService.addComment(payload);
  },
);
// Find all private comments -------------------------
export const findPrivateComments = createAsyncThunk(
  `${name}/findPrivateComments`,
  async (payload: IFindCommentsPayload) => {
    return await contributionService.findAllPrivateComments(payload);
  },
);
// Add private comment ------------------------------
export const addPrivateComment = createAsyncThunk(
  `${name}/addPrivateComment`,
  async (payload: IAddCommentPayload) => {
    return await contributionService.addPrivateComment(payload);
  },
);
// Remove private comment ---------------------------
export const removePrivateComment = createAsyncThunk(
  `${name}/removePrivateComment`,
  async (payload: IRemoveCommentPayload) => {
    await contributionService.removePrivateComment(payload);
    return payload;
  },
);

const contributionState = createSlice({
  name,
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    // Find contributions ------------------------------
    builder.addCase(findContributions.fulfilled, (state, action) => {
      state.contributions = action.payload;
      state.total = action.payload.length;
    });
    // Update contribution ------------------------------
    builder.addCase(updateContribution.fulfilled, (state, action) => {
      state.contributions = state.contributions.map((c) =>
        c._id === action.payload._id ? action.payload : c,
      );
    });
    // Find all comments -------------------------------
    builder.addCase(findComments.fulfilled, (state, action) => {
      state.comments = action.payload;
    });
    // Add comment -------------------------------------
    builder.addCase(addComment.fulfilled, (state, action) => {
      state.comments.push(action.payload);
    });
    // Find all private comments -----------------------
    builder.addCase(findPrivateComments.fulfilled, (state, action) => {
      state.privateComments = action.payload;
    });
    // Add private comment -----------------------------
    builder.addCase(addPrivateComment.fulfilled, (state, action) => {
      state.privateComments.push(action.payload);
    });
    // Remove private comment --------------------------
    builder.addCase(removePrivateComment.fulfilled, (state, action) => {
      state.privateComments = state.privateComments.filter(
        (c) => c._id !== action.payload.commentId,
      );
    });
  },
});

export default contributionState;