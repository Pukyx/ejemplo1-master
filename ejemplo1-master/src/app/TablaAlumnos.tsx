'use client'
import { ObtenerAlumnos } from "@/Firebase/Promesas"
import { IAlumno } from "@/Interfaces/IAlumno"
import React, { useEffect, useState } from "react"


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
            <table>
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
                        lAlumnos.map((alumno)=>{
                            return(
                                <tr>
                                    <td>{alumno.nombre}</td>
                                    <td>{alumno.apellido}</td>
                                    <td>{alumno.edad}</td>
                                    <td>{alumno.correo}</td>
                                </tr>
                            )
                        })
                    }
                </tbody>
            </table>
        </>
    )
}
export default TablaAlumnos