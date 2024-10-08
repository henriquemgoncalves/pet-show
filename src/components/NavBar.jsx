import '../styles/components/navbar.sass'
import { RiHome2Fill } from "react-icons/ri";
import Swal from 'sweetalert2/dist/sweetalert2.js'
import 'sweetalert2/src/sweetalert2.scss'

const NavBar = () => {
    const click = () => {
        Swal.fire({
            position: "center",
            icon: "success",
            showConfirmButton: true,
            timer: 2500
          });
    }

  return (
    <section id="navbar">
        <div className="container">
            <nav>
                <a href='#' onClick={click}>
                    Pets
                </a>
                <a href="#" onClick={click}>
                    About PetShow
                </a>
            </nav>
        </div>
        
        <a className='btn-home' href='/'>
            <RiHome2Fill/>
        </a>
        
    </section>
  )
}

export default NavBar
