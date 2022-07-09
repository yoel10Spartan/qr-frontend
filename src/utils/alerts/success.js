import Swal from "sweetalert2"

export const successAlert = (message) => {
    return Swal.fire(
        '¡Excelente!',
        message,
        'success'
    )
}