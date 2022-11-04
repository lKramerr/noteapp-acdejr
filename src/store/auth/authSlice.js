import { createSlice } from '@reduxjs/toolkit';

export const authSlice = createSlice({
    name: 'auth',
    initialState: {
        isLoginView: true,
        status: 'checking',
        uid: null,
        email: null,
        errorMessage: null,
        loginAttempts: 0,
    },
    reducers: {
        changeAuthView: ( state ) => {
            state.isLoginView = !state.isLoginView;
            state.errorMessage = null;
        },
        checkingCredentials: ( state ) => {
            state.status = 'checking';
        },
        logIn: ( state, { payload } ) => {
            state.status = 'authenticated';
            state.uid = payload.uid;
            state.email = payload.email;
            state.loginAttempts = 0;
            state.errorMessage = null;
        },
        logOut: ( state, { payload = '' } ) => {
            state.status = 'not-authenticated';
            state.uid = null;
            state.email = null;
            state.loginAttempts += 1;
            state.errorMessage = payload.errorMessage;
        },
    }
});


export const { changeAuthView, logIn, logOut, checkingCredentials } = authSlice.actions;