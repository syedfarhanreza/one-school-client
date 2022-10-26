import React from 'react';
import { useContext } from 'react';
import { FaUser } from 'react-icons/fa'
import { Button, Image } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';
import image from '../../../assets/images/Logo.jpg'
import { AuthContext } from '../../../contexts/AuthProvider/AuthProvider';
import LeftNav from '../LeftNav/LeftNav';


const Header = () => {
  const {user, logOut} = useContext(AuthContext);

  const handleLogOut = () => {
    logOut()
    .then(() => {})
    .catch(error => console.error(error))
  }

  return (
    <Navbar collapseOnSelect className='mb-4' expand="lg" bg="light" variant="light">
      <Container>
        <Navbar.Brand className='me-4' href="/">
          <Link className='text-decoration-none' to='/'>
          <img
            alt=""
            src={image}
            width="30"
            height="30"
            className="d-inline-block align-top"
          />{' '}
          OneSchool
          </Link>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse className='px-5' id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Link className='me-4 text-decoration-none ' to='/'>Home</Link>
            <Link className='me-4 text-decoration-none ' to='/courses'>Courses</Link>
            <Link className='me-4 text-decoration-none ' to='faq'>FAQ</Link>
            <Link className='me-4 text-decoration-none ' to='/blog'>Blog</Link>
          </Nav>
          <Nav>
            <Nav.Link href="#deets">
              {
                user?.uid ?
               <>
                 <span className='me-2'>{user?.displayName}</span>
                 {
                user?.photoURL ?
                <Image 
                className='me-4'
                style ={{height: '40px'}}
                roundedCircle 
                src={user?.photoURL}></Image>
                :
                <FaUser className='me-4'></FaUser>
              }
              <Button onClick={handleLogOut} variant='danger'>Log Out</Button>
               </>
                :
                <>
                
                  <Link className='me-2' to='/login'><Button>Login</Button></Link>
                  <Link to='/signup'><Button>Sign Up</Button></Link>
                </>
              }
              
              </Nav.Link>
            <Nav.Link>
              
            </Nav.Link>
          </Nav>
          <div className=' d-lg-none'>
            <LeftNav></LeftNav>
          </div>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;