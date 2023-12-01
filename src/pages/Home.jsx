

import { useCharContext } from '../contex/Context'
import Card from '../component/Card';


const Home = () => {
 const {state} = useCharContext()
  return (
    
    <div className='conteinercard'>
      
      {state.list.map(characters => <Card characters={characters} key={characters.id}/>)}
      
    </div>
  )
}

export default Home