import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { testThunk, startLoadingNotes } from '../store/note/thunks';

export const useLoadNotes = () => {

    const dispatch = useDispatch();
    const { isOnHomePage } = useSelector( state => state.noteapp );

    useEffect( () => {

        dispatch( startLoadingNotes() );

    }, [ isOnHomePage ] );

    const { notes } = useSelector( state => state.noteapp );
    
    return notes

};