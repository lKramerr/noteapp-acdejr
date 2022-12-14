import { Routes, Route, Navigate } from 'react-router-dom';
import { AuthPage } from '../pages';

export const AuthRoutes = () => {

    return (

        <Routes>
        
            <Route path="/" element={ <AuthPage /> }/>
            
            <Route path="/*" element={ <Navigate to="/auth" /> }/>
        
        </Routes>

    );

};