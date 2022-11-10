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
        },
        setNotes: ( state, { payload } ) => {
            state.notes = payload;
        },
        setActiveNote: ( state, { payload } ) => {
            state.active = payload;
            state.isOnHomePage = !state.isOnHomePage;
        },
        setUnActiveNote: ( state ) => {
            state.active = null;
            state.isOnHomePage = !state.isOnHomePage;
        },
        updateNote: ( state, { payload } ) => {
            state.isSaving = false;
            state.notes = state.notes.map( note => {
                if( note.id === payload.id ) {
                    return payload;
                };

                return note;
            });
            state.isOnHomePage = !state.isOnHomePage;
        },
        deleteNoteById: ( state, { payload } ) => {
            state.notes = state.notes.filter( note => note.id !== payload.id );
        },
    }
});


export const { changeHomeView, savingNote, noteSaved, setNotes, setActiveNote, setUnActiveNote, updateNote, deleteNoteById } = noteappSlice.actions;