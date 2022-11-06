import { useDispatch, useSelector } from 'react-redux';
import { useForm } from '../../hooks';
import { startChangingHomeView, startCreatingNote } from '../../store/note/thunks';
import { noteState } from '../states/noteState';

import '../styles/noteWorkshop.css';

export const NoteWorkshop = () => {

    const dispatch = useDispatch();
    const { isSaving } = useSelector( state => state.noteapp );
    const { onInputChange, formState, setFormState, title, body, color } = useForm( noteState );

    let displayColor = 'purple';
    
    const onChangePinkColor = ( event ) => {
        
        const backgroundColor = event.target.style.backgroundColor;

        setFormState( { ...formState, color: backgroundColor } );

    };

    if ( color === 'rgb(131, 56, 236)' ) displayColor = 'purple';
    if ( color === 'rgb(255, 0, 110)' ) displayColor = 'pink';
    if ( color === 'rgb(251, 86, 7)' ) displayColor = 'orange';
    if ( color === 'rgb(243, 19, 19)' ) displayColor = 'red';

    const onChangeHomeView = () => {

        dispatch( startChangingHomeView() );

    };

    const onSendNote = async( event ) => {

        event.preventDefault();

        dispatch( startCreatingNote( formState ) );
        dispatch( startChangingHomeView() );

    };

    return (

        <div className="create-notes-container w-75 mt-4">

            <div className="d-flex justify-content-between mb-2">

                <i className="bi bi-arrow-left fs-3 ms-1" onClick={ onChangeHomeView }></i>
                <i className="bi bi-trash3 fs-3 ms-1"></i>

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
                rows={ 16 }
            />

            <div>
                <button className="color-btn" name="purple" style={ { backgroundColor: '#8338EC' } } onClick={ onChangePinkColor }></button>
                <button className="color-btn" name="pink" style={ { backgroundColor: '#FF006E' } } onClick={ onChangePinkColor }></button>
                <button className="color-btn" name="orange" style={ { backgroundColor: '#FB5607' } } onClick={ onChangePinkColor }></button>
                <button className="color-btn" name="red" style={ { backgroundColor: '#F31313' } } onClick={ onChangePinkColor }></button>
            </div>

            <button
                className={ "action-btn save-note " + displayColor }
                disabled={ isSaving }
                onClick={ onSendNote }
            >
                Guardar
            </button>

        </div>

    );

};