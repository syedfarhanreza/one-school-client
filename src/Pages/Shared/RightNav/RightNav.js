import React from 'react';
import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import { FcGoogle } from "react-icons/fc"
import { FaGithub} from "react-icons/fa"

const RightNav = () => {
    return (
        <div>
            <ButtonGroup vertical>
                <Button  className='mb-2' variant="outline-primary"><FcGoogle></FcGoogle> Login with Google</Button>
                <Button variant="outline-dark"><FaGithub></FaGithub> Login with Github</Button>
            </ButtonGroup>
            <div className='mt-4'>
                
            </div>
        </div>
    );
};

export default RightNav;