import React from 'react';
import { Col, Row, Container, Image } from 'react-bootstrap';
import ContactCard from '../Components/ContactCard';
import uber from '../Images/uber-logo.png';
import yango from '../Images/yango-logo.png';
import bolt from '../Images/Bolt.png';
import freeNow from '../Images/Free-Now2.png';

function Banner() {
    return <section id="banner">
        <Container>
            <Row>
                <Col lg={7}>
                    <div className="banner-text">
                        <h4>Authorized Company</h4>
                        <h5>Passanger Transport Operator for <strong>ARR authorized</strong> rental ,<br />We Offer colaboration for<br /><strong>Uber, Yango, Bolt and Free-Now</strong><br />in Bucharest, Timisoara and Cluj</h5>
                        <div>
                            <Image src={uber} height="135" />
                            <Image src={yango} height="135" />
                            <Image src={bolt} height="135" />
                            <Image src={freeNow} height="135" />
                        </div>
                    </div>
                </Col>
                <Col lg={5}>
                    <ContactCard />
                </Col>
            </Row>
        </Container>
    </section>
}
export default Banner;