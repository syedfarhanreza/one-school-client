import React, { useState } from 'react';
import { useContext } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../../contexts/AuthProvider/AuthProvider';
import RightNav from '../../Shared/RightNav/RightNav';

const SignUp = () => {
    const [error, setError] = useState('');
    const { createUser, updateUserProfile } = useContext(AuthContext);
    const navigate = useNavigate();

    const handleSubmit = event => {
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const photoURL = form.photoURL.value;
        const email = form.email.value;
        const password = form.password.value;
        console.log(name, photoURL, email, password);

        createUser(email, password)
            .then(result => {
                const user = result.user;
                console.log(user);
                form.reset();
                setError('');
                navigate('/');
                handleUpdateUserProfile(name, photoURL);
            })
            .catch(error => {
                console.error(error)
                setError(error.message);
            }); 
    }
    const handleUpdateUserProfile = (name, photoURL) => {
        const profile = {
            displayName: name,
            photoURL: photoURL
        }
        updateUserProfile(profile)
            .then(() => { })
            .catch(error => console.error(error));
    }
    return (
        <Container>
            <Row>
                <Col lg="8">
                    <Form onSubmit={handleSubmit}>
                        <Form.Group className="mb-3" controlId="formBasicName">
                            <Form.Label>Your Full Name</Form.Label>
                            <Form.Control name="name" type="text" placeholder="Your Full Name" />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formBasicPhotoURL">
                            <Form.Label>Photo URL</Form.Label>
                            <Form.Control name="photoURL" type="text" placeholder="Photo URL" />
                        </Form.Group>
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
                            Sign Up
                        </Button>
                        <div>
                            <p>Have an account? <Link to='/login'><span>Log In</span></Link></p>
                        </div>
                    </Form>
                </Col>
                <Col lg="4">
                    <RightNav></RightNav>
                </Col>
            </Row>
        </Container>
    );
};

export default SignUp;