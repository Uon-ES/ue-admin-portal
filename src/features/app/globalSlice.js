import { createSlice } from "@reduxjs/toolkit";

const initialState = {
	controlBar: {
		showBackArrow: false,
		topText: "",
		bottomText: "",
		showButton: false,
	},
};

const globalSlice = createSlice({
	name: "global",
	initialState,
	reducers: {
		setControlBar(state, action) {
			state.controlBar = action.payload;
		},
	},
});

export const { setControlBar } = globalSlice.actions;

export const getControlBar = (state) => state.global.controlBar;

export default globalSlice.reducer;
