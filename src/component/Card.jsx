
import {Link } from 'react-router-dom'
import {useCharContext} from '../contex/Context'



const Card = ({characters}) => {

 
 const {state, dispatch} = useCharContext()
 const findFav = state.favs.find(fav => fav.id == characters.id)
 
 
 const addFav = () => {
        
  if(findFav){
    alert('ya agregaste a favoritos')
  }else{
    dispatch({type: 'ADD_FAVS', payload: characters})
  }
            
  } 
  
   
 
  
  return (
    <div className='cards'>
     
     <Link to={'/Dentista/' + characters.id}>
     <h4><img src="images/doctor.png" alt="img" className='imagen'/></h4>
                 <h4>{characters.name}</h4>
                 <h4>{characters.username}</h4>
                
                
     </Link>
       <button onClick={addFav}>{findFav ? '🍕' : '🍔'}</button>
      
    </div>
  )
  
}

export default Card
