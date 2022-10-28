import { useDispatch } from 'react-redux';

import { startChangingAuthView } from "../../store/auth/";

export const SignUpBox = () => {

    const dispatch = useDispatch();

    const onChangeAuthPage = () => {

        dispatch( startChangingAuthView() );

    };

    return (

        <div className="auth-form-box">

            <i className="bi bi-stickies-fill"></i>

            <p className="app-title mb-0 mt-2">noteapp</p>
            <p className="app-subtitle">¡Únete!</p>

            <form action="">

                {/* <input type="text" placeholder="Nombre de Usuario" name="username" autoComplete="off" className="form-input mb-2"/> */}

                <input type="text" placeholder="Correo electrónico" name="email" autoComplete="off" className="form-input mb-3"/>

                <input type="password" placeholder="Contraseña" name="password" autoComplete="off" className="form-input mb-3"/>

                <input type="password" placeholder="Repetir Contraseña" name="passwordRepeat" autoComplete="off" className="form-input mb-3"/>

                <button className="auth-btn mb-1">Crear cuenta</button>

            </form>

            <p className="new-visitor mt-3">¿Ya tienes cuenta? <span className="change-state-link" onClick={ onChangeAuthPage }>Iniciar Sesión</span> </p>

        </div>

    );

};