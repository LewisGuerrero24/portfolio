import { useState } from 'react';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Navigation from './Components/Navigation';
import Container from 'react-bootstrap/esm/Container';
import DesignBackground from './Components/DesignBackground';
import TitleName from './Components/TitleName';
import RoutesPages from './Components/RoutesPages';

function App() {


  return (
    <>
    <Container fluid className='Container-body'>
      <Container fluid>
        <Row>
          <Col>
            <Navigation/>
          </Col>
        </Row> 
      </Container>
      <Container fluid  className='Container-Tittle' >
        <Row className='Tittle-Row'>
          <TitleName/>
          <RoutesPages/> 
        </Row>
      </Container>  
     <DesignBackground/>
    </Container> 
    </>
  )
}

export default App
