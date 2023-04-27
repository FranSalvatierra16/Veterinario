import React, { useState, useEffect } from 'react'
import Error from './Error';

const Formu = ({pacientes,setPacientes, paciente, setPaciente}) => {
  const [nombre, setNombre] = useState('');
  const [propietario, setPropietario] = useState('');
  const [email, setEmail] = useState('');
  const [fecha, setFecha] = useState('');
  const [sintoma, setSintoma] = useState('');
  const[error, setError]= useState(false);

useEffect (() =>{

  if(Object.keys(paciente).length>0){
setNombre(paciente.nombre);
setPropietario(paciente.propietario);
setEmail(paciente.email);
setFecha(paciente.fecha);
setSintoma(paciente.sintoma);

  }
},[paciente])


  const generarid = () =>{
    const random = Math.random().toString(36).substr(2);
   
return  random

  }

  const handleSubmit= (e)=>{
    e.preventDefault()

   ///Validacion del formulario
   if([nombre, propietario, email, fecha, sintoma].includes(''))
   {setError(true)}
   else{
   console.log("Esta todo lleno")
   setError(false)
  
   
   }
   /// objeto del paciente
   const objetoPaciente=
   {
    nombre, propietario, email, fecha, sintoma,
    
   }
   if(paciente.id){
objetoPaciente.id=paciente.id;
const pacienteactualizados = pacientes.map(pacienteState => pacienteState.id === paciente.id ? objetoPaciente : pacienteState)
setPacientes(pacienteactualizados)
setPaciente({})
   }
   else{
    objetoPaciente.id = generarid()
    setPacientes([...pacientes, objetoPaciente])
   }

   /// reiniciar formulario
   setNombre('')
   setPropietario('')
   setEmail('')
   setFecha('')
   setSintoma('')
  }
  
  return (
    <div className='md:w-1/2 lg: w-2/5 text-lg'>
      <h2 >Seguimiento Pacientes</h2>
      <p className='text center mt-5 font-bold mb-10'>Añade pacientes y {""} <span className='text-red-400'>administralos</span></p>
      <form onSubmit={ handleSubmit }>{
        error && (
          <Error
          mensaje={"Todos los campos son obligatorios"}
          
          />

        )
      }
        
        <div className='bg-red-400 shadow-md rounded-lg py-5 px-10 mb-5 '>

      
          <label htmlFor='nombre' className='block text-gray-600 uppercase font-bold mb-5'> Nombre Mascota</label>
          <input id='nombre' type="text"
            placeholder='Nombre mascota'
            className='w-full p-2 rounded-b-md mb-5'
            value={nombre}
            onChange={(e)=> setNombre(e.target.value)}
          />
          <label htmlFor='propietario' className='block text-gray-600 uppercase font-bold mb-5'> Nombre Dueño</label>
          <input id='propietario' type="text"
            placeholder='Nombre dueño'
            className='w-full p-2 rounded-b-md mb-5'
            value={propietario}
            onChange={(e)=> setPropietario(e.target.value)}
          />
          <label htmlFor='email' className='block text-gray-600 uppercase font-bold mb-5'> Email</label>
          <input id='email' type="text"
            placeholder='ejemplo@hotmail.com'
            className='w-full p-2 rounded-b-md mb-5'
            value={email}
            onChange={(e)=> setEmail(e.target.value)}
          />
          <label htmlFor='fecha' className='block text-gray-600 uppercase font-bold mb-5'> Fecha de nacimiento</label>
          <input id='fecha' type="date"
            placeholder='dd/mm/year'
            className='w-full p-2 rounded-b-md mb-5'
            value={fecha}
            onChange={(e)=> setFecha(e.target.value)}
          />
          <label htmlFor='sintoma' className='block text-gray-600 uppercase font-bold mb-5'> Sintomas</label>
          <textarea id='sintoma' className='w-full p-2 rounded-b-md mb-5'

             
             placeholder='Escribir sintomas...' 
              value={sintoma}
              onChange={(e)=> setSintoma(e.target.value)}>

            
          </textarea>
          <input className=' bg-gray-100 w-full font-bold rounded-md hover: bg-gray-600 cursor-pointer ' type="submit"
            value={paciente.id ? 'Editar paciente': 'Agregar paciente'} />

        </div>
      </form>
    </div>
  )
}

export default Formu
