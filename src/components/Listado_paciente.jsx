import React , {  useEffect } from 'react'
import Paciente from './Paciente'
const Listado_paciente = ({pacientes, setPaciente,eliminarPaciente}) => {

  useEffect (() =>{
if(pacientes.length>0)
    {console.log("Nuevo paciente");}
  },[pacientes])


  return (
    <div className='md: w-1/2 lg:w-3/5 overflow-y-scroll' >
      {pacientes && pacientes.length ? (
        <>
      <h2 >Listado Pacientees</h2>
   
    <p className='text center mt-5 font-bold mb-10 text-lg'>Añadeeeeeee pacientes y {""} <span className='text-red-400'>administralos</span></p>

    {pacientes.map(paciente =>(

<Paciente
key={paciente.id}
paciente={paciente}
setPaciente={setPaciente}
eliminarPaciente={eliminarPaciente}
/>
    ))}
    </>
    ): 
    (<>
      <p className='text center mt-5 font-bold mb-10 text-lg'>No hay pacientes {""} <span className='text-red-400'>comienza a agregarlos</span></p>
      </>
    )}
   
    
    </div>
   
  )
    }

export default Listado_paciente
