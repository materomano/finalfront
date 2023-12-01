import React from 'react'
import { useCharContext } from '../contex/Context'
import Card from '../component/Card'



const Favs = () => {
  const {state} = useCharContext()
  return (
    <div className='favs'>
      <h3 style={{textAlign:'center'}}>DENTISTA FAVORITOS</h3>
      {state.favs.map(favs => <Card characters={favs} key={favs.id}/> )}
      


    </div>
  )
}

export default Favs

