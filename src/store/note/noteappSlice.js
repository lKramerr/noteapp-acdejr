import { createSlice } from '@reduxjs/toolkit';

export const noteappSlice = createSlice({
    name: 'noteapp',
    initialState: {
        isSaving: false,
        isOnHomePage: true,
        messageSaved: '',
        notes: [],
        active: null,
    },
    reducers: {
        changeHomeView: ( state ) => {
            state.isOnHomePage = !state.isOnHomePage;
        },
        savingNote: ( state ) => {
            state.isSaving = true;
        },
        noteSaved: ( state ) => {
            state.isSaving = false;
        }
    }
});


export const { changeHomeView, savingNote, noteSaved } = noteappSlice.actions;