import React from 'react';
import Card from 'react-bootstrap/Card';
const FAQ = () => {
    return (
        <div>
            <Card className='mb-4'>
                <Card.Header as="h5">OneSchool</Card.Header>
                <Card.Body>
                    <Card.Title>Q. Can I take more than one course at a time?</Card.Title>
                    <Card.Text>
                        If you are new to online learning, we recommend that you begin with one course. As our courses are offered frequently throughout the year, you can always come back and continue your studies with one or more topics.
                    </Card.Text>
                </Card.Body>
            </Card>
            <Card className='mb-4'>
                <Card.Header as="h5">OneSchool</Card.Header>
                <Card.Body>
                    <Card.Title>Q. What should I do if I need to start the course late?</Card.Title>
                    <Card.Text>
                        It is recommended that you begin your course promptly. If you do need to start the course a few days late, contact your instructor as soon as possible after the course has opened to discuss your options. Registration closes on the Friday after the course begins.
                    </Card.Text>
                </Card.Body>
            </Card>
            <Card className='mb-4'>
                <Card.Header as="h5">OneSchool</Card.Header>
                <Card.Body>
                    <Card.Title>Q. When should I register?</Card.Title>
                    <Card.Text>
                        Most courses are offered at least 3 times during the year. Certain courses can fill up quickly, so be sure to register early.
                    </Card.Text>
                </Card.Body>
            </Card>
            <Card className='mb-4'>
                <Card.Header as="h5">OneSchool</Card.Header>
                <Card.Body>
                    <Card.Title>Q. Is there an orientation for online students?</Card.Title>
                    <Card.Text>
                        Two weeks before your course starts you will be invited to join the SIA Online Community where our guides will introduce you to the technology and dynamics of online teaching and learning. It also gives you a chance to introduce yourself and network with fellow students.
                        Should you have any questions or need help troubleshooting a piece of technology, our Online Team is only an email away and is ready to assist.
                    </Card.Text>
                </Card.Body>
            </Card>
        </div>
    );
};

export default FAQ;