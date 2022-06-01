import Swal from 'sweetalert2'
import './alerts.css'

export const alertSuccess = ()=>{
  Swal.fire({
    title: 'Login exitoso',
    icon: 'success',
    timer: 4000
  })
}
