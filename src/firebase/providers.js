import { createUserWithEmailAndPassword } from 'firebase/auth';
import { FirebaseAuth } from './config';

export const registerUserWithEmailAndPassword = async( { email, password } ) => {

    try {

        const resp = await createUserWithEmailAndPassword( FirebaseAuth, email, password );
        console.log( resp );
        const { uid } = resp.user;
    
        return {
            ok: true,
            uid, email, password
        };
        
    } catch ( error ) {

        console.log( error );

        return {
            ok: false,
            error
        };

    };

};