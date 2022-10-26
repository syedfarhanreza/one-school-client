import React, { useState } from 'react';
import { useEffect } from 'react';
import { Link } from 'react-router-dom';

const Courses = () => {
    const [courses, setCourses] = useState([]);

    useEffect(() =>{
        fetch('http://localhost:5000/courses')
        .then(res => res.json())
        .then(data => setCourses(data))
    },[])
    return (
        <div>
            <h1>All Course: {courses.length}</h1>
            <div>
                {
                    courses.map(course => <p key={course.id}>
                        <Link to={`/courses/${course.id}`}>{course.name}</Link>
                    </p>)
                }
            </div>
        </div>
    );
};

export default Courses;