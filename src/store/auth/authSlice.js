import { createSlice } from '@reduxjs/toolkit';

export const authSlice = createSlice({
    name: 'auth',
    initialState: {
        isLoginView: true,
        auth: 'checking',
        uid: null,
        email: null,
        errorMessage: null,
        loginAttempts: 0,
    },
    reducers: {
        onChangeAuthView: ( state ) => {
            state.isLoginView = !state.isLoginView;
            state.errorMessage = null;
        },
        onLogin: ( state, { payload } ) => {
            state.auth = 'authenticated';
            state.uid = payload.uid;
            state.email = payload.email;
            state.loginAttempts = 0;
            state.errorMessage = null;
        },
        onLogout: ( state, { payload = '' } ) => {
            state.auth = 'not-authenticated';
            state.uid = null;
            state.email = null;
            state.loginAttempts += 1;
            state.errorMessage = payload.errorMessage;
        },
    }
});


export const { onChangeAuthView, onLogin, onLogout } = authSlice.actions;