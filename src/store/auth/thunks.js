import { signOut } from "firebase/auth";
import { FirebaseAuth } from "../../firebase/config";
import { registerUserWithEmailAndPassword } from "../../firebase/providers";
import { changeAuthView, login, logout } from "./authSlice";

export const startChangingAuthView = () => {

    return async( dispatch ) => dispatch( changeAuthView() );

};

export const startCreatingUserWithEmailAndPassword = ( formState ) => {

    return async( dispatch ) => {

        const { ok, uid, email, errorMessage } = await( registerUserWithEmailAndPassword( formState ) );

        if ( !ok ) return dispatch( logout( { errorMessage } ) );

        dispatch( login( { uid, email } ) );

    };

};

export const startLogout = () => {

    return async( dispatch ) => {
        await signOut( FirebaseAuth );
        dispatch( logout() );
    }

};