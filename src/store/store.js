import { configureStore } from "@reduxjs/toolkit";
import { authSlice } from "./auth/authSlice";
import { noteappSlice } from "./note/noteappSlice";

export const store = configureStore({
    reducer: {
        auth: authSlice.reducer,
        noteapp: noteappSlice.reducer,
    }
});