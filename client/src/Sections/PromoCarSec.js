import React from 'react';
import { Container, Row, Col, Image } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { FaArrowAltCircleRight } from 'react-icons/fa';
import CarPromo from '../Images/car-promo.png';

function PromoCarSec() {
    return <Container id="promo-car">
        <h3>IACOBSDRIVE IS A FLEET AND ACCOUNT MANAGER FOR<br />UBER, YANGO, BOLT, CLEVER AND FREE-NOW</h3>
        <div className="mt-3 mb-5"><span className="b-divider"></span></div>
        <Row style={{ marginTop: "100px" }}>
            <Col lg={6} className="text-left pt-5">
                <h3>CAR RENTAL</h3>
                <p>Rent a car for Alternative Transport. We provide on board the car compliant copy, badges, cash register, travel and luggage insurance, RCA, ITP at 6 months, CASCO and term revisions.</p>
                <Link to="/" className="btn-promo-sec"><FaArrowAltCircleRight /> See All Rental Cars</Link>
            </Col>
            <Col lg={6}>
                <Image src={CarPromo} />
            </Col>
        </Row>
    </Container>
}
export default PromoCarSec;