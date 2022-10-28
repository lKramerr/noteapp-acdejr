import Swal from "sweetalert2";

export const callErrorAlert = ( errorMessage ) => {

        Swal.fire({
            title: errorMessage,
            icon: 'error'
        });

};