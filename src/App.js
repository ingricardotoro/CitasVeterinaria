import React , { Fragment, useEffect, useState} from 'react'
import { Cita } from './components/Cita'
import { Formulario } from './components/Formulario'

function App() {

  //revisar si hay citas en localStorage
  //LocalStorage solo almacena Strings
  let citasIniciales = JSON.parse(localStorage.getItem('citas'))
  //en caso de haber citas en localStorage o ser Null
  if(!citasIniciales){
    citasIniciales=[]
  }

  //arreglo de citas
  const [citasArray, setCitasArray] = useState(citasIniciales)

  //enviar valores de las citas al localStorage
  useEffect(() => {
  let citasIniciales = JSON.parse(localStorage.getItem('citas'))

    if(citasIniciales){
      localStorage.setItem('citas', JSON.stringify(citasArray))
    }else{
      localStorage.setItem('citas',JSON.stringify([]))
    }
  }, [citasArray])

  //funcion que tome las citas actuales y agregue la nueva
  const crearCita = (cita)=>{
    setCitasArray([
      ...citasArray,
      cita
    ])
  }

  //funcion para eliminar las citas por su ID
  const DeleteCita = (id)=>{
    let nuevasCitas = citasArray.filter(cita => cita.id !== id)
    setCitasArray(nuevasCitas)
  }

  const titulo = citasArray.length === 0 ? 'No hay  citas' : 'Administración de Citas'

  return (
    <Fragment >

      <h1>Administración de Pacientes</h1>
      <div className="container">
        <div className="row">
          <div className="one-half column">
            <Formulario crearCita={crearCita} />
          </div>

          <div className="one-half column">
            <h1>{titulo} </h1>
            {
              citasArray.map(cita=>(
                <Cita
                  key={cita.id}
                  cita={cita}
                  DeleteCita={DeleteCita}
                />
              ))
            }
             
          </div>
        </div>
      </div>
    </Fragment>

    
  );
}

export default App;
