import React from 'react';
import { Form, Button, Card } from 'react-bootstrap';
import PhoneInput from 'react-phone-input-2'
import 'react-phone-input-2/lib/style.css'

function ContactCard() {
    return <Card style={{ width: "90%", borderRadius: "0", border: "none" }}>
        <Card.Body>
            <Form className="text-left">
                <Form.Group controlId="formBasicName">
                    <Form.Label>Name</Form.Label>
                    <Form.Control type="email" placeholder="Enter Name" />
                </Form.Group>
                <Form.Group controlId="formBasicName">
                    <Form.Label>Your Phone No</Form.Label>
                    <PhoneInput
                        inputProps={{
                            name: 'phone',
                            required: true,
                            autoFocus: true
                        }}
                    />
                </Form.Group>
                <Form.Group controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" placeholder="Enter email" />
                    <Form.Text className="text-muted">We'll never share your email with anyone else</Form.Text>
                </Form.Group>
                <Form.Group controlId="formBasicEmail">
                    <Form.Label>The Area Where you want to work</Form.Label>
                    <Form.Control as="select" placeholder="City">
                        <option>City</option>
                        <option>Lahore</option>
                        <option>Karachi</option>
                    </Form.Control>
                </Form.Group>
                <Button type="submit" bsPrefix="banner-submit-btn">Apply</Button>
            </Form>
        </Card.Body>
    </Card>
}
export default ContactCard;