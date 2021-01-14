import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { FaCheck } from 'react-icons/fa';
import WhyCard from '../Components/WhyCard';
import { FaStar, FaExchangeAlt, FaGift, FaCreditCard } from 'react-icons/fa';

function Why() {
    return <section id="why">
        <Container className="mb-5">
            <h2>WHY COLLABORATE WITH US ?</h2>
            <div className="mt-3 mb-5 text-center"><span className="white-divider"></span></div>
            <ul className="why-ul">
                <li><CheckComp /><TextComp text="Societatea noastră oferă exclusiv servicii care sprijină activitatea de transport persoane în regim de închiriere, în colaborare cu Uber, Yango, Bolt și Free-now" /></li>
                <li><CheckComp /><TextComp text="Respectăm legea nr.38/2003, iar în acest sens asigurăm toate procedurile reglementate de lege." /></li>
                <li><CheckComp /><TextComp text="Colaborare pe baza de contract de muncă sau contract de prestări servicii." /></li>
                <li><CheckComp /><TextComp text="Protejăm activitatea noastră prin plata la termen a impozitelor aferente și vă asigurăm de transparență fiscală." /></li>
            </ul>
        </Container>
        <Container>
            <Row>
                <Col lg={6}>
                    <WhyCard Icon={<FaStar size={50} />} title="COMISSION 10%"
                        text="De ce 10% comision? Pentru ca firma noastra respecta Legea 227/2015 privind CODUL FISCAL iar toate taxele catre stat sunt platite."
                    />
                </Col>
                <Col lg={6}>
                    <WhyCard Icon={<FaExchangeAlt size={50} />} title="SCHIMBARE PARTENER"
                        text="Daca colaborati cu alta firma si doriti sa colaraborati cu noi iti putem face trecerea imediat. Schimbarea de partener se face pe loc."
                    />
                </Col>
                <Col lg={6}>
                    <WhyCard Icon={<FaGift size={50} />} title="BONUSURI"
                        text="Pentru fiecare sofer adus primesti bonus 50 lei, dupa primele 20 de curse."
                    />
                </Col>
                <Col lg={6}>
                    <WhyCard Icon={<FaCreditCard size={50} />} title="PLATA SĂPTĂMÂNALĂ"
                        text="Plata se face in fiecare miercuri, numerar sau prin transfer bancar."
                    />
                </Col>
            </Row>
        </Container>
    </section>
}

export default Why;

function CheckComp() {
    return <span style={{ color: "#ee723b" }}><FaCheck size={30} /></span>
}
function TextComp({ text }) {
    return <span className="why-li-text">{text}</span>
}