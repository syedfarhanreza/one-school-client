import React from 'react';
import { useLoaderData } from 'react-router-dom';
import CourseSummary from '../../Shared/CourseSummary/CourseSummary';

const Home = () => {
    const allCourses = useLoaderData();
    return (
        <div>
            <h2>OneSchool's Courses: {allCourses.length}</h2>
            {
                allCourses.map(course => <CourseSummary
                    key={course.id}
                    course={course}
                ></CourseSummary>)
            }
        </div>
    );
};

export default Home;