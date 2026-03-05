import React from 'react'
import {bancos} from '../components/bancos'

function Lab1Humano() {
  return (
    <div>
        <h1> Mi lista de bancos </h1>
        <ul>
            {bancos.map((sucursales)=>(
                <li key={sucursales.id} >
                    {sucursales.id} el nombre de este banco es: {sucursales.name}

                </li>
            ))}
        </ul>
        
        </div>
  )
}

export default Lab1Humano