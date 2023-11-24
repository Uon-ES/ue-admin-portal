import { createSlice } from "@reduxjs/toolkit";

const initialState = {
	showOfficerModal: false,
	showTemporaryModalForm: false,
	selectedUser: null,
	zoom: 14,
	temporaryUsers: [],
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
		setSelectedUser(state, action) {
			state.selectedUser = action.payload;
		},
		setTemporaryUsers(state, action) {
			state.temporaryUsers = action.payload;
		},
	},
});

export const {
	setOfficerModal,
	setTemporaryModalForm,
	handleZoom,
	setSelectedUser,
	setTemporaryUsers,
} = mapSlice.actions;

export const getOfficerModal = (state) => state.map.showOfficerModal;
export const getTemporaryModalForm = (state) =>
	state.map.showTemporaryModalForm;
export const getZoom = (state) => state.map.zoom;
export const getSelectedUser = (state) => state.map.selectedUser;
export const getTemporaryUsers = (state) => state.map.temporaryUsers;

export default mapSlice.reducer;
