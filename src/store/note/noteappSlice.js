import { createSlice } from '@reduxjs/toolkit';

export const noteappSlice = createSlice({
    name: 'noteapp',
    initialState: {
        uid: '',
        email: '',
    },
    reducers: {
        onLogin: ( state, { payload } ) => {
            uid: '';
            state.email = payload.email;
        },
    }
});


export const { onLogin } = noteappSlice.actions;