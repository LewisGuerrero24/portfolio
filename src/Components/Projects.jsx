import React, { useState } from 'react';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Container from 'react-bootstrap/esm/Container';
import '../Css/App.css';
import '../Css/Projects.css';
import Navigation from './Navigation';
import DesignBackground from './DesignBackground';
import arrow from '../assets/arrow.svg';
import BiomedicalSoft from '../assets/BiomedicalSoft.jpg';
import Shoes from '../assets/shoes.jpg';
import Restaurante from '../assets/restaurante.png';


const Projects = () => {
  const namesProjects = ['BiomedicalSoft', 'Charlie SHoes', 'Restaurante My primavera'];
  const [isHovered, setIsHovered] = useState(false);
  const [nameImg,setIsNameImg] = useState()


    const handleMouseEnter = (name) => {
        setIsHovered(true);
        if(name == 'BiomedicalSoft'){
            setIsNameImg(<img src={BiomedicalSoft} alt='imagenproyecto'></img>)
        }else if(name == 'Charlie SHoes'){
          setIsNameImg(<img src={Shoes} alt='imagenproyecto'></img>)
        }else if(name == 'Restaurante My primavera'){
          setIsNameImg(<img src={Restaurante} alt='imagenproyecto'></img>)
        }else{
            setIsNameImg(<img src={name} alt='imagenproyecto'></img>)
        }
        

      };
    

      const handleMouseLeave = () => {
        setIsHovered(false);
      };
    

  return (     
    <Container fluid className='Container-body'>
      <Navigation />
      <Container fluid className='Container-main-projects'>
        <Row className='Row-Projects'>
          <div className='Image-project'>
          {isHovered ? nameImg : <p>Posa el mouse sobre mí</p>}
            
          </div>
          <div className='List-projects'>
            <p className='List-projects-tittle'>Proyectos</p>
            <ul>
              {namesProjects.map((name, index) => (
                <a onMouseEnter={() => handleMouseEnter(name)}  onMouseLeave={handleMouseLeave}  key={index}>
                  <img src={arrow} alt="arrow" />
                  <li className='List-projects-row'>{name}</li>
                </a>
              ))}
            </ul>
          </div>
        </Row>
      </Container>
      <DesignBackground />
    </Container>
  );
};

export default Projects;


