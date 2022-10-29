import { useEffect, useState } from "react";

export const useForm = ( initialForm = {}, formValidations = {} ) => {

    const [ formState, setFormState ] = useState( initialForm );
    const [ validationsState, setValidationsState ] = useState({});

    useEffect( () => {
        setFormState( initialForm );
    }, [ initialForm ] );

    useEffect( () => {
        createValidators();
    }, [ formState ] );

    const onInputChange = ( { target } ) => {
        
        const { name, value } = target;
        setFormState( {
            ...formState,
            [ name ]: value
        });

    };

    const createValidators = () => {

        const formCheckedValues = {};

        for (const formField of Object.keys( formValidations )) {
            const [ fn, errorMessage = 'error de validación' ] = formValidations[ formField ];

            formCheckedValues[ `${ formField }Valid` ] = fn( formState[ formField ] ) ? null : errorMessage
        };

        setValidationsState( formCheckedValues );

    };

    return {
        ...formState,
        formState,
        onInputChange,

        ...validationsState,
        validationsState,
    };

};