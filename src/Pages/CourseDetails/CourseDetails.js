import React from 'react';
import Card from 'react-bootstrap/Card';
import { Link, useLoaderData } from 'react-router-dom';
import { BsPeople } from 'react-icons/bs';
import { FaMoneyCheckAlt } from 'react-icons/fa';
import Image from 'react-bootstrap/Image';

const CourseDetails = () => {
    const courseInfo = useLoaderData();
    const { id, name,courseDetails, about, cost, courseBanner, enrolled, instructor } = courseInfo;
    console.log(courseInfo.name);
    return (
        <>
        <button>PDF</button>
        <Card className='mb-5'>
            <Card.Header>
                <div className='d-flex align-items-center'>
                    <Image
                        roundedCircle
                        className='me-4'
                        src={instructor?.image}
                        style={{ height: '60px', width: '60px' }}
                    ></Image>
                    <div>
                        <h6>Instructor: {instructor?.name}</h6>
                    </div>
                </div>
            </Card.Header>
            <Card.Body>
                <Card.Title>{name}</Card.Title>
                <Card.Img variant="top" style={{height:'400px'}} src={courseBanner} />
                <Card.Text>
                <h6>Course Details:</h6>{courseDetails}
                </Card.Text>
                <Card.Text>
                    <h6>About this course:</h6>{about}
                </Card.Text>
            </Card.Body>
            <Card.Footer className="text-muted d-flex justify-content-between align-items-center">
                <div>
                    <FaMoneyCheckAlt className='me-2'></FaMoneyCheckAlt>
                    <span>{cost}</span>
                </div>
                <div>
                    <BsPeople className='me-2'></BsPeople>
                    <span>{enrolled}</span>
                </div>
            </Card.Footer>
        </Card>
        </>
    );
};

export default CourseDetails;