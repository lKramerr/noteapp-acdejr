import { changeHomeView, deleteNoteById, noteSaved, savingNote, setNotes, setUnActiveNote, updateNote } from './noteappSlice';
import { doc, collection, setDoc, deleteDoc } from 'firebase/firestore/lite';

import { CloudFirebase } from '../../firebase/config';
import { loadNotes } from '../../helpers/loadNotes';
import { callConfirmAlert } from '../../auth/views/alerts/error';

export const startChangingHomeView = () => {

    return async( dispatch ) => {
        dispatch( setUnActiveNote() );
        // dispatch( changeHomeView() );
    };

};

export const startCreatingNote = ( formState ) => {

    return async( dispatch, getState ) => {

        dispatch( savingNote() );

        const { uid } = getState().auth;

        const newDoc = doc( collection( CloudFirebase, `${ uid }/noteapp/notes` ) );
        await setDoc( newDoc, formState  );

        dispatch( noteSaved() );

    };

};

export const startSavingNote = ( formState ) => {

    return async( dispatch, getState ) => {

        dispatch( savingNote() );

        const { uid } = getState().auth;

        const noteToFireStore = { ...formState };
        delete noteToFireStore.id;

        const docRef = doc( CloudFirebase, `${ uid }/noteapp/notes/${ formState.id }` );
        await setDoc( docRef, noteToFireStore, { merge: true } );

        dispatch( updateNote( formState ) );

    };

};

export const startLoadingNotes = () => {

    return async( dispatch, getState ) => {

        const { uid } = getState().auth;
        const notes = await loadNotes( uid );

        notes.sort(
            ( a, b ) => b.orderNumber - a.orderNumber
        );

        dispatch( setNotes( notes ) );

    };

};

export const startDeletingNote = () => {

    return async( dispatch, getState ) => {

        const { uid } = getState().auth;
        const { active:note } = getState().noteapp;

        const docRef = doc( CloudFirebase, `${ uid }/noteapp/notes/${ note.id }` );
        await deleteDoc( docRef );

        await dispatch( deleteNoteById( note.id ) );
        dispatch( changeHomeView() );

    };

};

export const testThunk = () => {

    return async() => ( 
        console.log( 'despachado' )
    );

};