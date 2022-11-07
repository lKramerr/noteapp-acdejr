import { onAuthStateChanged } from "firebase/auth";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { FirebaseAuth } from "../firebase/config";
import { logIn, logOut } from "../store/auth";
import { startLoadingNotes, testThunk } from "../store/note/thunks";

export const useCheckAuth = () => {

    const { status } = useSelector( state => state.auth );
    const dispatch = useDispatch();

    useEffect( () => {

        onAuthStateChanged( FirebaseAuth, async( user ) => {

            if ( !user ) return dispatch( logOut() );

            const { uid, email } = user;
            dispatch( logIn( { uid, email } ) );
            // dispatch( startLoadingNotes() );
            // dispatch( testThunk() );
        } );

    }, [] );

    return status;

};