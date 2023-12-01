
import { Route, Routes } from 'react-router-dom'

import './App.css'
import Home from './pages/Home'
import Contact from './pages/Contact'
import Favs from './pages/Favs'
import Navbar from './component/NavBar'
import  Dentista  from './pages/Dentista'
import Footer from './component/Footer'
import { useCharContext } from './contex/Context'


function App() {
  
 const {state} = useCharContext()
  return (
    <>
    <div className={`app ${state.theme ==='dark' ? 'darkapp' : 'ligthapp'} `}>
    <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/Contact' element={  <Contact/>}/>
        <Route path='/favs' element={<Favs/>}/>
        <Route path='/dentista/:id' element={<Dentista/>}/>
        
      
        
      </Routes>
     
      <Footer/>
    </div>
    
    </>
  )
}

export default App
