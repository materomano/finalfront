import React, { useState } from 'react'
import Enviar from './Enviar'




const Contact = () => {
  
  
  
  const [nombre, setNombre]= useState('')
  const [email,setEmail]= useState('')
 const [click, setClick]= useState(false)
 const [error, setError]=useState(false)
 
  const handleSubmit = (event) => {
    event.preventDefault()
    if(nombre.length > 5){
        setClick(true)
        setError(false)
    }else{
        setError(true)
        setClick(true)
    }
    


  }
  
  console.log(Contact)
    return (
    <div className='contact'>
       
         {!click &&
          <form onSubmit={handleSubmit} className='form'>

                <label >nombre completo</label>
                <input type="text" value={nombre} onChange={(event) => setNombre(event.target.value)} />
                 <label >email</label>
                <input type="email" value={email} onChange={(event) => setEmail(event.target.value)} />
                <button style={{backgroundColor:'white', color:'black'}}>Enviar</button>

            </form> }
            { click ? <Enviar nombre={nombre} email={email}/> : null}
            {error && <h6>Por favor chequea que la información sea correcta</h6>}
           
    </div>
  )
}

export default Contact