import React from 'react'
import wallet from "../Assets/wallet.png"
import react from "../Assets/atom.png"
import cart from "../Assets/shopping-cart.png"


const Project = () => {
  return (
    <div className='projects'>
        <div className='show-projects'>
            <div className='project-1'>
              <img alt='wallet' src={wallet}/>
            </div>
            <div className='project-2'>
              <img alt='cart' src={cart}/>
            </div>
            <div className='project-3'>
              <img src={react} alt='atom'/>
            </div>
        </div>
    </div>
  )
}

export default Project