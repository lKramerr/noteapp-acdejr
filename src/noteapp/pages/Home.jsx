import { NotesHandler } from "../components";
import { NoteWorkshop } from "../views/NoteWorkshop";

import '../styles/noteCard.css';
import '../styles/home.css';
import { useSelector } from "react-redux";

export const Home = () => {

    const { isOnHomePage } = useSelector( state => state.noteapp );

    return (

        <div className="page-background py-4">
        
            <div className="container p-4 notes-container">

                <div className="">

                    {
                        ( isOnHomePage )
                        ? <NotesHandler/>
                        : <NoteWorkshop />
                    }

                    
                    
                </div>

            </div>
        
        </div>

    );

};