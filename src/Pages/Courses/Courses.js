import React from 'react';
import { Col, Row } from 'react-bootstrap';
import { useLoaderData } from 'react-router-dom';
import CourseSummary from '../Shared/CourseSummary/CourseSummary';
import LeftNav from '../Shared/LeftNav/LeftNav';

const Courses = () => {
    const allCourses = useLoaderData();
    return (
        <div>
            <Row>
            <Col xs={6} md={4} className='d-none d-lg-block'>
                <div>
                    <LeftNav></LeftNav>
                </div>
            </Col>
            <Col xs={12} md={8}>
                <div>
                    <h2 className='text-center'>OneSchool's Courses: {allCourses.length}</h2>
                    {
                        allCourses.map(course => <CourseSummary
                            key={course.id}
                            course={course}
                        ></CourseSummary>)
                    }
                </div>
            </Col>
            </Row>
        </div>
    );
};

export default Courses;