import React, { useState } from 'react';
import Container from 'react-bootstrap/esm/Container';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import '../Css/App.css';
import '../Css/About.css';
import Navigation from './Navigation';
import DesignBackground from './DesignBackground';
import person from '../assets/person.png';
import { CSSTransition } from 'react-transition-group';
import arrowdown from '../assets/arrow-down.svg'
import ClickLanguajes from './ClickLanguajes';

const AboutMe = () => {
  const [showLanguages, setShowLanguages] = useState(false);

  const handleToggleLanguages = (e) => {
    e.preventDefault();
    setShowLanguages(!showLanguages);
  };

  return (
    <>
      <Container fluid className='Container-body'>
        <Navigation />
        <Container fluid className='Container-main-about'>
          <Row className='About-Row'>
            <article className='Container-about'>
              <h1>Sobre Mí</h1>
              <hr />
              <p>
                Mi nombre es <span className='span-name'>Lewis Guerrero</span> y soy desarrollador de software especializado en plataformas web y de escritorio, con experiencia en proyectos a nivel universitario. Me decidí por el campo de la tecnología porque, además de ser una industria en crecimiento, mis habilidades me permiten mejorar y facilitar procesos, contribuyendo así a mejorar la vida de las personas. Si me haces parte de tu equipo, tendrás a alguien dispuesto a dar las mejores soluciones en beneficio de otros.
              </p>
              <ClickLanguajes   handleToggleLanguages={handleToggleLanguages} showLanguages={showLanguages}/>
            </article>
            <div className='img-about'>
              <img src={person} alt="" />
            </div>
          </Row>
        </Container>
        <DesignBackground />
      </Container>
    </>
  );
};

export default AboutMe;
