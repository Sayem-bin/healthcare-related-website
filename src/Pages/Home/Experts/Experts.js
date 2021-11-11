import React, { useEffect, useState } from 'react';
import { Card, Col, Row } from 'react-bootstrap';
import Expert from '../Expert/Expert';

const Experts = () => {
    const [experts, setExperts] = useState([]);

    useEffect(() => {
        fetch('fakeData.json')
            .then(res => res.json())
            .then(data => setExperts(data))
    }, [])
    return (
        <div>
            <h1 className="text-secondary m-5">OUR DENTISTS </h1>

            <Row xs={1} md={2} lg={4} className="g-4">
                {
                    experts.map(expert => <Expert
                        key={expert.name}
                        expert={expert}
                    ></Expert>)
                }
            </Row>

        </div>
    );
};

export default Experts;