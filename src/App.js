import './App.css';
import TestimonioSinProps from './componentes/Testimonio_sin_props.js';
import TestimonioConProps from './componentes/Testimonio_con_props.js';
import TestimonioConPropsExternos from './componentes/Testimonio_con_props_externos.js';
import DatosTestimonios from './componentes/Datos-testimonios';

function App() {

  /*

  */
  const TestimoniosDesdeExterno = DatosTestimonios.map(testimonio =>
    <TestimonioConPropsExternos 
      key={testimonio.id}
      nombre= {testimonio.nombre}
      pais= {testimonio.pais}
      cargo= {testimonio.cargo}
      empresa= {testimonio.empresa}
      testimonio= {testimonio.testimonio}
      imagen= {testimonio.imagen}
    />
  );
  
  return (
    <div className="App">
      <div className='contenedor-principal'>
        <h1 className='titulo-principal'>Esto es lo que dicen nuestros alumnos:</h1>
        <TestimonioSinProps />
        <TestimonioConProps 
          nombre= 'Shawn Wang'
          pais= 'Singapur'
          cargo= 'Ingeniero de software'
          empresa= 'Amazon'
          testimonio= 'Soy un componente con props pasados a mano en la funcion App, muy feo!. Da miedo cambiar de carrera. Solo gané la confianza de que podía programar trabajando en los cientos de horas de lecciones gratuitas en freeCodeCamp. En un año tenía un trabajo de seis cifras como ingeniero de software. freeCodeCamp cambió mi vida'
          imagen= 'shawn' />
          {TestimoniosDesdeExterno}
      </div>
    </div>
  );
}

export default App;
