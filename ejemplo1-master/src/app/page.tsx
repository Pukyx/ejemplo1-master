import Image from "next/image";
import styles from "./page.module.css";
import FormularioAlumno from "./FormularioAlumno";
import FormularioAlumnoFinal from "./FormularioAlumnoFinal";

export default function Home() {
  return (
    <>
    <h1>Hola</h1>
    <p
     style={{backgroundColor:'red'}} >
      Come estas</p>
      <FormularioAlumno></FormularioAlumno>
      <FormularioAlumnoFinal/>
    <input type="checkbox"
     className="PintarAzul"
    
    />
    </>
  );
}
