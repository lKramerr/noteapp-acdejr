import { useDispatch } from "react-redux";
import { startLogOut } from "../../store/auth";
import { startChangingHomeView } from "../../store/note/thunks";
import { NoteCard } from "./";
import { useLoadNotes } from '../../hooks/useLoadNotes.js';

export const NotesHandler = () => {

    const dispatch = useDispatch();

    const onChangeHomeView = () => dispatch( startChangingHomeView() );

    const onLogout = () => dispatch( startLogOut() );

    const myNotes = useLoadNotes();

    return (

        <div>

            <div className="d-flex bg-light py-2 px-4 justify-content-between align-items-center sticky-top">

                <button
                    className="secondary-btn sign-out-btn"
                    onClick={ onLogout }
                >
                    Salir
                </button>
                
                <button
                    className="action-btn create-note-btn"
                    onClick={ onChangeHomeView }
                >
                    + Crear
                </button>

            </div>

            <div className="container mb-4">

                <div
                    className=" row row-cols-2 row-cols-md-3 row-cols-lg-4 row-cols-xl-5
                                g-2 g-lg-3
                                mt-1"
                >
                    
                    {
                        myNotes.map( note => <NoteCard key={ note.id } {...note} /> )
                    }

                </div>

            </div>

        </div>

    );

};