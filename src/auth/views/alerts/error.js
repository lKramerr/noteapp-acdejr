import Swal from "sweetalert2";

export const callErrorAlert = ( errorMessage ) => {

        Swal.fire({
            title: errorMessage,
            icon: 'error',
            confirmButtonColor: '#CDBEAC'
        });

};

export const callConfirmAlert = async( confirmMessage ) => {

    let result = false;

    result = await Swal.fire({
        title: confirmMessage,
        icon: 'warning',
        showCancelButton: true,
        confirmButtonText: 'Borrar',
        confirmButtonColor: '#CDBEAC',
        cancelButtonText: 'Cancelar',
        reverseButtons: true,
    }).then( (result) => {
        if( result.isConfirmed ) {
            return true;
        };
    } );

    return result;

};