import React from 'react';
import { Container } from 'react-bootstrap';
import RentCard from '../Components/RentCarsCard';

function RentCars() {
    return <section>
        <div className="text-center py-5">
            <Container>
                <h1 style={{ fontSize: "24px" }}>ÎNCHIRIAZĂ O MAȘINĂ PENTRU RIDESHARING</h1>
                <p>IacobsDrive vă pune la dispoziție un nou sistem de închiriere auto pentru Uber, Yango, Bolt sau Free-Now, care va permite să folositi un autoturism pe termen scurt sau lung, stabilind încă de la început un interval orar preferat, obținând astfel o chirie mai mica.</p>
            </Container>
        </div>
        <Container>
            <RentCard />
            <RentCard />
            <RentCard />
            <RentCard />

        </Container>
    </section>
}
export default RentCars;