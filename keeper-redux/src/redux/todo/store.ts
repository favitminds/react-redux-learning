import { configureStore } from "@reduxjs/toolkit";
import { noteSlice } from "./noteSlice";

export const store = configureStore({
    reducer: {
        notes: noteSlice.reducer
    },
});

export type StoreState = ReturnType<typeof store.getState>
export type StoreDispatch = typeof store.dispatch