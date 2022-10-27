import React, { useContext } from 'react';
import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import { FcGoogle } from "react-icons/fc"
import { AuthContext } from '../../../contexts/AuthProvider/AuthProvider';
import { GoogleAuthProvider } from 'firebase/auth';

const RightNav = () => {

    const {providerLogin} =useContext(AuthContext);

    const googleProvider = new GoogleAuthProvider()

        const handleGoogleSignIn = () =>{
            providerLogin(googleProvider)
            .then(result => {
                const user = result.user;
                console.log(user);
            })
            .catch(error => console.error(error))
    }
    return (
        <div>
            <ButtonGroup vertical>
                <Button onClick={handleGoogleSignIn} className='mb-2' variant="outline-primary"><FcGoogle></FcGoogle> Login with Google</Button>
            </ButtonGroup>
            <div className='mt-4'>
                
            </div>
        </div>
    );
};

export default RightNav;