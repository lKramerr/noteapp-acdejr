import { useMemo } from "react";

export const notesNewProperties = ( title, body, creationDate ) => {

    const newTitle = useMemo( () => {

        return title.length > 20
            ? title.substring( 0, 20 ) + '...'
            : title;

    } );

    const newBody = useMemo( () => {
        return body.length > 77
            ? body.substring( 0, 77 ) + '...'
            : body;
    } );

    const newDate = useMemo( () => {
        const dateToFormat = new Date( creationDate );
        return dateToFormat.getDate().toString() + ' - ' + dateToFormat.getMonth() + ' - ' + dateToFormat.getFullYear();
    } );

    return {
        newTitle, newBody, newDate
    };

};