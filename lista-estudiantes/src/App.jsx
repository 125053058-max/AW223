import Estudiante from './components/estudiante.jsx';
import './App.css';


export default function App() {

  const estudiantes = [
    {id: 1, nombre: 'Fernando', carrera: "Medicina"},
    {id: 2, nombre: 'Damian', carrera: "Sistemas"},
    {id: 3, nombre: 'Valeria', carrera: "Lenguas"},
    
  ];

  return(

       <main className="contenedor"> 
       <h1>Listado de estudiantes</h1>

       <form>
        <input type="text" placeholder="Escribe nombre" />
        <input type="text" placeholder="Escribe carrera" />
        <button type="button">Agregar</button>

       </form>

       <h2>Estudiantes registrados </h2>

       <ul>

       {estudiantes.map((estudiante) => (

        <Estudiante
         key={estudiante.id}
         estudiante={estudiante}
         />
        

      ))
    }
       

      </ul>
      <p> total de estudiantes: {estudiantes.length}</p>

   
    </main>
   
  );
}