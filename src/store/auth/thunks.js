import { async } from "@firebase/util";
import { signOut } from "firebase/auth";
import { FirebaseAuth } from "../../firebase/config";
import { logInUserWithEmailAndPassword, registerUserWithEmailAndPassword } from "../../firebase/providers";
import { changeAuthView, logIn, logOut } from "./authSlice";

export const startChangingAuthView = () => {

    return async( dispatch ) => dispatch( changeAuthView() );

};

export const startLogInUserWithEmailAndPassword = ( formState ) => {

    return async( dispatch ) => {

        const { ok, uid, email, errorMessage } = await( logInUserWithEmailAndPassword( formState ) );

        if ( !ok ) return dispatch( logOut( { errorMessage } ) );

        dispatch( logIn( { uid, email } ) );

    };

};

export const startCreatingUserWithEmailAndPassword = ( formState ) => {

    return async( dispatch ) => {

        const { ok, uid, email, errorMessage } = await( registerUserWithEmailAndPassword( formState ) );

        if ( !ok ) return dispatch( logOut( { errorMessage } ) );

        dispatch( logIn( { uid, email } ) );

    };

};

export const startLogOut = () => {

    return async( dispatch ) => {
        await signOut( FirebaseAuth );
        dispatch( logOut() );
    }

};