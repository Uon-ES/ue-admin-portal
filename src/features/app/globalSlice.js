import { createSlice } from "@reduxjs/toolkit";

const initialState = {
	controlBar: {
		showBackArrow: false,
		topText: "",
		bottomText: "",
		showButton: false,
		export: null,
	},
};

const globalSlice = createSlice({
	name: "global",
	initialState,
	reducers: {
		setControlBar(state, action) {
			state.controlBar = action.payload;
		},
		setExport(state, action) {
			state.controlBar.export = action.payload;
		},
	},
});

export const { setControlBar, setExport } = globalSlice.actions;

export const getControlBar = (state) => state.global.controlBar;

export default globalSlice.reducer;
