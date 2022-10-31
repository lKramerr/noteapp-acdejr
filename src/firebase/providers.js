import { createUserWithEmailAndPassword } from 'firebase/auth';
import { FirebaseAuth } from './config';

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