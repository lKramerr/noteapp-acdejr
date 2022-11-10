import { useDispatch } from "react-redux";
import { colorsHandler } from "../../helpers/colorsHandler";
import { setActiveNote } from "../../store/note/noteappSlice";


export const NoteCard = ( { id, title, body, color } ) => {

    const displayColor = colorsHandler( color );
    const dispatch = useDispatch();

    const onEditNote = () => {
        // dispatch( changeHomeView() );
        dispatch( setActiveNote( { id, title, body, color } ) );
    };

    return (

        <div className="col mt-4" onClick={ onEditNote }>
        
            <div className={ "note-card purple " + displayColor} >

                <p className="note-title">
                    { title }
                </p>

                <p className="note-body">
                    { body }
                </p>

                <p className="text-end pt-3">
                    06 - 11 - 2022
                </p>

            </div>
        
        </div>

    );

};