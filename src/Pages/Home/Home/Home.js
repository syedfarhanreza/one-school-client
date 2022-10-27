import React, { useState } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import Card from 'react-bootstrap/Card';
import image1 from '../../../assets/images/image1.jpg';
import image2 from '../../../assets/images/image2.jpg';
import image3 from '../../../assets/images/image3.png';

const Home = () => {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };

  return (
    <div>
      <Carousel activeIndex={index} onSelect={handleSelect}>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={image1}
            alt="First slide"
          />
          <Carousel.Caption>
            <h3>You can learn anything</h3>
            <p>OneSchool provides an easy path for students to jump in and begin learning about any subject that they choose.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={image2}
            alt="Second slide"
          />

          <Carousel.Caption>
            <h3>Take the world's best courses, online</h3>
            <p >OneSchool provides plenty of information about each class. </p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={image3}
            alt="Third slide"
          />

          <Carousel.Caption>
            <h3>OneSchool, For everyone, Forever</h3>
            <p>
              OneSchool works because it makes coding accessible to any interested student, provides practical recommendations for students who want to learn how to code but don't understand how these new skill might apply to their current job.
            </p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
      <Card className='mt-4 bg-secondary text-white'>
        <Card.Header>About Us</Card.Header>
        <Card.Body>
          <blockquote className="blockquote mb-0">
            <p>
              {' '}
              OneSchool is a learning site that offers courses from well-known universities. All OneSchool courses contain pre-recorded video lectures that you can watch when it is convenient for you.

              OneSchool has programs together with universities that allow you to get a master degree or specializations. You can explore various college courses without any hassle.

              This site is offering free programs from accredited institutions. The courses available on such platforms are designed by a leading university.

              {' '}
            </p>
            <footer className="blockquote-footer">
              Learn from <cite title="Source Title">OneSchool</cite>
            </footer>
          </blockquote>
        </Card.Body>
      </Card>
    </div>
  );
};

export default Home;