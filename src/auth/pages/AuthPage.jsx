import { useSelector } from 'react-redux'

import { LogInBox } from '../views/LogInBox';
import { SignUpBox } from '../views/SignUpBox';

import '../../theme/global.css';

export const AuthPage = () => {

    const { isLoginView } = useSelector( state => state.auth );

    return (

        <div className="d-flex vh-100 vw-100 justify-content-center align-items-center page-background">
        
            {
                ( !isLoginView )
                    ? <SignUpBox />
                    : <LogInBox/>
            }
        
        </div>

    );

};