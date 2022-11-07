import { collection, getDocs } from "firebase/firestore/lite";
import { CloudFirebase } from "../firebase/config";

export const loadNotes = async( uid = '' ) => {

    const notes = [];

    if ( !uid ) throw new Error('No se encontró al usuario');

    const collectionRef = collection( CloudFirebase, `${uid}/noteapp/notes` );
    const docs = await( getDocs( collectionRef ) );

    docs.forEach( doc => {
        notes.push( { id: doc.id, ...doc.data() } );
    } );

    return notes;
};