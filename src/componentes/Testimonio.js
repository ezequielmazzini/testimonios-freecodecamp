import React from 'react';


// Creamos el componente
// Todo componente es una funcion de JS
// Export antes de la función es una exportacion nombrada, hay que importar entre llaves
export function Testimonio (){ 
  return (
    <div className='contenedor-imagen'>
      <img 
        className='imagen-testimonio'
        src={require('../imagenes/testimonio-emma.png')}
        alt='Imagen de Emma'
        />
        <div className='contenedor-texto-testimonio'>
          <p className='nombre-testimonio'>Emma Bostian en Suecia</p>
          <p className='cargo-testimonio'>Ingeniera de software en Spotify</p>
          <p className='texto-testimonio'>"Siempre he tenido problemas para aprender JavaScript. Tomé muchos cursos, pero el curso de freeCodeCamp fue el que se quedó. Estudiar JavaScript, así como estructuras de datos y algoritmos en freeCodeCamp me dio las habilidades y la confianza que necesitaba para conseguir el trabajo de mis sueños como un ingeniero de software en Spotify".</p>
        </div>
    </div> 
  );
}

// Exportacion por defecto
// export default Testimonio; 