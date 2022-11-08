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
            id: 1, title: 'Note title', body: 'diam maecenas ultricies mi eget mauris pharetra et ultrices neque ornare aenean euismod elementum nisi', color: 'rgb(75, 85, 86)'
        },
        {
            id: 2, title: 'Note title', body: 'diam maecenas ultricies mi eget mauris pharetra et ultrices neque ornare aenean euismod elementum nisi', color: 'rgb(81, 17, 55)'
        },
        {
            id: 3, title: 'Note title', body: 'diam maecenas ultricies mi eget mauris pharetra et ultrices neque ornare aenean euismod elementum nisi', color: 'rgb(167, 48, 86)'
        },
        {
            id: 4, title: 'Note title', body: 'diam maecenas ultricies mi eget mauris pharetra et ultrices neque ornare aenean euismod elementum nisi', color: 'rgb(167, 48, 86)'
        },
        {
            id: 5, title: 'Note title', body: 'diam maecenas ultricies mi eget mauris pharetra et ultrices neque ornare aenean euismod elementum nisi', color: 'rgb(151, 61, 26)'
        },
    ]

};