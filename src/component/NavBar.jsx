
import { Link } from 'react-router-dom'
import { useCharContext } from '../contex/Context'
import { useState } from 'react'

const Navbar = () => {
 const {state, dispatch} = useCharContext()
 
 const [theme, setTheme] = useState('light')
 
 const toggleTheme = () => {
  
  const newTheme = theme ==='light' ? 'dark' : 'light'
  setTheme(newTheme)
  dispatch({type: 'CHANGE_THEME', payload : newTheme})
 }
 

  return (
   
    

    <div className='Header'> 
           
        <Link to='/' style={{margin:'20px'}}><h4>Home</h4></Link> 
        <Link to='/favs' style={{margin:'20px'}}><h4>Favs</h4></Link>    
        <Link to='/contact'style={{margin:'20px'}}><h4>Contact</h4></Link>  
        
        <button onClick={toggleTheme}> {theme==='light' ? '🌞' : '🌜' }</button>


    </div>
  )
  
}

export default Navbar