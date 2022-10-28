import { createSlice } from '@reduxjs/toolkit';

export const authSlice = createSlice({
    name: 'auth',
    initialState: {
        isLoginView: true
    },
    reducers: {
        increment: ( state ) => {
            state.counter += 1;
        },
    }
});


export const { increment } = authSlice.actions;