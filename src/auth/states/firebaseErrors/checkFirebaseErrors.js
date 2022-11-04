import { callErrorAlert } from "../../views/alerts/error";

export const checkFirebaseErrors = ( errorMessage ) => {

    if ( errorMessage === 'Firebase: Error (auth/email-already-in-use).' ) {
        callErrorAlert( 'Este email ya fue registrado' );
    };

    if ( errorMessage === 'Firebase: Error (auth/wrong-password).' ) {
        callErrorAlert( 'Contraseña incorrecta' );
    };
    
    if ( errorMessage === 'Firebase: Error (auth/invalid-email).' ) {
        callErrorAlert( 'Este usuario no está registrado' );
    };

};