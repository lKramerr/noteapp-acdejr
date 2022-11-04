import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth';
import { FirebaseAuth } from './config';

export const logInUserWithEmailAndPassword = async( { email, password } ) => {

    try {
      
        const resp = await signInWithEmailAndPassword( FirebaseAuth, email, password )
        console.log( resp );
        const { uid } = resp.user;

        return {
            ok: true,
            uid, email,
        }

    } catch ( error ) {
        
        return {
            ok: false,
            errorMessage: error.message,
        };

    };

};

export const registerUserWithEmailAndPassword = async( { email, password } ) => {

    try {

        const resp = await createUserWithEmailAndPassword( FirebaseAuth, email, password );
        const { uid } = resp.user;
    
        return {
            ok: true,
            uid, email, password
        };
        
    } catch ( error ) {

        return {
            ok: false,
            errorMessage: error.message,
        };

    };

};