import React from 'react';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';
import { BsPeople } from 'react-icons/bs';
import { FaMoneyCheckAlt } from 'react-icons/fa';
import Image from 'react-bootstrap/Image';

const CourseSummary = ({course}) => {
    const {id,name,about,cost,courseBanner,enrolled,instructor} = course;
    console.log(course);
    return (
        <Card className='mb-5'>
      <Card.Header>
        <div className='d-flex align-items-center'>
            <Image
            roundedCircle
            className='me-4'
            src={instructor?.image}
            style={{height:'60px',width:'60px'}}
            ></Image>
            <div>
                <h6>Instructor: {instructor?.name}</h6>
            </div>
        </div>
      </Card.Header>
      <Card.Body>
        <Card.Title>{name}</Card.Title>
        <Card.Img variant="top" src={courseBanner} />
        <Card.Text>
          {about?.length > 200?
            <p>{about.slice(0, 250)+ '....'} <Link to={`/course/${id}`}>Read More</Link></p>
            :
            <p>{about}</p>  
        }
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
    );
};

export default CourseSummary;