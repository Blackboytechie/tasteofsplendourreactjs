import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import CarousalComp from '../components/CarousalComp';

function Homepage() {
  return (
    <Container fluid className='homepageContainer'>
      <Row>
        <Col>
        <CarousalComp/>
        </Col>
      </Row>
    </Container>
  );
}

export default Homepage;