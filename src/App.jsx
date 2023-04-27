import React, { useState, useEffect } from 'react'
import Header from './components/Header'
import Formu from './components/Formu'
import Listado_paciente from './components/Listado_paciente'
import './App.css'

function App() {
  
  const [pacientes, setPacientes]= useState([]);
  const [paciente, setPaciente]= useState({});
  useEffect (() => {

    const obtenerLS = () => { 
      const pacientesLS = JSON.parse(localStorage.getItem('pacientes')) ?? [];
   setPacientes(pacientesLS)
  
  }
obtenerLS()
},[]);
  useEffect (() => {

localStorage.setItem('pacientes', JSON.stringify(pacientes))
  },[pacientes])
  const eliminarPaciente= id =>{

    const pacienteActualizadoss = pacientes.filter(paciente => paciente.id !== id);
    setPacientes(pacienteActualizadoss)

  }

  return (
   <div className='container mx-auto'>
     <Header/>
     
     <div className='mt-12 md:flex'>
     <Formu
     pacientes={pacientes}
      setPacientes={setPacientes}
      paciente={paciente}
      setPaciente={setPaciente}
      
      />
     <Listado_paciente
     pacientes={pacientes}
     setPaciente={setPaciente}
     eliminarPaciente={eliminarPaciente}
     />

     </div>
     </div>
  )
}

export default App
