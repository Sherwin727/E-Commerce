import React, { useState } from 'react';
import { Container, Form, Button, Row, Col, Card } from 'react-bootstrap';

function ShippingDetails() {
  const [shippingDetails, setShippingDetails] = useState({
    firstName: '',
    lastName: '',
    phoneNumber: '',
    region: '',
    province: '',
    city: '',
    barangay: '',
    postalCode: '',
    street: '',
  });

  const [paymentDetails, setPaymentDetails] = useState({
    method: '',
    cardNumber: '',
    expiryDate: '',
    cvv: '',
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setShippingDetails({ ...shippingDetails, [name]: value });
  };

  const handlePaymentChange = (e) => {
    const { name, value } = e.target;
    setPaymentDetails({ ...paymentDetails, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Order submitted successfully!');
    console.log('Shipping Details:', shippingDetails);
    console.log('Payment Details:', paymentDetails);
    window.location.href = route('customer.dashboard');
  };

  return (
    <Container className="mt-4">
      <h2>Shipping Details</h2>

      {/* Contact Details */}
      <Card className="mt-3">
        <Card.Header>
          <h4>Contact</h4>
        </Card.Header>
        <Card.Body>
          <Form>
            <Row>
              <Col md={6}>
                <Form.Group controlId="firstName">
                  <Form.Control
                    type="text"
                    name="firstName"
                    value={shippingDetails.firstName}
                    onChange={handleInputChange}
                    placeholder="First name"
                    className="custom-input"
                  />
                </Form.Group>
              </Col>
              <Col md={6}>
                <Form.Group controlId="lastName">
                  <Form.Control
                    type="text"
                    name="lastName"
                    value={shippingDetails.lastName}
                    onChange={handleInputChange}
                    placeholder="Last name"
                    className="custom-input"
                  />
                </Form.Group>
              </Col>
            </Row>
            <Form.Group controlId="phoneNumber" className="mt-3">
              <Form.Control
                type="tel"
                name="phoneNumber"
                value={shippingDetails.phoneNumber}
                onChange={handleInputChange}
                placeholder="Phone number"
                className="custom-input"
              />
            </Form.Group>
          </Form>
        </Card.Body>
      </Card>

      {/* Address Details */}
      <Card className="mt-3">
        <Card.Header>
          <h4>Address</h4>
        </Card.Header>
        <Card.Body>
          <Form>
            <Row>
              <Col md={6}>
                <Form.Group controlId="region">
                  <Form.Control
                    type="text"
                    name="region"
                    value={shippingDetails.region}
                    onChange={handleInputChange}
                    placeholder="Region"
                    className="custom-input"
                  />
                </Form.Group>
              </Col>
              <Col md={6}>
                <Form.Group controlId="province">
                  <Form.Control
                    type="text"
                    name="province"
                    value={shippingDetails.province}
                    onChange={handleInputChange}
                    placeholder="Province"
                    className="custom-input"
                  />
                </Form.Group>
              </Col>
            </Row>
            <Row className="mt-3">
              <Col md={6}>
                <Form.Group controlId="city">
                  <Form.Control
                    type="text"
                    name="city"
                    value={shippingDetails.city}
                    onChange={handleInputChange}
                    placeholder="City"
                    className="custom-input"
                  />
                </Form.Group>
              </Col>
              <Col md={6}>
                <Form.Group controlId="barangay">
                  <Form.Control
                    type="text"
                    name="barangay"
                    value={shippingDetails.barangay}
                    onChange={handleInputChange}
                    placeholder="Barangay"
                    className="custom-input"
                  />
                </Form.Group>
              </Col>
            </Row>
            <Row className="mt-3">
              <Col md={6}>
                <Form.Group controlId="postalCode">
                  <Form.Control
                    type="text"
                    name="postalCode"
                    value={shippingDetails.postalCode}
                    onChange={handleInputChange}
                    placeholder="Postal code"
                    className="custom-input"
                  />
                </Form.Group>
              </Col>
              <Col md={6}>
                <Form.Group controlId="street">
                  <Form.Control
                    type="text"
                    name="street"
                    value={shippingDetails.street}
                    onChange={handleInputChange}
                    placeholder="Street name, Building, House No."
                    className="custom-input"
                  />
                </Form.Group>
              </Col>
            </Row>
          </Form>
        </Card.Body>
      </Card>

      {/* Payment Details */}
      <Card className="mt-3">
        <Card.Header>
          <h4>Payment</h4>
        </Card.Header>
        <Card.Body>
          <Form.Group controlId="method">
            <Form.Label>Payment Method</Form.Label>
            <Form.Control
              as="select"
              name="method"
              value={paymentDetails.method}
              onChange={handlePaymentChange}
              className="custom-select"
            >
              <option value="">Select payment method</option>
              <option value="Credit Card">Credit Card</option>
              <option value="PayPal">PayPal</option>
              <option value="Cash on Delivery">Cash on Delivery (COD)</option>
            </Form.Control>
          </Form.Group>
          {paymentDetails.method === 'Credit Card' && (
            <Row className="mt-3">
              <Col md={6}>
                <Form.Group controlId="cardNumber">
                  <Form.Label>Card Number</Form.Label>
                  <Form.Control
                    type="text"
                    name="cardNumber"
                    value={paymentDetails.cardNumber}
                    onChange={handlePaymentChange}
                    placeholder="Enter card number"
                    className="custom-input"
                  />
                </Form.Group>
              </Col>
              <Col md={3}>
                <Form.Group controlId="expiryDate">
                  <Form.Label>Expiry Date</Form.Label>
                  <Form.Control
                    type="text"
                    name="expiryDate"
                    value={paymentDetails.expiryDate}
                    onChange={handlePaymentChange}
                    placeholder="MM/YY"
                    className="custom-input"
                  />
                </Form.Group>
              </Col>
              <Col md={3}>
                <Form.Group controlId="cvv">
                  <Form.Label>CVV</Form.Label>
                  <Form.Control
                    type="text"
                    name="cvv"
                    value={paymentDetails.cvv}
                    onChange={handlePaymentChange}
                    placeholder="CVV"
                    className="custom-input"
                  />
                </Form.Group>
              </Col>
            </Row>
          )}
        </Card.Body>
      </Card>

      <Button
      className="mt-4"
      onClick={handleSubmit}>
      >
      Submit Order
      </Button>

    </Container>
  );
}

export default ShippingDetails;
