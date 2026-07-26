import { createSlice } from "@reduxjs/toolkit";

const capsulesSlice = createSlice({
  name: "capsules",
  initialState: {
    capsulesData: [],
    originalData: [],
    loading: false,
    error: null,
  },
  reducers: {
    setCapsules: (state, action) => {
      state.capsulesData = action.payload;
    },
    setOriginalData: (state, action) => {
      state.originalData = action.payload;
    },
    fetchCapsules: (state) => {
      state.loading = true;
      state.error = null;
    },
    fetchCapsulesSuccess: (state) => {
      state.loading = false;
    },
    fetchCapsulesFailure: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
  },
});

export const {
  setCapsules, setOriginalData, fetchCapsules,
  fetchCapsulesSuccess, fetchCapsulesFailure,
} = capsulesSlice.actions;

export default capsulesSlice.reducer;
