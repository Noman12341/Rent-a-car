import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import IntroCard from '../Components/IntoCard';
import Img1 from '../Images/img-1.jpg';
import Img2 from '../Images/img-2.jpg';
import Img3 from '../Images/img-3.jpg';

function Into() {
    return <Container id="intro">
        <h2>YOU MAKE MONEY WHENEVER YOU WANT</h2>
        <div className="mt-3 mb-5"><span className="b-divider"></span></div>
        <Row>
            <Col lg={4}>
                <IntroCard img={Img1} title="SET YOUR OWN SCHEDULE"
                    text="You are your own boss. You can drive anytime you want, day or night, 365 days a year. You only drive when you want to."
                />
            </Col>
            <Col lg={4}>
                <IntroCard img={Img2} title="SET YOUR OWN SCHEDULE"
                    text="You are your own boss. You can drive anytime you want, day or night, 365 days a year. You only drive when you want to."
                />
            </Col>
            <Col lg={4}>
                <IntroCard img={Img3} title="SET YOUR OWN SCHEDULE"
                    text="You are your own boss. You can drive anytime you want, day or night, 365 days a year. You only drive when you want to."
                />
            </Col>
        </Row>
    </Container>
}
export default Into;