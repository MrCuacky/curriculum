import React from 'react';
import { GoogleLogout } from 'react-google-login';
import Swal from 'sweetalert2';

function Logout() {
    
    const Logout=(response)=>{
        Swal.fire({
            icon: 'success',
            title: 'Sesión Cerrada',
            text: 'Se cerró sesión correctamente!',
          })
            console.log("SESIÓN TERMINADA Contreras Vasquez Juan pablo" );
        
      }  
    return (   
        <div className='content'>     
            <GoogleLogout
                clientId="889082775733-uft314q6mcdcam2in0dd7rd0nsq8uprc.apps.googleusercontent.com"
                buttonText={"CERRAR SESIÓN"}
                onLogoutSuccess={Logout}
            />
        </div>    
    )  
}/* //FIN DE LA FUNCION */

export default Logout;