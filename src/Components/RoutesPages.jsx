import React from 'react'
import arrow from '../assets/arrow.svg'
import { Link } from "react-router-dom";

const RoutesPages = () => {
  return (
    <>
      <div className='routers'>
        <ul className='routers-pages'>
          <li><img src={arrow} alt="" /> <Link className="link" to={'contacts/1'}>mis Proyectos</Link></li>
          <li><img src={arrow} alt="" /><Link className='link' to={'/'}>más Sobre  mí</Link></li>
        </ul>
      </div>
    </> 
  )
}

export default RoutesPages