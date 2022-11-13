import { useMemo } from "react";
import { useDispatch } from "react-redux";
import { colorsHandler } from "../../helpers/colorsHandler";
import { notesNewProperties } from "../../helpers/notesNewProperties";
import { setActiveNote } from "../../store/note/noteappSlice";

export const NoteCard = ( { id, title, body, color, creationDate } ) => {

    const displayColor = colorsHandler( color );
    const dispatch = useDispatch();

    const onEditNote = () => {
        // dispatch( changeHomeView() );
        dispatch( setActiveNote( { id, title, body, color } ) );
    };

    const { newTitle, newBody, newDate } = notesNewProperties( title, body, creationDate );

    return (

        <div className="col mt-4" onClick={ onEditNote }>
        
            <div className={ "note-card purple " + displayColor} >


                <p className="note-title">
                    { newTitle }
                </p>

                    <p className="note-body">
                        { newBody }
                    </p>

                <p className="text-end pt-3">
                    { newDate }
                </p>

            </div>
        
        </div>

    );

};