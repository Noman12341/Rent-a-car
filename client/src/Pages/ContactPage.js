import React from 'react';
import { Container, Row, Col } from 'react-bootstrap'
import ContactCard from '../Components/ContactCard';
import { FaPhoneAlt, FaFacebookMessenger, FaWhatsapp } from 'react-icons/fa';

function ContactPage() {
    return <main>
        <div className="py-5">
            <h1 className="text-center">Contact</h1>
        </div>
        <div className="py-5">
            <Container>
                <p className="mb-5 text-center">You can contact us by phone from Monday to Friday between 09:00 - 20:00 or fill in the form and we will contact you</p>
                <Row>
                    <Col lg={7}>
                        {/* First div with phone icon */}
                        <div className="d-flex mt-5">
                            <div className="big-icon mr-3" style={{ backgroundColor: "#36bbca" }}>
                                <FaPhoneAlt size={30} />
                            </div>
                            <div style={{ flex: "1", marginTop: "10px" }}>
                                <h2>0786 428 989</h2>
                                <small>Click pe numar pentru a suna direct</small>
                            </div>
                        </div>
                        {/* Second div with messagner icon */}
                        <div className="d-flex my-4">
                            <div className="big-icon mr-3" style={{ backgroundColor: '#0078ff' }}>
                                <FaFacebookMessenger size={30} />
                            </div>
                            <div style={{ flex: "1", marginTop: "10px" }}>
                                <h2>MESSENGER</h2>
                                <small>Click pe text pentru a intra in chat</small>
                            </div>
                        </div>
                        {/* Third icon with whats app icon */}
                        <div className="d-flex">
                            <div className="big-icon mr-3" style={{ backgroundColor: "#25d365" }}>
                                <FaWhatsapp size={30} />
                            </div>
                            <div style={{ flex: "1", marginTop: "10px" }}>
                                <h2>WHATSAPP</h2>
                                <small>Click pe text pentru a intra in chat​</small>
                            </div>
                        </div>
                    </Col>
                    <Col lg={5}>
                        <ContactCard />
                    </Col>
                </Row>
            </Container>
        </div>

    </main>
}
export default ContactPage;