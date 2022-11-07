import { changeHomeView, noteSaved, savingNote, setNotes } from './noteappSlice';
import { doc, collection, setDoc } from 'firebase/firestore/lite';

import { CloudFirebase } from '../../firebase/config';
import { async } from '@firebase/util';
import { loadNotes } from '../../helpers/loadNotes';

export const startChangingHomeView = () => {

    return async( dispatch ) => dispatch( changeHomeView() );

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

export const startLoadingNotes = () => {

    return async( dispatch, getState ) => {

        const { uid } = getState().auth;
        const notes = await loadNotes( uid );

        dispatch( setNotes( notes ) );

    };

};

export const testThunk = () => {

    return async() => ( 
        console.log( 'despachado' )
    );

};