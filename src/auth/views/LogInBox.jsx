import { useDispatch } from 'react-redux';
import { startChangingAuthView } from '../../store/auth/';

import '../styles/loginBox.css';

export const LogInBox = () => {

    const dispatch = useDispatch();

    const changeAuthView = () => {

        dispatch( startChangingAuthView() );

    };

    return (

        <div className="auth-form-box">

            <i className="bi bi-stickies-fill"></i>

            <p className="app-title mb-0 mt-2">noteapp</p>
            <p className="app-subtitle">¡Bienvenido!</p>
            
            <form action="">

                <input type="text" placeholder="email" name="email" className="form-input mb-4 mt-2"/>
                <input type="password" placeholder="contraseña123" name="password" className="form-input mb-4"/>
                <button className="mb-2 auth-btn">Iniciar Sesión</button>

            </form>

            <p className="new-visitor mt-5">¿Eres un nuevo visitante? <span className="change-state-link" onClick={ changeAuthView }>¡Crea una cuenta!</span> </p>

        </div>

    );

};