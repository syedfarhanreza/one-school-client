import React, { useState } from 'react';
import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import Card from 'react-bootstrap/Card';

const LeftNav = () => {
    const [courses, setCourses] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/courses')
        .then(res => res.json())
        .then(data => setCourses(data))
    },[])
    return (
        <div>
            <h2>Total Courses: {courses.length}</h2>
            <div>
            {
                    courses.map(course => <Card style={{ width: '18rem' }} className="mb-2" key={course.id}>
                    <Card.Img className='d-none d-lg-block' variant="top" src={course.courseBanner} />
                    <Card.Body>
                      <Card.Title >
                        <Link className='text-decoration-none'  to={`/course/${course.id}`}>{course.name}</Link>
                      </Card.Title>
                    </Card.Body>
                  </Card>)
                }
            </div>
        </div>
    );
};

export default LeftNav;