import React from 'react'
import Link from 'next/link'


export const Menu = ()=> {
  return (
    <>
    <Link href="/">Home</Link>
    <Link href="/MostrarAlumnos">Mostrar Alumnos</Link>
    <Link href="/Registro">Ir a Registro</Link>
    </>
  )
}
