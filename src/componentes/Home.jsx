import React from "react";
import { motion } from "framer-motion";
import Card from 'react-bootstrap/Card';

function App() {
    return (
        <div className="containercard">
        <motion.div className="card"
        initial={{ opacity: 1, scale: 0}}
        animate={{ opacity: 1, scale:1 }}
        transition={{ duration: 1}}
        >
        <motion.Card 
        whileHover={{scale:1.03}}
        transition={{duration:.5}}
        >
        <Card.Body>
          <Card.Title>Método Render</Card.Title>
          <Card.Text>
          Todo componente de React, tiene un método Render que es el que se encarga de renderizar
          en el navegador el HTML correspondiente al componente. Este método se llama automáticamente cuando se crea un componente
          y cuando el estado del componente se actualiza (veremos esto más adelante)   
          </Card.Text>
        </Card.Body>
      </motion.Card>

        <motion.Card 
        whileHover={{scale:1.03 }}
        transition={{duration:.5}}

        >
        <Card.Body>
        <Card.Title>React Strict Mode</Card.Title>
        <Card.Text>
        StrictMode es una herramienta para destacar problemas potenciales en la aplicación. Al igual que Fragment, StrictMode no renderiza nada en la interfaz de usuario.
         Este modo también activa advertencias y comprobaciones adicionales para sus descendientes.
        </Card.Text>
        </Card.Body>
        </motion.Card>

        <motion.Card
        whileHover={{scale:1.03 }}
        transition={{duration:.5}}
        >
      <Card.Body>
        <Card.Title>Método Return</Card.Title>
        <Card.Text>
        Este método es obligatorio en cualquier componente, pues como su nombre lo indica, se utiliza para obtener los elementos finales a visualizar y renderizar en el navegador.
         Debe ser una funcion pura, es decir, no debe modificar las props, no debe modificar el state, ni realizar operaciones en el DOM
        </Card.Text>
      </Card.Body>
    </motion.Card>
    
    </motion.div>
        </div>

    );
  }
  
  export default App;