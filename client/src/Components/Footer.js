import React from 'react';
import { Container, Row, Col, Image } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import logo from '../Images/logo.jpg';
import { FaArrowAltCircleRight, FaFacebookSquare } from 'react-icons/fa';

function Footer() {
    return <footer id="footer">
        <Container>
            <Row>
                <Col lg={3}>
                    <Image src={logo} height="50" />
                </Col>
                <Col lg={3}>
                    <ul className="footer-links">
                        <li><Link to="/"><FaArrowAltCircleRight /> Angajat</Link></li>
                        <li><Link to="/"><FaArrowAltCircleRight /> Acte necesare</Link></li>
                        <li><Link to="/"><FaArrowAltCircleRight /> Atestat transport persoane</Link></li>
                        <li><Link to="/"><FaArrowAltCircleRight /> Inchiriaza masina</Link></li>
                    </ul>
                </Col>
                <Col lg={3}>
                    <ul className="footer-links">
                        <li><Link to="/"><FaArrowAltCircleRight /> Politica de confidentialitate</Link></li>
                        <li><Link to="/"><FaArrowAltCircleRight /> Contact</Link></li>
                    </ul>
                </Col>
                <Col lg={3} className="text-center">
                    <a href="https://react-icons.github.io/react-icons/search?q=faf" className="fb-link"><FaFacebookSquare size={40} /></a>
                </Col>
            </Row>
            <div className="d-flex mt-4 pb-2" style={{ color: "#fff" }}>
                <div style={{ flex: "1" }}><h6 className="font-weight-light font-size-sm">Copyright 2020 Iacobs Drive | Toate drepturile rezervate</h6></div>
                <div style={{ flex: "1", textAlign: "right" }}><h6 className="font-weight-light font-size-sm">Developed with ❤ by <a href="" className="fb-link">horizonSoft.abcd</a></h6></div>
            </div>
        </Container>
    </footer>
}
export default Footer;