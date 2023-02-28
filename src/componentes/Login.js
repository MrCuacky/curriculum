import React from 'react';
import GoogleLogin from 'react-google-login';
import Swal from 'sweetalert2';

function Login() {

    const logeado_exito = (res) => 
      {
         Swal.fire({
            icon: 'success',
            title: 'Bienvenido',
            text: 'Se inicio sesión correctamente!',
            footer: '<a href="">Tienes algun problema?</a>'
          })
         console.log("LOGUEADO CON ÉXITO:",res.profileObj);
      }
    const fallo_login = (res) => 
      {
         Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Algo salió mal, pero no te preocupes no es tu culpa!',
            footer: '<a href="">Por que tengo este problema?</a>'
          })
          console.log("FALLO EN EL ACCESO:",res.profileObj);
      }
  
   return(
    <div className='content'>          
            <GoogleLogin
            clientId="589917764297-tbdhdibu9s6hlglri1kikona6cpu8cs5.apps.googleusercontent.com"
            buttonText="INGRESAR"
            onSuccess={logeado_exito}
            onFailure={fallo_login}
            cookiePolicy={'single_host_origin'}
            isSignedIn={true}
            />         
      </div>    
   )   
}      
export default Login;