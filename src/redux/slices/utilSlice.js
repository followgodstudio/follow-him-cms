import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  selectedNav: "Dashboard",
  selectedSubNav: null,
  isDrawerAccordionOn: true,
};

const utilSlice = createSlice({
  name: "util",
  initialState,
  reducers: {
    switchNav(state, action) {
      state.selectedNav = action.payload;
    },
    switchSubNav(state, action) {
      state.selectedSubNav = action.payload;
    },
    switchNavDrawer(state) {
      state.isDrawerAccordionOn = !state.isDrawerAccordionOn;
    },
  },
});

export const { switchNav, switchSubNav, switchNavDrawer } = utilSlice.actions;
export default utilSlice.reducer;
