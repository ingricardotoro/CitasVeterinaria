import React from 'react'
import PropTypes from 'prop-types'

export const Cita = ({cita,DeleteCita}) => (
   
    <div className="cita">
        <p>Mascota: <span>{cita.mascota}</span></p>
        <p>Dueño: <span>{cita.propietario}</span></p>
        <p>fecha: <span>{cita.fecha}</span></p>
        <p>hora: <span>{cita.hora}</span></p>
        <p>sintomas: <span>{cita.sintomas}</span></p>

        <button 
            className="button eliminar u-full-width"
            onClick={ () => DeleteCita(cita.id)}
            >
            Elimiar Cita
        </button>
    </div>

)

Cita.propTypes ={
    cita: PropTypes.object.isRequired,
    DeleteCita: PropTypes.func.isRequired
}