import { useSelector } from 'react-redux';
import { Routes, Route, Navigate } from 'react-router-dom';

import { AuthRoutes } from '../auth/routes/AuthRoutes';
import { useCheckAuth } from '../hooks/useCheckAuth';
import { Home } from '../noteapp/pages/Home';
import { NoteAppRoutes } from '../noteapp/routes/NoteAppRoutes';
import { LoadingScreen } from '../ui/components/LoadingScreen';

export const AppRouter = () => {

    const status = useCheckAuth();

    if ( status === 'checking' ) {
        return <LoadingScreen />
    }

    return (

        <Routes>

            {
                ( status === 'authenticated' )
                ? <Route path="/*" element={ <NoteAppRoutes /> } />
                : <Route path="/auth/*" element={ <AuthRoutes /> } />
                
            }

            <Route path="/*" element={ <Navigate to="/auth/"/> } />

        </Routes>

    );

};