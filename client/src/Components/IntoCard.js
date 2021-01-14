import React from 'react';
import { Card } from 'react-bootstrap';
function IntroCard({ img, title, text }) {
    return <Card style={{ border: "none" }}>
        <Card.Img variant="top" src={img} height="200" />
        <Card.Body>
            <Card.Title style={{ fontSize: "15px", fontWeight: "bold" }}>{title}</Card.Title>
            <Card.Text>{text}</Card.Text>
        </Card.Body>
    </Card>
}
export default IntroCard;