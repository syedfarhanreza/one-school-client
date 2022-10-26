import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';
import image from '../../../assets/images/Logo.jpg'

const Header = () => {
  return (
    <Navbar collapseOnSelect className='mb-4' expand="lg" bg="dark" variant="dark">
      <Container>
        <Navbar.Brand className='me-4' href="#home">
          <img
            alt=""
            src={image}
            width="30"
            height="30"
            className="d-inline-block align-top"
          />{' '}
          OneSchool
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Link className='me-2 text-decoration-none ' to='/'>Home</Link>
            <Link className='me-2 text-decoration-none ' to='/courses'>Courses</Link>
            <Link className='me-2 text-decoration-none ' to='faq'>FAQ</Link>
            <Link className='me-2 text-decoration-none ' to='/blog'>Blog</Link>
          </Nav>
          <Nav>
            <Nav.Link href="#deets">More deets</Nav.Link>
            <Nav.Link eventKey={2} href="#memes">
              Dank memes
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;