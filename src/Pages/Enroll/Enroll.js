import React from 'react';
import { useLoaderData } from 'react-router-dom';

const Enroll = () => {
    const  enrolled = useLoaderData();
    const {name} = enrolled;
    return (
        <div>
            <h1>{name}</h1>
        </div>
    );
};

export default Enroll;