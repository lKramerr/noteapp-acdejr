import { changeHomeView, noteSaved, savingNote } from './noteappSlice';
import { doc, collection, setDoc } from 'firebase/firestore/lite';

import { CloudFirebase } from '../../firebase/config';

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