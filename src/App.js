import { Route, Routes } from 'react-router-dom';
import './App.css';
import Barra from './componentes/Barra'
import GoogleMap from './componentes/Mapa'
import Galeria from './componentes/Carrusel'
import UTD from './componentes/UTD'
import Logo from './componentes/Logo'
import Carrera from './componentes/Carrera'
import Nombre from './componentes/Nom'
import Home from './componentes/Home'
import Perfil from './componentes/Perfil'
import PDF from './componentes/PDF';
import Login from './componentes/Login'
import Logout from './componentes/Logout'




function App() {
  return (
    <div className='all'>
    <Barra></Barra>
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/mapa' element={<GoogleMap />} />
      <Route path='/galeria' element={<Galeria />} />  
      <Route path='/UTD' element={<UTD />} />
      <Route path='/logo' element={<Logo />} />
      <Route path='/carrera' element={<Carrera />} />
      <Route path='/nombre' element={<Nombre />} />
      <Route path='/foto' element={<Perfil />} />
      <Route path='/CV' element={<PDF />} />
      <Route path='/login' element={<Login />} /> 
      <Route path='/logout' element={<Logout />} /> 


    </Routes>
    </div>
  );
}

export default App;
