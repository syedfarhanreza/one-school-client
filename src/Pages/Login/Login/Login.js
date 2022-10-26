import React, { useContext } from 'react';
import { useState } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../../contexts/AuthProvider/AuthProvider';
import RightNav from '../../Shared/RightNav/RightNav';



const Login = () => {
    const [error, setError] = useState('')
    const {logIn} = useContext(AuthContext);
    const navigate = useNavigate();
    const location = useLocation();

    const from = location.state?.from?.pathname || '/';

    const handleSubmit = event => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;

        logIn(email, password)
        .then(result =>{
            const user = result.user;
            console.log(user);
            form.reset();
            setError('')
            navigate(from, {replace: true});
        })
        .catch(error => {console.error(error)
            setError(error.message)
        })
    }

    return (
        <Container>
      <Row>
        <Col lg="8">
        <Form onSubmit={handleSubmit}>
            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control name="email" type="email" placeholder="Enter email" required />
              
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control name="password" type="password" placeholder="Password" required />
            </Form.Group>
            <Form.Text className="text-danger">
                    {error}
            </Form.Text> <br />
            <Button variant="primary" type="submit">
                Login
            </Button>
            
        </Form>
        </Col>
        <Col lg="4">
            <RightNav></RightNav>
        </Col>
      </Row>
      </Container>
        
    );
};

export default Login;