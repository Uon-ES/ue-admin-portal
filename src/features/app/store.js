import { configureStore } from "@reduxjs/toolkit";
import globalReducer from "./globalSlice";
import authReducer from "./authSlice";

export const store = configureStore({
	reducer: {
		auth: authReducer,
		global: globalReducer,
	},
	middleware: (getDefaultMiddleware) =>
		getDefaultMiddleware({
			serializableCheck: false,
		}),
});
