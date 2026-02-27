import React from 'react'
import {bancos} from '../components/bancos.js'

function Tercer() {
  return (
    <div>
        <h1>
            Lista de Bancos Internacionales
        </h1>
        <ul>
        {bancos.map((a) => (
            <li key={a.id}>
            {a.id} — {a.name}
            </li>
            ))}
        </ul>
    </div>
  )
}

export default Tercer