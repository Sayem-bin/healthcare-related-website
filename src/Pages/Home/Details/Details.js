
import React from 'react';
import { Col, Form, Row } from 'react-bootstrap';
import { useParams } from 'react-router';

const Details = () => {

    const { name } = useParams();
    return (
        <>
            <h3 className="mt-5">{name}</h3>

            <Form className="p-4 w-70 col-md-12 col-sm-12 col-lg-8 ">
                <Form.Group className="mb-3 " controlId="formGridAddress1">
                    <Form.Label className="fs-2"> Patient Name </Form.Label>
                    <Form.Control placeholder="Full Name" />
                </Form.Group>
                <Row className="mb-3">
                    <Form.Group as={Col} controlId="formGridEmail">
                        <Form.Label>Email</Form.Label>
                        <Form.Control type="email" placeholder="Enter email" />
                    </Form.Group>
                </Row>

                <Form.Group className="mb-3" controlId="formGridAddress1">
                    <Form.Label>Address</Form.Label>
                    <Form.Control placeholder="Your address" />
                </Form.Group>

                <Row className="mb-3">
                    <Form.Group as={Col} controlId="formGridCity">
                        <Form.Label>City</Form.Label>
                        <Form.Control />
                    </Form.Group>

                    <Form.Group as={Col} controlId="formGridState">
                        <Form.Label>State</Form.Label>
                        <Form.Select defaultValue="Choose...">
                            <option>Choose...</option>
                            <option>...</option>
                        </Form.Select>
                    </Form.Group>

                    <Form.Group as={Col} controlId="formGridZip">
                        <Form.Label>Zip</Form.Label>
                        <Form.Control />
                    </Form.Group>
                </Row>

                <Form.Group className="mb-3" id="formGridCheckbox">
                    <Form.Check type="checkbox" label="Check me out" />
                </Form.Group>
                <button className="btn btn-primary" type="submit">Submit</button>

            </Form>
        </>
    );
};

export default Details;