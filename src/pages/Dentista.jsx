import React from 'react'
import axios from 'axios'
import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

const Dentista = () => {
  
   
 
 
 const [char , setChar] = useState({})
 const {id} = useParams()

 const url = 'https://jsonplaceholder.typicode.com/users/' + id

  useEffect(() => {
    const fetChar = async() => {
      const res = await axios(url)
      setChar(res.data)


    } 
    
    fetChar()
  }, [])
 
  return (
    <div className='info'>
      
      <label >NOMBRE DENTISTA</label>
      <h4 style={{borderRadius: '20px', backgroundColor:'yellow'}}>{char.name}</h4>
      
      <label >EMAIL DENTISTA</label>
      <h4 style={{borderRadius: '20px', backgroundColor:'green', color:'white'}}>{char.email}</h4>
      
      <label >TELEFONO DENTISTA</label>
      <h4 style={{borderRadius: '20px', backgroundColor:'red', color:'white'}}>{char.phone}</h4>
      
      <label > SITIO WEB DENTISTA</label>
      <h4 style={{borderRadius: '20px', backgroundColor:'brown', color:'white'}}>{char.website}</h4>
    </div>
  )
}

export default Dentista

