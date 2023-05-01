import { createSlice } from "@reduxjs/toolkit";

interface imageState {
  imageUrl: string;
  stage: string;
}

const initialState: imageState = {
  imageUrl: "",
  stage: "empty",
};

const imageSlice = createSlice({
  name: "imageSlice",
  initialState: initialState,
  reducers: {
    setImage: function (state, action) {
      state.imageUrl = action.payload;
    },
    setStage: function (state, action) {
      if (action.payload === "submit") {
        state.stage = action.payload;
      } else {
        state.stage = action.payload;
      }
    },
  },
});

export const { setImage, setStage } = imageSlice.actions;
export default imageSlice.reducer;
