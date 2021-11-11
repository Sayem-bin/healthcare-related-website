import React from 'react';
import { Button, Card, Col } from 'react-bootstrap';

const Expert = (props) => {
    const { name, img, specialist } = props.expert;

    return (
        <div>
            <Col className="p-2">
                <Card>
                    <Card.Img variant="top" src={img} />
                    <Card.Body>
                        <Card.Title>{name}</Card.Title>
                        <Card.Text>
                            {specialist}
                        </Card.Text>
                        <Button>Talk With US</Button>
                    </Card.Body>

                </Card>
            </Col>
        </div >
    );
};

export default Expert;