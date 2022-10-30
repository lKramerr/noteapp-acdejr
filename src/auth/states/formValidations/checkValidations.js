import { callErrorAlert } from "../../views/alerts/error";

export const checkValidationsForUserSignUp = ( validations, formState ) => {

    let canSignUpUser = true;

    for ( const validation of Object.values( validations ) ) {

        if ( validation ) {
            canSignUpUser = false;
            callErrorAlert( validation );
        };

    };

    if ( canSignUpUser ) return true;
    if ( !canSignUpUser ) return false;

};