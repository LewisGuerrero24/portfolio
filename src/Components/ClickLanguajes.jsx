import React from 'react'
import { CSSTransition } from 'react-transition-group';
import arrowdown from '../assets/arrow-down.svg'
import github from '../assets/github_icon.svg'
import linkdin from '../assets/linkedin_icon.svg'

const ClickLanguajes = ({handleToggleLanguages, showLanguages}) => {
    return (
        <>
            <div className='btns-about'>
                <div>
                <img src={arrowdown} alt="" />
                <a className='container-about-btn' href="#" onClick={handleToggleLanguages}>Lenguajes</a>
                </div>
                <div>
                    <a href="https://github.com/LewisGuerrero24" target='_blank'><img src={github} alt="" /></a>
                 </div>
                <div>
                    <a href="https://www.linkedin.com/in/lewisguerrero/" target='_blank'><img src={linkdin} alt="" /></a>
                </div>
            </div>

            <CSSTransition
                in={showLanguages}
                timeout={500}
                classNames="expand"
                unmountOnExit
            >
                <div className='container-languajes'>
                  <div className='languages'>
                    <p>JavaScript</p>
                  </div>
                  <div className='languages'>
                    <p>Java</p>
                  </div>
                  <div className='languages'>
                    <p>Python</p>
                  </div>
                  <div className='languages'>
                    <p>NodeJs</p>
                  </div>
                </div>
            </CSSTransition>
        </>
    )
}

export default ClickLanguajes