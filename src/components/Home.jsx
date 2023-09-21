import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  const imageStyle = {
    maxWidth: '500px',
    maxHeight: '250px',
    display: 'block',
    margin: '0 auto',
  };
  const buttonStyle = {
    backgroundColor: 'green',
    color: '#fff',
    padding: '10px 20px',
    fontSize: '18px',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
    marginTop: '20px',
    marginLeft: 'auto',   
    marginRight: 'auto',
  };

  return (
    <div>
      <h1 className="welcome" style={{ textAlign: "center" }}>
        Bienvenidos ToDo
      </h1>
      <img
        src="https://www.thespruce.com/thmb/eOuwYkllVBE97rMo1SB04bHDMbk=/4500x0/filters:no_upscale():max_bytes(150000):strip_icc()/organizing-a-to-do-list-2648011-hero-16c4949473354d57aab32e06a7cd619e.jpg"
        alt="Imagen de bienvenida"
        style={imageStyle}
      />
      <p style={{ textAlign: "center" }}>
        ¡Bienvenido a nuestra aplicación de tareas por hacer! Organiza tus tareas de manera efectiva y mantén un registro de lo que necesitas hacer.
      </p>
      <div style={{ display: 'flex', justifyContent: 'center', marginTop: '20px' }}>
        <Link to="/tareas">
          <button style={buttonStyle}>Añadir tarea</button>
        </Link>
      </div>


    </div>
  );
}

export default Home;
