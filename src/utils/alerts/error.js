import Swal from "sweetalert2"

export const errorAlert = (message) => {
    return Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: message
    })
}