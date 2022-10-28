import { createSlice } from '@reduxjs/toolkit';

export const authSlice = createSlice({
    name: 'auth',
    initialState: {
        isLoginView: true
    },
    reducers: {
        onChangeAuthView: ( state ) => {
            state.isLoginView = !state.isLoginView;
        },
    }
});


export const { onChangeAuthView } = authSlice.actions;