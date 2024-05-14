import { useState } from 'react';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Navigation from './Components/Navigation';
import Container from 'react-bootstrap/esm/Container';
import SectionHeader from './Components/SectionHeader';
import DesignBackground from './Components/DesignBackground';



function App() {
  const [count, setCount] = useState(0)

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
      <Container fluid >
        <Row >
        <SectionHeader/>
        </Row>
      </Container>  
     <DesignBackground/>
    </Container> 
    </>
  )
}

export default App
