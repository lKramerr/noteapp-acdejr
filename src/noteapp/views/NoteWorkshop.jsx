import { useDispatch, useSelector } from 'react-redux';
import { useForm } from '../../hooks';
import { startChangingHomeView, startCreatingNote } from '../../store/note/thunks';
import { noteState } from '../states/noteState';

import '../styles/noteWorkshop.css';

export const NoteWorkshop = () => {

    const dispatch = useDispatch();
    const { isSaving } = useSelector( state => state.noteapp );
    const { onInputChange, formState, title, body } = useForm( noteState );

    const onChangeHomeView = () => {

        dispatch( startChangingHomeView() );

    };

    const onSendNote = async( event ) => {

        event.preventDefault();

        dispatch( startCreatingNote( formState ) );
        dispatch( startChangingHomeView() );

    };

    return (

        <div className="create-notes-container">

            <div className="d-flex justify-content-between mb-2">

                <i className="bi bi-arrow-left fs-3 ms-1" onClick={ onChangeHomeView }></i>
                <i className="bi bi-trash3 fs-3 ms-1"></i>

            </div>
        
            <form onSubmit={ onSendNote } method="post">
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

                <button
                    className="action-btn save-note"
                    disabled={ isSaving }
                    onClick={ onSendNote }
                >
                    Guardar
                </button>
            </form>
        
        </div>

    );

};