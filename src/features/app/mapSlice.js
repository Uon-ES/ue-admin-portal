import { createSlice } from "@reduxjs/toolkit";

const initialState = {
	showOfficerModal: false,
	showTemporaryModalForm: false,
	zoom: 14,
};

const mapSlice = createSlice({
	name: "map",
	initialState,
	reducers: {
		setOfficerModal(state, action) {
			state.showOfficerModal = action.payload;
		},
		setTemporaryModalForm(state, action) {
			state.showTemporaryModalForm = action.payload;
		},
		handleZoom(state, action) {
			let newZoom = state.zoom + action.payload;
			if (newZoom < 1) newZoom = 1;
			if (newZoom > 21) newZoom = 21;
			state.zoom = newZoom;
		},
	},
});

export const { setOfficerModal, setTemporaryModalForm, handleZoom } =
	mapSlice.actions;

export const getOfficerModal = (state) => state.map.showOfficerModal;
export const getTemporaryModalForm = (state) =>
	state.map.showTemporaryModalForm;
export const getZoom = (state) => state.map.zoom;

export default mapSlice.reducer;
