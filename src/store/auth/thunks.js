import { async } from "@firebase/util";
import { registerUserWithEmailAndPassword } from "../../firebase/providers";
import { onLogin } from "../note/noteappSlice";
import { onChangeAuthView } from "./authSlice";

export const startChangingAuthView = () => {

    return async( dispatch ) => {

        dispatch( onChangeAuthView() );

    };

};

export const startCreatingUserWithEmailAndPassword = ( formState ) => {

    return async( dispatch ) => {

        const { ok, uid, email } = await( registerUserWithEmailAndPassword( formState ) );
        console.log( ok, uid, email );
        dispatch( onLogin( uid, email ) );

    };

};