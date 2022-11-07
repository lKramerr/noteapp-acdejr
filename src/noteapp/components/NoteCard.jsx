import { colorsHandler } from "../../helpers/colorsHandler";


export const NoteCard = ( { title, body, color } ) => {

    const displayColor = colorsHandler( color );

    return (

        <div className="col mt-4">
        
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