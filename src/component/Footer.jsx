import React from 'react'

const Footer = () => {
  return (
    <footer>
      <p style={{textAlign:'center', backgroundColor: 'red'}}>Powered by</p>
    
    
      <div className='logo-dh'>
        <img src="images/imagenDH.png" alt=""  style={{width: '200px'}}/>
      </div>
     
      
      <div className='logos' >
        <img src="/images/ico-facebook.png" alt="" />
        <img src="/images/ico-instagram.png" alt=""  />
        <img src="/images/ico-tiktok.png" alt=""  />
        <img src="/images/ico-whatsapp.png" alt="" />
      </div>
     
  
  

    </footer>
)
}

export default Footer