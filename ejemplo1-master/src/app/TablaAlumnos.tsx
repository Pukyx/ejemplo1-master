'use client'
import { ObtenerAlumnos } from "@/Firebase/Promesas"
import { IAlumno } from "@/Interfaces/IAlumno"
import React, { useEffect, useState } from "react"
import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';


export const TablaAlumnos = ()=>{
    const[lAlumnos, setLAlumnos] = useState<IAlumno[]>([])
    const handleObtenerTodo = ()=>{
        ObtenerAlumnos().then
            ((alumnos)=>{
                console.log(alumnos);
                setLAlumnos(alumnos);
            }).catch
                ((e)=>{console.log("Error")})
    }
    useEffect(()=>{
        handleObtenerTodo()
        
    },[]) //es como un listenner, se ejecuta cuendo una variable tiene un cambio
    return(
        <>
            <Table>
                <thead>
                    <tr>
                        <th>Nombre</th>
                        <th>Apellido</th>
                        <th>Edad</th>
                        <th>Correo</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        lAlumnos.map((alumno,index)=>{
                            return(
                                <tr key={index}>
                                    <td>{alumno.nombre}</td>
                                    <td>{alumno.apellido}</td>
                                    <td>{alumno.edad}</td>
                                    <td>{alumno.correo}</td>
                                    <td>
                                        <Button variant="warning">Modificar</Button>
                                        <Button variant="danger">Eliminar</Button>
                                    </td>
                                </tr>
                            )
                        })
                    }
                </tbody>
            </Table>

            {
                lAlumnos.map((alumno,index)=>{
                    return(
                    <Card style={{ width: '18rem' }} key={index}>
                    <Card.Img variant="top" src="holder.js/100px180" />
                    <Card.Body>
                      <Card.Title>{alumno.nombre} {alumno.apellido}</Card.Title>
                      <Card.Text>
                        <h6>Datos</h6>
                        <p>Edad:{alumno.edad}</p>
                        <p>Correo:{alumno.correo}</p>
                      </Card.Text>
                      <Button variant="warning">Modificar</Button>
                      <Button variant="danger">Eliminar</Button>
                    </Card.Body>
                  </Card>
                  )
                })
            }

        </>
    )
}
export default TablaAlumnos