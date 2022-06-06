import Swal from 'sweetalert2'
import './alerts.css'

export const alertLoginSuccess = ()=>{
  Swal.fire({
    title: 'Login successful',
    icon: 'success',
    timer: 4000
  })
}
export const alertRegisterSuccess = ()=>{
  Swal.fire({
    title: 'Register successful',
    icon: 'success',
    timer: 4000
  })
}
