import { Routes, Route, Navigate } from "react-router-dom";
import { Home } from "../pages/Home";

export const NoteAppRoutes = () => {

    return (

        <Routes>

            <Route path="/noteapp-acdejr/" element={ <Home /> }/>

            <Route path="/noteapp-acdejr/*" element={ <Navigate to="/noteapp-acdejr/" /> } /> 

        </Routes>

    );

};