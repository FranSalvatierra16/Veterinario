import React from 'react'

const Paciente = ({paciente, setPaciente, eliminarPaciente}) => {
 const {nombre, propietario,email,fecha, sintoma, id} = paciente;
 const handleEliminar= () =>{

  const respuesta=confirm("Desea eliminar?")
  if(respuesta){

    eliminarPaciente(id)
  }

 }
  return (
    <div>
      
<div className='bg-red-400 rounded-md shadow-md py-10 px-5 m-5 text-left' >
    <p className='mb-3 uppercase text-xl font-bold text-gray-600'>Nombre : {""}
    <span className='font-normal normal-case'>{nombre} </span>
    </p>
    <p className='mb-3 uppercase text-xl font-bold text-gray-600'>Propietario : {""}
    <span className='font-normal normal-case'>{propietario} </span>
    </p>
    <p className='mb-3 uppercase text-xl font-bold text-gray-600'>Email : {""}
    <span className='font-normal normal-case'>{email} </span>
    </p>
    <p className='mb-3 uppercase text-xl font-bold text-gray-600'>Fecha : {""}
    <span className='font-normal normal-case'>{fecha} </span>
    </p>
    <p className='mb-3 uppercase text-xl font-bold text-gray-600'>Sintomas : {""}
    <span className='font-normal normal-case'>{sintoma} </span>
    </p>
    <div className='flex justify-between mt-10'>
      <button
      type='button'
      className='p-2 bg-green-600 uppercase rounded-md text-white text-lg mr-2 px-10'
      onClick={()=> setPaciente(paciente)}
      >
        Editar
      </button>
      <button  
       type='button'
       className='p-2 bg-red-600 px-10
        uppercase rounded-md text-white text-lg mr-2'
        onClick={handleEliminar}
      >
        Eliminar
      </button>
    </div>
    </div>
    </div>
  )
}

export default Paciente
