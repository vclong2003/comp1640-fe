import { IContributionState } from "@interfaces/contribution.interfaces";
import { createSlice } from "@reduxjs/toolkit";

export const name = "contributionState";
const initialState: IContributionState = {
  contributions: [],
  total: 0,
};

const contributionState = createSlice({
  name,
  initialState,
  reducers: {},
  extraReducers: (builder) => {},
});

export default contributionState;
