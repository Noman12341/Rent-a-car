import React from 'react'
import { Container, Row, Col, Image } from 'react-bootstrap';
import OneImg from '../Images/one.png';
import Insepection from '../Images/insepection.jpg';
import Driver from '../Images/driver.jpg';
import SecondImg from '../Images/2.png';
import { FaArrowRight, FaCheckCircle } from 'react-icons/fa';

function CertificatePage() {
    return <section>
        <Container style={{ padding: "50px 0", textAlign: "center" }}>
            <h1 style={{ fontSize: "25px" }}>GUIDE FOR OBTAINING<br />CERTIFICATE TRANSPORT PERSONS</h1>
            <p className="py-3">Uber rewards you with a bonus of 415 Lei for obtaining the certificate</p>
            <p className="text-left">Get the professional driver's certificate to drive with Uber, Clever, Bolt or Yango without interruption. When the document is added on the Uber platform, you will qualify for a <strong>bonus of 415 Lei</strong> for the expenses of obtaining the certificate. The bonus is paid automatically within two weeks and there is no need to write to us. The process for obtaining this document involves completing <strong>2 simple steps</strong> and takes an average of 4 weeks. See below the steps to follow. From November 1, 2019, obtaining the certificate becomes mandatory, so we recommend you to start the process as soon as possible to qualify for the bonus.</p>
        </Container>
        <Container>
            <Row>
                <Col lg={6}>
                    <ImgHeading img={OneImg} title="MEDICAL AND PSYCHOLOGICAL ADVICE"
                        text="Get the two sheets from the partner clinics" />
                    <p>Through partnerships with the two medical clinics below, you get the best rates for Uber partners.</p>
                    <h5 className="mb-3">Sunday Medical Center</h5>
                    <ArrowPTag text="Price - The cost of the medical and psychological approval is 120 Lei" />
                    <ArrowPTag text="Address - Str. Rhythm, Nr. 35, Et. 1, Sector 2, Bucharest" />
                    <ArrowPTag text="Phone - 021 344 0414/0731 209 900" />
                    <h5 className="mt-3">Sunday Medical Center</h5>
                    <ArrowPTag text="Price - The cost of the medical and psychological approval is 120 Lei" />
                    <ArrowPTag text="Address - B-dul Timisoara, Nr. 60D, Sector 6, Bucharest" />
                    <ArrowPTag text="Phone - 031 425 7379/0724 405 075" />

                </Col>
                <Col lg={6}>
                    <Image src={Insepection} />
                </Col>
            </Row>
        </Container>
        <div style={{ backgroundColor: "#F3F3F3", padding: "100px 0" }}>
            <Container>
                <Row>
                    <Col lg={6}>
                        <Image src={Driver} />
                    </Col>
                    <Col lg={6}>
                        <ImgHeading img={SecondImg} title="TRANSPORT TRAINING SCHOOL"
                            text="Enroll in a vocational training school" />
                        <p>Choose the FATII or Bidi Trans school, and you can not pay in advance the value of the course of 175 Lei. The rest of the bonus, of 240 Lei, will be granted after obtaining the professional certificate for drivers.</p>
                        <p>Places are limited and we recommend that you register for the exam immediately after completing the course.</p>
                        <h5 className="mb-3">FATII school</h5>
                        <ArrowPTag text="Price - The cost of the course for Uber partners is 175 Lei" />
                        <ArrowPTag text="Address - Bd. Iuliu Maniu, Nr. 246, Corp C 37, Floor 5, Sector 6, Bucharest" />
                        <ArrowPTag text="Phone - 031 402 5620" />
                        <h5 className="mt-3">Bidi Trans School</h5>
                        <ArrowPTag text="Price - The cost of the course for Uber partners is 175 Lei" />
                        <ArrowPTag text="Address - Soseaua Alexandriei, Nr. 176B, Sector 5, Bucharest" />
                        <ArrowPTag text="Phone - 0722 366 029" />
                    </Col>
                </Row>
            </Container>
        </div>
        <Container className="py-5">
            <h1 style={{ fontSize: "25px", textAlign: "center" }}>DOCUMENTS REQUIRED TO OBTAIN<br />THE PASSENGER TRANSPORT CERTIFICATE</h1>
            <p className="py-3">Choose any medical clinic or vocational school, and after obtaining the certificate and adding it to the driver's account, you will receive the bonus of 415 Lei. In order to qualify for the bonus, the professional certificate must be issued after March 1, 2018. It is necessary to obtain the documents below in order to be able to enroll in the certified school to take courses and to take the exam later:</p>
            <p><FaCheckCircle size={20} className="mr-3" />Copy of driving license - obtained for at least 2 years</p>
            <p><FaCheckCircle size={20} className="mr-3" />Copy of identity document - minimum age 21 years</p>
            <p><FaCheckCircle size={20} className="mr-3" />Medical and psychological advice - certificate of passenger transport</p>
            <p><FaCheckCircle size={20} className="mr-3" />Criminal record certificate - issued in the last 6 months</p>
            <p><FaCheckCircle size={20} className="mr-3" />Criminal record - issued in the last 30 days</p>

        </Container>
    </section>
}
export default CertificatePage;

function ImgHeading({ img, title, text }) {
    return <div className="d-flex"><div className="mr-3"><Image src={img} height="50" /></div>
        <div>
            <h3 style={{ fontSize: "25px" }}>{title}</h3>
            <p>{text}</p>
        </div>
    </div>
}
function ArrowPTag({ text }) {
    return <p className="mb-1"><FaArrowRight /> {text}</p>
}