import { configureStore } from "@reduxjs/toolkit";
import globalReducer from "./globalSlice";
import authReducer from "./authSlice";
import mapReducer from "./mapSlice";

export const store = configureStore({
	reducer: {
		auth: authReducer,
		global: globalReducer,
		map: mapReducer,
	},
	middleware: (getDefaultMiddleware) =>
		getDefaultMiddleware({
			serializableCheck: false,
		}),
});
