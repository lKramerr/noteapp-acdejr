import { callErrorAlert } from "../../views/alerts/error";

export const checkFirebaseErrors = ( errorMessage ) => {

    if ( errorMessage === 'Firebase: Error (auth/email-already-in-use).' ) {
        callErrorAlert( 'Este email ya fue registrado' );
    };

};