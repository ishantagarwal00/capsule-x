import { createSlice } from "@reduxjs/toolkit";

const capsulesSlice = createSlice({
  name: "capsules",
  initialState: {
    capsulesData: [],
    originalData: [],
  },
  reducers: {
    setCapsules: (state, action) => {
      state.capsulesData = action.payload;
    },
    setOriginalData: (state, action) => {
      state.originalData = action.payload;
    },
    fetchCapsules: () => {},
  },
});

export const { setCapsules, setOriginalData, fetchCapsules } =
  capsulesSlice.actions;

export default capsulesSlice.reducer;
