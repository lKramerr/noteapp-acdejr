import { createSlice } from '@reduxjs/toolkit';

export const noteappSlice = createSlice({
    name: 'noteapp',
    initialState: {
        uid: '',
        email: '',
    },
    reducers: {
        increment: ( state, { payload } ) => {
            uid: '';
            state.email = payload.email;
        },
    }
});


export const { increment } = noteappSlice.actions;