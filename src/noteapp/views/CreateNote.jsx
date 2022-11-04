import '../styles/createNote.css';

export const CreateNote = () => {

    return (

        <>

            <div className="d-flex justify-content-between mb-2">

                <i className="bi bi-arrow-left fs-3 ms-1"></i>
                <i className="bi bi-trash3 fs-3 ms-1"></i>

            </div>
        
            <form action="">
                <input
                    type="text"
                    placeholder="Título"
                    className="note-form note-title"
                />

                <textarea
                    type="text"
                    name=""
                    placeholder="Entonces..."
                    className="note-form"
                    rows={ 16 }
                />

                <button className="action-btn save-note">Guardar</button>
            </form>
        
        </>

    )

};