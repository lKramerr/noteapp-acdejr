import { useDispatch } from 'react-redux';

import { startChangingAuthView } from "../../store/auth/";
import { useForm } from '../../hooks/useForm';

import { signUpFormState } from '../states';
import { signUpValidations } from '../states';

import { callErrorAlert } from './alerts/error';

export const SignUpBox = () => {

    const dispatch = useDispatch();

    const { onInputChange, formState, isFormValid, 
            email, password, passwordRepeat,
            emailValid, passwordValid, passwordRepeatValid,
        } = useForm( signUpFormState, signUpValidations );

    const onChangeAuthPage = () => dispatch( startChangingAuthView() );

    const printFormData = ( event ) => {
        event.preventDefault();

        if( password !== passwordRepeat ) {
            callErrorAlert( 'Las contraseñas no coinciden' );
            return;
        };

        if( !!emailValid ) callErrorAlert( emailValid );
        if( !!passwordValid ) callErrorAlert( passwordValid );

        console.log( !emailValid, !passwordValid )
        console.log( formState );
    }

    return (

        <div className="auth-form-box">

            <i className="bi bi-stickies-fill"></i>

            <p className="app-title mb-0 mt-2">noteapp</p>
            <p className="app-subtitle">¡Únete!</p>

            <form method="post" onSubmit={ printFormData }>

                {/* <input type="text" placeholder="Nombre de Usuario" name="username" autoComplete="off" className="form-input mb-2"/> */}

                <input
                    type="text"
                    placeholder="Correo electrónico"
                    name="email"
                    value={ email }
                    onChange={ onInputChange }
                    autoComplete="off"
                    className="form-input mb-3"
                />

                <input
                    type="password"
                    placeholder="Contraseña"
                    name="password"
                    value={ password }
                    onChange={ onInputChange }
                    autoComplete="off"
                    className="form-input mb-3"
                />

                <input
                    type="password"
                    placeholder="Repetir Contraseña"
                    name="passwordRepeat"
                    value={ passwordRepeat }
                    onChange={ onInputChange }
                    autoComplete="off"
                    className="form-input mb-3"
                />

                <input type="submit" className="auth-btn mb-1" value="Crear cuenta" />

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