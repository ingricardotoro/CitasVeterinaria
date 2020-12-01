import React, { Fragment, useState } from 'react'
import { v4 as uuidv4 } from 'uuid';
import PropTypes from 'prop-types'

export const Formulario = ({crearCita}) => {

    const [cita, setCita] = useState({
        mascota:'',
        propietario:'',
        fecha:'',
        hora:'',
        sintomas:''
    })

    //para el control de errore
    const [error, setError] = useState(false)

    const handleChange = (e)=>{
       setCita({
           ...cita,
           [e.target.name] : e.target.value
       }) 
    }

    const reiniciarFormulario =()=>{
        setCita({
            mascota:'',
            propietario:'',
            fecha:'',
            hora:'',
            sintomas:''
        })
    }

    const {mascota,propietario,fecha,hora,sintomas} = cita

    const handleSubmit =(e) =>{
        e.preventDefault()

        //validar
        if(mascota.trim() === '' || propietario.trim() === '' || fecha.trim() === '' || hora.trim() === '' || sintomas.trim() === ''){
           setError(true)
            return
        }

        setError(false)

        //generar ID unico
        cita.id = uuidv4()

        //Crear la Cita
        crearCita(cita)

        //reuniciar el formulario
        reiniciarFormulario()
    }

    return (
        <Fragment>

            <h2>Desde formulario</h2>

            {error ? <p className="alerta-error">Todos los campos son obligatorios</p> : null}

            <form onSubmit={handleSubmit}>
                <label>Nombre de Mascota</label>
                <input 
                    type="text"
                    name="mascota"
                    className="u-full-width"
                    placeholder="Nombre de Mascota"
                    onChange={handleChange}
                    value={mascota}
                />

                <label>Nombre de Dueño</label>
                <input 
                    type="text"
                    name="propietario"
                    className="u-full-width"
                    placeholder="Nombre del dueño"
                    onChange={handleChange}
                    value={propietario}
                />

                <label>Fecha</label>
                <input 
                    type="date"
                    name="fecha"
                    className="u-full-width"
                    onChange={handleChange}
                    value={fecha}
                />

                <label>Hora</label>
                <input 
                    type="time"
                    name="hora"
                    className="u-full-width"
                    onChange={handleChange}
                    value={hora}
                />

                <label>Síntomas</label>
                <textarea onChange={handleChange} value={sintomas}  className="u-full-width"  name="sintomas" cols="30" rows="5"></textarea>

                <button
                    type="submit"
                    className="u-full-width button-primary"
                >Agregar Cita

                </button>

            </form>

        </Fragment>
    )
}

Formulario.propTypes ={
    crearCita: PropTypes.func.isRequired
}