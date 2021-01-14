import React from 'react';
import { Card } from 'react-bootstrap';

function WhyCard({ Icon, title, text }) {
    return <Card className="why-card">
        <Card.Body>
            {Icon}
            <Card.Title className="mb-5">{title}</Card.Title>
            <Card.Text>{text}</Card.Text>
        </Card.Body>

    </Card>
}
export default WhyCard;