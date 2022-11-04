import { NotesHandler } from "../components";
import { CreateNote } from "../views/CreateNote";

import '../styles/noteCard.css';
import '../styles/home.css';

export const Home = () => {


    return (
        <div className="page-background vh-100 d-md-flex align-items-md-center">
        
            <div className="container p-4 notes-container">

                <NotesHandler />
                {/* <CreateNote /> */}

            </div>
        
        </div>
    )

};