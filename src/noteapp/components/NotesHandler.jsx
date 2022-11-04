import { useDispatch } from "react-redux";
import { startLogOut } from "../../store/auth";
import { NoteCard } from "./";

export const NotesHandler = () => {

    const dispatch = useDispatch();

    
    const onLogout = () => {

        dispatch( startLogOut() );

    };

    return (

        <>

            <i
                className="bi bi-box-arrow-left fs-4"
                onClick={ onLogout }
            ></i>
        
            <div className="d-flex justify-content-center">
                <button className="action-btn create-note-btn">+ Crear</button>
            </div>
        
            <div
                className=" row
                            row-cols-2 row-cols-md-3 row-cols-lg-4 row-cols-xl-5
                            g-2 g-lg-3
                            mt-1
                            justify-content-center"
            >
                <NoteCard />
                <NoteCard />
                <NoteCard />
                <NoteCard />
                <NoteCard />
                <NoteCard />
                <NoteCard />
            </div>

        </>

    );

};