import React from 'react';
import Card from 'react-bootstrap/Card';
import { useLoaderData } from 'react-router-dom';

const Enroll = () => {
    const enrolled = useLoaderData();
    const { name, about,courseBanner } = enrolled;
    return (
       <div>
         <Card className="text-center mb-5">
            <Card.Header>OneSchool</Card.Header>
            <Card.Body>
                <Card.Title>You have access of {name}</Card.Title>
                <Card.Text>
                   {about}
                </Card.Text>
            </Card.Body>
        </Card>
        <Card>
        <Card.Img variant="top" style={{height:'350px'}} src={courseBanner} />
        </Card>
       </div>
    );
};

export default Enroll;