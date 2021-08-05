import React from 'react';
import { Col } from 'react-bootstrap';
import { Form } from 'react-bootstrap';
import { Row } from 'react-bootstrap';

export const Transaction = () => {
    let contactStyle = {
        color: "Black",
        background: "White",
        display: "Flex",
        justifyContent: "Center",
        textAlign: "Center",
        border: "solid",
        padding: "40px",
        width: "75%",
        paddingTop: "65px",
        paddingBottom: "65px",
    }
    let correctStyle = {
        border: "30px",
        justifyContent: "Center",
    }
    let changePosition = {
        justifyContent: "Center",

    }
    return (
        <div>
            <fieldset className="drawMargin">
                <table style={contactStyle}>
                    <span className="border payment-bgc">
                        <legend className="changeStyle"><b>Proceeed to Pay</b></legend>
                        <form className="changeFont" style={correctStyle} method="post" action="mailto:paintinghub@gmail.com">
                            <Form.Group as={Row} className="mb-3" controlId="formHorizontalEmail">
                                <Form.Label column sm={6}>
                                    Account Number
                                </Form.Label>
                                <Col sm={10}>
                                    <Form.Control type="email" placeholder="Email" required/>
                                </Col>
                            </Form.Group>

                            <Form.Group as={Row} className="mb-3" controlId="formHorizontalPassword">
                                <Form.Label column sm={10}>
                                    Account holder's name
                                </Form.Label>
                                <Col sm={10}>
                                    <Form.Control type="password" placeholder="Must be 8 characters long." required/>
                                </Col>
                            </Form.Group>
                            <Form.Group as={Row} className="mb-3" controlId="formHorizontalPassword">
                                <Form.Label column sm={6}>
                                    CVV
                                </Form.Label>
                                <Col sm={8}>
                                    <Form.Control type="password" placeholder="Enter cvv number(flip your card)" required/>
                                </Col>
                            </Form.Group>
                            <Form.Group as={Row} className="mb-4" controlId="formHorizontalPassword">
                                <Form.Label column sm={6}>
                                    Valid thru
                                </Form.Label>
                                <Col sm={8}>
                                    <Form.Control type="date" required />
                                </Col>
                            </Form.Group>
                            <div className="mb-4 form-check">
                                <input type="checkbox" class="form-check-input" id="exampleCheck1" style={changePosition} required />
                                <label className="form-check-label" for="exampleCheck1" required>Check me out</label>
                            </div>
                            <div className="payment-btn">
                                <button type="submit" className="btn btn-primary" value="Send Email">Submit</button>
                            </div>
                        </form>
                    </span>
                </table>
            </fieldset>
        </div>
    )
}
