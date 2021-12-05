import React, {useState} from 'react'
import Logo from "../../assets/images/caab logo.png";
import { Container, Row, Col, Card, Form, Button, InputGroup, FormControl } from 'react-bootstrap';
import ReCAPTCHA from "react-google-recaptcha";
import "./Login.css";


// FontAwesome
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye } from "@fortawesome/free-solid-svg-icons";
import { faEyeSlash } from "@fortawesome/free-solid-svg-icons";
const eye = <FontAwesomeIcon icon={faEye} />;
const eyeSlash = <FontAwesomeIcon icon={faEyeSlash}  style={{color: "#0979F9"}}/>;


const Login = () => {
    const [eyeToggler, setEyeToggler] = useState(false);
    const [typeChange, setTypeChange] = useState(false);
    const [radioToggle, setRadioToggle] = useState(false);

    const onChangeEye = () =>{
        setTypeChange(typeChange ? false : true);
        setEyeToggler(eyeToggler ? false : true);
    }
    const toggleRadio = () =>{
        setRadioToggle(!radioToggle);
    }
    function onChange(value) {
        console.log("Captcha value:", value);
    }

    return (
        <Container fluid className="main-container">
            <Row>
                <Col md={8} className="d-flex align-items-center">
                    <Card className="w-50 mx-auto border-0">
                        <div className="card-body text-start">
                            <img src={Logo} alt="Main Logo" className="logo"/>
                            <h3 className="text-primary mt-1 main-header">Welcome</h3>
                            <p className="secondary-header">Please Login To Continue</p>
                            <Form>
                                <Form.Group className="mb-3">
                                    <Form.Label className="label-header">Email or Mobiles<span className="text-danger">*</span> </Form.Label>
                                    <Form.Control type="email" placeholder="Please Enter Here"/>
                                </Form.Group>
                                <Form.Group className="mb-3">
                                    <Form.Label className="label-header">Password<span className="text-danger">*</span> </Form.Label>
                                    <InputGroup className="mb-3">
                                        <FormControl type={typeChange ? "text" : "password"} className="border-end-0" placeholder="Enter Password Here" />
                                        <InputGroup.Text id="basic-addon1" onClick={onChangeEye}>{eyeToggler ? eyeSlash : eye}</InputGroup.Text>
                                    </InputGroup>
                                </Form.Group>
                                <Row className="mb-3">
                                    <Col md={6} className="d-flex">
                                        <Form.Check type="radio" onClick={toggleRadio} checked={radioToggle}/>
                                        <Form.Check.Label className="custom_margin_left">Remember Me </Form.Check.Label>
                                    </Col>
                                    <Col md={6} className="text-end">
                                        <a href="23">Forget Password ?</a>
                                    </Col>
                                </Row>
                                <ReCAPTCHA
                                    sitekey="6LejDGcdAAAAAP088vmTvYB_sAM7LB8vDZyHfBjS"
                                    onChange={onChange}
                                />
                                <div className="d-flex justify-content-between mt-3">
                                    <Button variant="primary" className="custom-button">Login</Button>
                                    <Button variant="primary" className="custom-button">Sign Up</Button>
                                </div>
                            </Form>
                        </div>
                    </Card>
                </Col>
                <Col md={4} className="left-login"></Col>
            </Row>
        </Container>
    )
}

export default Login;
