import React from 'react';
import { Row, Col, Button } from 'react-bootstrap';
import { FaCheck, FaWhatsapp } from 'react-icons/fa';

function RentCard() {
    return <Row className="my-5">
        <Col lg={6}>
            <div style={{ height: "400px", width: "100%", backgroundColor: "yellow" }}>

            </div>
        </Col>
        <Col lg={6} className="pt-5">
            <h5>Dacia Logan 2012, 1.5 Diesel</h5>
            <ul>
                <li>We rent Dacia Logan 2012, 1.5L Diesel engine, Air conditioning, ABS; ESP, very well maintained.</li>
                <li>We rent Dacia Logan 2012, 1.5L Diesel engine, Air conditioning, ABS; ESP, very well maintained.</li>
                <li>We rent Dacia Logan 2012, 1.5L Diesel engine, Air conditioning, ABS; ESP, very well maintained.</li>
            </ul>
            {/* below div contains button and price */}
            <div className="d-flex mt-5">
                <div style={{ flex: "1", textAlign: "left" }}>
                    <Button><FaWhatsapp className="mr-2" size={25} />Book now</Button>
                </div>
                <div>
                    <h5><FaCheck className="mr-2" size={25} />from 350 lei / week</h5>
                </div>
            </div>
        </Col>
    </Row>
}
export default RentCard;