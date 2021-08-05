import React from 'react';
import { Col } from 'react-bootstrap';
import { Form } from 'react-bootstrap';
import { Row } from 'react-bootstrap';

export const Register = () => {
    let contactStyle = {
        color: "Black",
        background: "#7b4397",
        display: "Flex",
        justifyContent: "Center",
        textAlign: "Center",
        border: "solid",
        width: "75%",
        paddingTop: "150px",
        paddingBottom: "150px",
    }
    let setPadding = {
        paddingBottom: "20px"
    }
    let setBottomPadding = {
        padding: "20px"
    }
    let footerStyle = {
        marginTop: "40px",
        position: "bottom",
        top: "100vh",
        width: "100%",
        color: "Black",
        background: "White",
        display: "Flex",
        justifyContent: "Center",
        paddingTop: "20px"
    }
    return (
        <div className="register-bgm">
            <fieldset className="drawMargin">
                <table style={contactStyle}>
                    <span className="border-register">
                        <legend className="changeStyle"><b>Register</b></legend>
                        <form className="changeFont">
                            <div style={setPadding}>
                                <Form.Group as={Row} className="mb-3" controlId="formHorizontalEmail">
                                    <Form.Label column sm={6}>
                                        Email
                                    </Form.Label>
                                    <Col sm={6}>
                                        <Form.Control type="email" placeholder="Email" />
                                    </Col>
                                </Form.Group>

                                <Form.Group as={Row} className="mb-3" controlId="formHorizontalPassword">
                                    <Form.Label column sm={6}>
                                        Password
                                    </Form.Label>
                                    <Col sm={6}>
                                        <Form.Control type="password" placeholder="Must be 8 characters long." />
                                    </Col>
                                </Form.Group>
                                <Form.Group as={Row} className="mb-3" controlId="formHorizontalPassword">
                                    <Form.Label column sm={6}>
                                        Confirm Password
                                    </Form.Label>
                                    <Col sm={6}>
                                        <Form.Control type="password" placeholder="Re-enter the password" />
                                    </Col>
                                </Form.Group>
                                <div className="mb-3 form-check" style={setBottomPadding}>
                                    <input type="checkbox" class="form-check-input" id="exampleCheck1"/>
                                    <label className="form-check-label" for="exampleCheck1" >Keep me signed in</label>
                                </div>
                                <div    >
                                    <button type="button" class="btn btn-primary btn-lg" >Register</button>
                                </div>
                            </div>
                        </form>
                    </span>
                </table>
            </fieldset>
            <div class="footer">
                <footer style={footerStyle}>
                    <p>Copyright &copy; 2021 | paintinghub.com | <b>All Rights Reserved</b></p>
                </footer>
            </div>
        </div>
    )
}
