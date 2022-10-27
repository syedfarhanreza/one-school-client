import React from 'react';
import html2canvas from 'html2canvas';
import jsPDF from 'jspdf';
import Card from 'react-bootstrap/Card';
import { Link, useLoaderData } from 'react-router-dom';
import { BsPeople } from 'react-icons/bs';
import { FaMoneyCheckAlt } from 'react-icons/fa';
import Image from 'react-bootstrap/Image';
import { Button, Col, Container, Row } from 'react-bootstrap';
import LeftNav from '../Shared/LeftNav/LeftNav';

const CourseDetails = () => {
    const courseInfo = useLoaderData();
    const { id, name, courseDetails, about, cost, courseBanner, enrolled, instructor } = courseInfo;
    console.log(courseInfo.name);
    const generatePDF = () => {

        const input = document.getElementById('pdfContainer');

        html2canvas(input)
            .then((canvas) => {
                const imgData = canvas.toDataURL('image/png');
                const bleedWidth = 100;

                const width = parseInt(canvas.style.width) + bleedWidth * 2;
                const height = parseInt(canvas.style.height) + bleedWidth;

                const pdf = new jsPDF({
                    orientation: 'landscape',
                    unit: 'px',
                    format: [width, height]
                });

                const pageSize = pdf.internal.pageSize;
                const pageWidth = pageSize.width ? pageSize.width : pageSize.getWidth();

                const imgProps = pdf.getImageProperties(imgData);

                const pdfWidth = pageWidth - bleedWidth * 2;
                const pdfHeight = (imgProps.height * pdfWidth) / imgProps.width;
                pdf.addImage(imgData, "PNG", bleedWidth, 50, pdfWidth, pdfHeight);
                pdf.save("download.pdf");
            });
    };
    return (
        <Container>
            <div>
                <Button onClick={generatePDF} variant='danger'>Download PDF</Button>
            </div>
            <Row>
                <Col lg="4" className='d-none d-lg-block'>
                    <LeftNav></LeftNav>
                </Col>
                <Col lg="8">
                    <Card className='mb-5 m-auto' id='pdfContainer' >
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
                            <h2 className='text-primary'>{name}</h2>
                            <Card.Img variant="top" className='mb-5' style={{ height: '400px' }} src={courseBanner} />
                            <>
                                <h6>Course Details:</h6>{courseDetails}
                            </>
                            <>
                                <h6>About this program:</h6>{about}
                            </>
                            <div>
                            <Link to={`/courses/${id}/enroll`}><Button variant='primary'>Get Premium Access</Button></Link>
                            </div>
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
                </Col>
            </Row>
        </Container>

    );
};

export default CourseDetails;