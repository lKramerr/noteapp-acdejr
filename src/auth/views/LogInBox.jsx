import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useForm } from '../../hooks/useForm';
import { startChangingAuthView, startLogInUserWithEmailAndPassword } from '../../store/auth/';
import { logInFormState } from '../states';
import { checkFirebaseErrors } from '../states/firebaseErrors/checkFirebaseErrors';

import '../styles/loginBox.css';

export const LogInBox = () => {

    const dispatch = useDispatch();

    const { errorMessage, loginAttempts } = useSelector( state => state.auth );

    const changeAuthView = () => dispatch( startChangingAuthView() );
    const { onInputChange, email, password, formState, onResetForm } = useForm( logInFormState );

    useEffect( () => {

        checkFirebaseErrors( errorMessage );
        onResetForm();

    }, [ loginAttempts ] );

    const onLogInUser = ( event ) => {

        event.preventDefault();
        dispatch( startLogInUserWithEmailAndPassword( formState ) );

    };

    return (

        <div className="auth-form-box">

            <i className="bi bi-stickies-fill"></i>

            <p className="app-title mb-0 mt-2">noteapp</p>
            <p className="app-subtitle">¡Bienvenido!</p>
            
            <form method="post" onSubmit={ onLogInUser }>

                <input
                    type="text"
                    placeholder="email"
                    name="email"
                    value={ email }
                    onChange={ onInputChange }
                    className="form-input mb-4 mt-2"
                />

                <input
                    type="password"
                    placeholder="contraseña123"
                    name="password"
                    value={ password }
                    onChange={ onInputChange }
                    className="form-input mb-4"
                />

                <button className="mb-2 auth-btn" >
                    Iniciar Sesión
                </button>

            </form>

            <p className="new-visitor mt-5">
                ¿Eres un nuevo visitante?
                <span
                    className="change-state-link ms-1"
                    onClick={ changeAuthView }
                >
                    ¡Crea una cuenta!
                </span>
            </p>

        </div>

    );

};