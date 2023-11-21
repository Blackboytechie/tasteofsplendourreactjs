import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import menuimg1 from '../assets/foodmenu/chickenburger.jpeg';
import { Link } from 'react-router-dom';

const Menupage = () => {
  return (
    <Container>
      <Row>
        <Col>
          <h2>Food Menu</h2>
        </Col>
      </Row>

      <Row>
        <Col>
          <CardGroup />
        </Col>
      </Row>
    </Container>
  );
};

const CardGroup = () => {
  // You can populate this array with your menu items
  const menuItems = [
    { id:1,title: 'chickenburger', description: 'Juicy,big,loaded with toppings of my choice',price:100 },
    { id:2,title: 'vegburger', description: 'Juicy,big,loaded with toppings of my choice',price:100 },
    { id:3,title: 'muttonburger', description: 'Juicy,big,loaded with toppings of my choice',price:100 },
    // Add more menu items as needed
  ];

  return (
    <Row>
      {menuItems.map((item, index) => (
        <Col key={index} md={4} sm={6}>
          <Card style={{ marginBottom: '20px' }}>
          <Card.Img variant="top" src={menuimg1} width={100} height={250}/>
            <Card.Body>
              <Card.Title>{item.title}</Card.Title>
              <Card.Text>&#8377; {item.price}</Card.Text>
              <Card.Text>{item.description}</Card.Text>
              <Link to={`/menu/${item.id}`} className="btn btn-warning">
                View Details
              </Link>
            </Card.Body>
          </Card>
        </Col>
      ))}
    </Row>
  );
};

export default Menupage;
