import React from 'react';
import Accordion from 'react-bootstrap/Accordion';
const FAQ = () => {
    return (
        <div>
            <Accordion defaultActiveKey="0" flush>
      <Accordion.Item eventKey="0">
        <Accordion.Header>Q. Who should take an Online Course?</Accordion.Header>
        <Accordion.Body>
        Students join our online courses for a variety of reasons and come from diverse backgrounds, professions, and age groups. With online courses, you can
        <ul>
            <li>Advance your skill-set or begin a career change.</li>
            <li>Take the next step in your formal education.</li>
            <li>Ease the transition before entering a full-time academic program.</li>
            <li>Enjoy learning a new topic.</li>
            Whatever the reason, our online courses are a flexible way of learning about the art world without disrupting your daily life.
        </ul>
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="2">
        <Accordion.Header>Q. What should I do if I need to start the course late?</Accordion.Header>
        <Accordion.Body>
        It is recommended that you begin your course promptly. If you do need to start the course a few days late, contact your instructor as soon as possible after the course has opened to discuss your options. Registration closes on the Friday after the course begins.
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="1">
        <Accordion.Header>Q. How do I select a course?</Accordion.Header>
        <Accordion.Body>
        Visit the courses to browse our offerings. In addition to searching by course duration and availability, you can also search by subject to ensure you find a course that reflects your interests. Though it is not required, we encourage those who have not studied art before to consider taking an art history course first to get a solid grounding in the discipline before exploring more specific disciplines. Our art history courses are the perfect first step before moving on to art market courses.
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="3">
        <Accordion.Header>Q. Can I take more than one course at a time?</Accordion.Header>
        <Accordion.Body>
        If you are new to online learning, we recommend that you begin with one course. As our courses are offered frequently throughout the year, you can always come back and continue your studies with one or more topics.
        </Accordion.Body>
      </Accordion.Item>
    </Accordion>
        </div>
    );
};

export default FAQ;