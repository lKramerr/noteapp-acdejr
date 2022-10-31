import { useDispatch, useSelector } from 'react-redux';

import { startChangingAuthView, startCreatingUserWithEmailAndPassword } from "../../store/auth/";
import { useForm } from '../../hooks/useForm';

import { signUpFormState } from '../states';
import { signUpValidations } from '../states';

import { checkValidationsForUserSignUp } from '../states/formValidations/checkValidations';
import { useEffect } from 'react';
import { checkFirebaseErrors } from '../states/firebaseErrors/checkFirebaseErrors';

export const SignUpBox = () => {

    const dispatch = useDispatch();

    const { errorMessage, loginAttempts } = useSelector( state => state.auth );

    const { onInputChange, onResetForm, formState, validationsState, 
            email, password, passwordRepeat,
            emailValid, passwordValid,
        } = useForm( signUpFormState, signUpValidations );

    const onChangeAuthPage = () => dispatch( startChangingAuthView() );

    useEffect( () => {

        checkFirebaseErrors( errorMessage );
        onResetForm();

    }, [ loginAttempts ] );

    const onCreateNewUser = ( event ) => {

        event.preventDefault();
        
        validationsState.passwordRepeat = ( password === passwordRepeat ) ? null : 'Las contraseñas no coinciden';

        const ok = checkValidationsForUserSignUp( validationsState, formState );

        if ( ok ) dispatch( startCreatingUserWithEmailAndPassword( formState ) );

    };

    return (

        <div className="auth-form-box">

            <i className="bi bi-stickies-fill"></i>

            <p className="app-title mb-0 mt-2">noteapp</p>
            <p className="app-subtitle">¡Únete!</p>

            <form method="post" onSubmit={ onCreateNewUser }>

                {/* <input type="text" placeholder="Nombre de Usuario" name="username" autoComplete="off" className="form-input mb-2"/> */}

                <input
                    type="text"
                    placeholder="Correo electrónico"
                    name="email"
                    value={ email || "" }
                    onChange={ onInputChange }
                    autoComplete="off"
                    className="form-input mb-3"
                />

                <input
                    type="password"
                    placeholder="Contraseña"
                    name="password"
                    value={ password || "" }
                    onChange={ onInputChange }
                    autoComplete="off"
                    className="form-input mb-3"
                />

                <input
                    type="password"
                    placeholder="Repetir Contraseña"
                    name="passwordRepeat"
                    value={ passwordRepeat || "" }
                    onChange={ onInputChange }
                    autoComplete="off"
                    className="form-input mb-3"
                />

                <input
                    type="submit"
                    value="Crear cuenta"
                    className="auth-btn mb-1" 
                />

            </form>

            <p className="new-visitor mt-3">
                ¿Ya tienes cuenta?
                <span
                    className="change-state-link ms-1"
                    onClick={ onChangeAuthPage }
                >
                        Iniciar Sesión
                </span>
            </p>

        </div>

    );

};