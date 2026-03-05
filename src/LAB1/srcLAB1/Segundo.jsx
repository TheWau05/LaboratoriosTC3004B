import React from 'react'

function Segundo() {

    const saludo = "Hola mundo tec";
    function mostrarSaludo(){
        return('Saludando desde funcion')
    }
  return (
    <div>
        <div> {saludo} </div>
        <br /> 
        <div> {mostrarSaludo()}</div>
    </div>
  )
}

export default Segundo