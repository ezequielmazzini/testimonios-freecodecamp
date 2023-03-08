import React from 'react';
import '../hojas-de-estilo/Testimonio.css';

// Creamos el componente
// Todo componente es una funcion de JS
// Export antes de la función es una exportacion nombrada, hay que importar entre llaves no usando ahora

function Testimonio_sin_props (){ 
  return (
    <div className='contenedor-testimonio'>
      <img 
        className='imagen-testimonio'
        src={require(`../imagenes/testimonio-emma.png`)}
        alt='Imagen de Emma'
        />
        <div className='contenedor-texto-testimonio'>
          <p className='nombre-testimonio'><strong>Emma Bostian</strong> en Suecia</p>
          <p className='cargo-testimonio'>Adicionista en <strong>Parripollos Eugenio</strong></p>
          <p className='texto-testimonio'>"Soy un componente sin props, malisimo!!. Siempre me imaginé en el lugar donde estoy."</p>
        </div>
    </div> 
  );
}

export default Testimonio_sin_props; 