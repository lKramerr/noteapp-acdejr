import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { testThunk } from '../store/note/thunks';

export const useLoadNotes = () => {

    const dispatch = useDispatch();
    const { isOnHomePage } = useSelector( state => state.noteapp );

    useEffect( () => {

        dispatch( testThunk() );

    }, [ isOnHomePage ] );
    
    return [
        {
            id: 1, title: 'Note title', body: 'lorem ipsum bla bla bla', color: 'rgb(255, 0, 110)'
        },
        {
            id: 2, title: 'Note title', body: 'lorem ipsum bla bla bla', color: 'rgb(131, 56, 236)'
        },
        {
            id: 3, title: 'Note title', body: 'lorem ipsum bla bla bla', color: 'rgb(251, 86, 7)'
        },
        {
            id: 4, title: 'Note title', body: 'lorem ipsum bla bla bla', color: 'rgb(243, 19, 19)'
        },
        {
            id: 5, title: 'Note title', body: 'lorem ipsum bla bla bla', color: 'rgb(255, 0, 110)'
        },
    ]

};