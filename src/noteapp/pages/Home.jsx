import { NotesHandler } from "../components";
import { NoteWorkshop } from "../views/NoteWorkshop";

import '../styles/noteCard.css';
import '../styles/home.css';
import { useSelector } from "react-redux";

export const Home = () => {

    const { isOnHomePage } = useSelector( state => state.noteapp );

    return (

        <>
        
            {
                ( isOnHomePage )
                    ? <NotesHandler/>
                    : <NoteWorkshop />
            }
        
        </>

    );

};