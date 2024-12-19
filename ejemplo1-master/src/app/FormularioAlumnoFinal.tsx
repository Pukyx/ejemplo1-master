'use client'
import { registrarAlumno } from '@/Firebase/Promesas'
import { iSAlumno } from '@/InitialStates/ISAlumno'
import React, { useState } from 'react'
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

export const FormularioAlumnoFinal=() => {
    const[alumno,setAlumno] = useState(iSAlumno)
    const handleAlumno = (estado:string,valor:string)=>{
        if(estado=="nombre" || estado=="apellido" || estado=="edad" || estado=="correo"){
        setAlumno({...alumno,[estado]:valor})
        }
    }
    const handleRegistrar = ()=>{
      console.log("Le diste al botón")
      alert("Vas a registrar")
      console.log(alumno)
      registrarAlumno(alumno).then(()=>{
            //then es para hacer algo si la promesa se cumple
            alert("Se registró")
      }).catch((e)=>{
            //catch si la promesa falla 
            alert("Algo falló")
      })
    }

  return (
    <>
    <h1>Formulario Final</h1>
    <p>Nombre:{alumno.nombre}</p>
    <p>Apellido:{alumno.apellido}</p>
    <p>Edad:{alumno.edad}</p>
    <p>Correo:{alumno.correo}</p>
    <Form>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Nombre:</Form.Label>
        <Form.Control type="text" placeholder="Ingrese su nombre"
            name='nombre'
            onChange={(e)=>{handleAlumno(e.currentTarget.name,e.currentTarget.value)}}/>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Apellido:</Form.Label>
        <Form.Control type="text" placeholder="Ingrese su apellido"
            name='apellido'
        onChange={(e)=>{{handleAlumno(e.currentTarget.name,e.currentTarget.value)}}}/><br/>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Edad:</Form.Label>
        <Form.Control type="number" placeholder="Ingrese su edad"
        name='edad'
        onChange={(e)=>{handleAlumno(e.currentTarget.name,e.currentTarget.value)}}/><br/>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Correo:</Form.Label>
        <Form.Control type="email" placeholder="Ingrese su correo"
        name='correo'
        onChange={(e)=>{handleAlumno(e.currentTarget.name,e.currentTarget.value)}}/><br/>
      </Form.Group>

      <Button variant="primary" type="button" 
            onClick={handleRegistrar}>Registrar</Button>
    </Form>
    </>
  )
}
export default FormularioAlumnoFinal