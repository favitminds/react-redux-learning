import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface Note {
    title?: string;
    content?: string;
};

const initialState: Note[] = [];

export const noteSlice = createSlice({
    name: 'notes',
    initialState,
    reducers: {
        add: (state, action: PayloadAction<Note>) => {
            state.push(action.payload)
        },
        remove: (state, action: PayloadAction<number>) => {
            state.splice(action.payload, 1)
        }
    }
});

export const {add, remove} = noteSlice.actions;
export default noteSlice.reducer;