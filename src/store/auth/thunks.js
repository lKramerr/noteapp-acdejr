import { async } from "@firebase/util";
import { registerUserWithEmailAndPassword } from "../../firebase/providers";
import { onChangeAuthView, onLogin, onLogout } from "./authSlice";

export const startChangingAuthView = () => {

    return async( dispatch ) => dispatch( onChangeAuthView() );

};

export const startCreatingUserWithEmailAndPassword = ( formState ) => {

    return async( dispatch ) => {

        const { ok, uid, email, errorMessage } = await( registerUserWithEmailAndPassword( formState ) );

        if ( !ok ) return dispatch( onLogout( { errorMessage } ) );

        dispatch( onLogin( { uid, email } ) );

    };

};