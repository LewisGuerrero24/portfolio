import React from 'react'
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/esm/Col';
import Row from 'react-bootstrap/esm/Row';
import photo from '../assets/photo.png'

const SectionHeader = () => {
  return (
    <>
    <div className='tarjet-position'>
        <div className="tarjet-1 tarjet_radius">
            <div className='containerr'>
                <img className="img-tarjet" src={photo}></img>
            </div> 
        </div>
        <div className='tarjet-2 tarjet_radius'>
            
        </div>
    </div>
    </>
   
  )
}

export default SectionHeader
