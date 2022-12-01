import { useDispatch, useSelector } from 'react-redux';
import { callConfirmAlert } from '../../auth/views/alerts/error';
import { colorsHandler } from '../../helpers/colorsHandler';
import { useForm } from '../../hooks';
import { startChangingHomeView, startCreatingNote, startDeletingNote, startSavingNote } from '../../store/note/thunks';
import { noteState } from '../states/noteState';

import '../styles/noteWorkshop.css';

export const NoteWorkshop = () => {

    const dispatch = useDispatch();

    const { isSaving, active } = useSelector( state => state.noteapp );
    const { onInputChange, formState, setFormState, title, body, color } = useForm( ( active ) ? active : noteState );

    const displayColor = colorsHandler( color ) ;
    const onChangeColor = ( event ) => {
        
        const backgroundColor = event.target.style.backgroundColor;

        setFormState( { ...formState, color: backgroundColor } );

    };

    const onChangeHomeView = () => {

        dispatch( startChangingHomeView() );

    };

    const onNewNote = async( event ) => {

        event.preventDefault();

        formState.orderNumber = new Date().getTime();
        formState.creationDate = new Date().toUTCString();

        dispatch( startCreatingNote( formState ) );
        dispatch( startChangingHomeView() );

    };

    const onSaveNote = async( event ) => {

        event.preventDefault();

        formState.orderNumber = new Date().getTime();
        formState.creationDate = new Date().toUTCString();

        dispatch( startSavingNote( formState ) );

    };

    const onDeleteNote = async() => {

        const result = await callConfirmAlert('¿Está seguro de que desea elimiar esta nota?');

        console.log( 'im this false', result );

        if ( result ) dispatch( startDeletingNote() );

    };

    return (

        <div className="create-notes-container w-75 mt-4">

            <div className="d-flex justify-content-between mb-2">

                <i className="bi bi-arrow-left fs-3 ms-1" onClick={ onChangeHomeView }></i>
                <i className="bi bi-trash3 fs-3 ms-1" onClick={ onDeleteNote } hidden={ ( active ) ? false : true }></i>

            </div>
        
            <input
                type="text"
                name="title"
                value={ title }
                onChange={ onInputChange }
                placeholder="Título"
                className="note-form note-title"
            />

            <textarea
                type="text"
                name="body"
                value={ body }
                onChange={ onInputChange }
                placeholder="Entonces..."
                className="note-form"
                rows={ 15 }
            />

            <div>
                <button className="color-btn" name="purple" style={ { backgroundColor: 'rgb(81, 17, 55)' } } onClick={ onChangeColor }></button>
                <button className="color-btn" name="pink" style={ { backgroundColor: 'rgb(167, 48, 86)' } } onClick={ onChangeColor }></button>
                <button className="color-btn" name="orange" style={ { backgroundColor: 'rgb(151, 61, 26)' } } onClick={ onChangeColor }></button>
                <button className="color-btn" name="red" style={ { backgroundColor: 'rgb(75, 85, 86)' } } onClick={ onChangeColor }></button>
            </div>

            <button
                className={ "action-btn save-note " + displayColor }
                disabled={ isSaving }
                onClick={ ( active ) ? onSaveNote : onNewNote }
            >
                Guardar
            </button>

        </div>

    );

};