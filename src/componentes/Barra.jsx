import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { motion } from "framer-motion"
import { Link } from 'react-router-dom';

function Barra() {
  return (
    <motion.div className='barra'
    initial={{x:500 }}
      animate={{ x:0}}
      transition={{ duration:.2 }}
      >

      <Navbar bg="dark" variant="dark" expand="lg">
      <Container>
      <Navbar.Brand as={Link} to='/'>
            <img
              alt=""
              src='https://cdn-icons-png.flaticon.com/512/3135/3135874.png'
              width="30"
              height="30"
              className="d-inline-block align-top"
            />{' '}
            Curriculum
          </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
         <Nav.Link as={Link} to='/' > Inicio</Nav.Link>
         <Nav.Link as={Link} to='/login' > Login</Nav.Link>
         <Nav.Link as={Link} to='/logout' > Logout</Nav.Link>
          <Nav.Link as={Link} to='/UTD'>UTD</Nav.Link>
         <Nav.Link as={Link} to='/Logo' > Logo</Nav.Link>
          <Nav.Link as={Link} to='/carrera'>Carrera</Nav.Link>
          <Nav.Link as={Link} to='/galeria'>Galeria</Nav.Link>
          <Nav.Link as={Link} to='/mapa' > Mi Ubicacion</Nav.Link>

            <NavDropdown title="Alumno" id="basic-nav-dropdown">
              <NavDropdown.Item as={Link} to='/nombre'>Nombre</NavDropdown.Item>
              <NavDropdown.Item as={Link} to='/Foto'>Foto</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item as={Link} to='/CV'>
                Curriculum Vitae
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>

    

    </motion.div>

  );
}

export default Barra;