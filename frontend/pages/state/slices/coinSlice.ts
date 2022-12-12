import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface IinitialState {
  search: string;
}

const initialState: IinitialState = {
  search: "",
};

const coinSlice = createSlice({
  name: "coin",
  initialState,
  reducers: {
    addSearch: (state, action: PayloadAction<string>) => {
      state.search = action.payload;
    },
  },
});

export const { addSearch } = coinSlice.actions;
export default coinSlice.reducer;
