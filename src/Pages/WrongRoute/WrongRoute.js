import React from 'react';
import Badge from 'react-bootstrap/Badge';

const WrongRoute = () => {
    return (
        <div className='mb-auto bg-danger text-center p-4'>
        <h1>
          You have entered wrong route!!! <Badge bg="secondary">Please enter correct route</Badge>
      </h1>
        </div>
    );
};

export default WrongRoute;