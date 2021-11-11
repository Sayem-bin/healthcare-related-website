import React from 'react';
import { Card, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Service = (props) => {
    const { name, descriptions, img } = props.service;
    return (
        <div>
            <Col>
                <Card>
                    <Card.Img variant="top" src={img} />
                    <Card.Body>
                        <Card.Title>{name}</Card.Title>
                        <Card.Text>
                            {descriptions}
                        </Card.Text>
                        <Link to={`/details/${name}
                         ${descriptions}`}><button className="btn btn-warning">Book An Appointment</button>
                        </Link>

                    </Card.Body>
                </Card>
            </Col>
        </div>
    );
};

export default Service;