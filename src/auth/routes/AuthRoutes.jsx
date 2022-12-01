import { Routes, Route, Navigate } from 'react-router-dom';
import { AuthPage } from '../pages';

export const AuthRoutes = () => {

    return (

        <Routes>
        
            <Route path="/noteapp-acdejr/" element={ <AuthPage /> }/>
            
            <Route path="/noteapp-acdejr/*" element={ <Navigate to="/noteapp-acdejr/auth" /> }/>
        
        </Routes>

    );

};