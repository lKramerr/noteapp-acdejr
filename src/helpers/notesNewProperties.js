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

        const day = dateToFormat.getDate().toString();
        const month = dateToFormat.getMonth() + 1;
        const year = dateToFormat.getFullYear();

        return day + ' - ' + month + ' - ' + year;
        
    } );

    return {
        newTitle, newBody, newDate
    };

};