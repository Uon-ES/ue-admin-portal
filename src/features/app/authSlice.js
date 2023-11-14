import { createSlice } from "@reduxjs/toolkit";

const initialState = {
	user: {},
	accessToken: null,
};

const authSlice = createSlice({
	name: "auth",
	initialState,
	reducers: {
		setUser(state, action) {
			state.user = action.payload;
			state.accessToken = action.payload.accessToken;
		},
		logOut(state, _action) {
			state.user = {};
			state.accessToken = null;
		},
	},
});

export const { setUser, logOut } = authSlice.actions;

export const getUser = (state) => state.auth.user;
export const getAccessToken = (state) => state.auth.accessToken;

export default authSlice.reducer;
