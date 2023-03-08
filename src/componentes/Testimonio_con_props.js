import React from 'react';
import '../hojas-de-estilo/Testimonio.css';

// Creamos el componente
// Todo componente es una funcion de JS
// Export antes de la función es una exportacion nombrada, hay que importar entre llaves no usando ahora

function TestimonioConProps (props){ 
  return (
    <div className='contenedor-testimonio'>
      <img 
        className='imagen-testimonio'
        src={require(`../imagenes/testimonio-${props.imagen}.png`)}
        alt={`Imagen de ${props.nombre}`}
        />
        <div className='contenedor-texto-testimonio'>
          <p className='nombre-testimonio'><strong>{props.nombre}</strong> en {props.pais}</p>
          <p className='cargo-testimonio'>{props.cargo} en <strong>{props.empresa}</strong></p>
          <p className='texto-testimonio'>"{props.testimonio}"</p>
        </div>
    </div> 
  );
}

export default TestimonioConProps; 