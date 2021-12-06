import React, {useState} from 'react';
import { Container, Row, Col, Card, Form, Button, InputGroup, FormControl } from 'react-bootstrap';
import "./Forgot"
// FontAwesome
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye } from "@fortawesome/free-solid-svg-icons";
import { faEyeSlash } from "@fortawesome/free-solid-svg-icons";
import { faCheck } from "@fortawesome/free-solid-svg-icons";
const eye = <FontAwesomeIcon icon={faEye} />;
const eyeSlash = <FontAwesomeIcon icon={faEyeSlash}  style={{color: "#0979F9"}}/>;
const checkIcon = <FontAwesomeIcon icon={faCheck} />;

export default function Forget() {
    const [eyeToggler, setEyeToggler] = useState(false);
    const [eyeReToggler, setEyeReToggler] = useState(false);
    const [typeChange, setTypeChange] = useState(false);
    const [typeReChange, setTypeReChange] = useState(false);
    const [showForm1, setShowForm1] = useState(true);
    const [showForm2, setShowForm2] = useState(false);
    const [showForm3, setShowForm3] = useState(false);
    const [showForm4, setShowForm4] = useState(false);

    const onChangeEye = (value) =>{
        console.log(value);
        if(value === "password"){
            setTypeChange(typeChange ? false : true);
            setEyeToggler(eyeToggler ? false : true);
        }
        else if(value === "password_confirmation"){
            setTypeReChange(typeReChange ? false : true);
            setEyeReToggler(eyeReToggler ? false : true);
        }
    }
    const handleToggleVisible=(value)=>{
        if(value==="tab1"){
            setShowForm1(false);
            setShowForm2(true);
        }
        else if(value==="tab2"){
            setShowForm2(false);
            setShowForm3(true);
        }
        else if(value==="tab3"){
            setShowForm4(true);
            setShowForm3(false);
        }
    }
    return (
        <Container fluid className="main-container">
            <Row>
                <Col md={8} className="d-flex align-items-center">
                    {showForm1 ? <Card className="w-50 mx-auto border-0">
                        <div className="card-body text-start">
                            <h3 className="text-primary main-header">Forgot Password</h3>
                            <p className="secondary-header">Recover Your Password With Few Simple Steps</p>
                            <div>
                                <div className="position-relative m-4">
                                    <div className="progress" style={{height: "1px"}}>
                                        <div className="progress-bar" role="progressbar" style={{width: '0%'}} aria-valuenow="50" aria-valuemin="0" aria-valuemax="100"></div>
                                    </div>
                                    <button className="position-absolute top-0 start-0 translate-middle btn btn-sm btn-primary rounded-pill border border-2 border-light" style={{width: '2rem', height:'2rem'}}>1</button>
                                    <button className="position-absolute top-0 start-50 translate-middle btn btn-sm rounded-pill border border-2 border-light" style={{width: '2rem', height:'2rem'}}>2</button>
                                    <button className="position-absolute top-0 start-100 translate-middle btn btn-sm rounded-pill border border-2 " style={{width: '2rem', height:'2rem'}}>3</button>
                                </div>
                            </div>
                            <Form>
                                <Form.Group className="mb-1">
                                    <Form.Label className="label-header">Email or Mobiles<span className="text-danger">*</span> </Form.Label>
                                    <Form.Control type="text" placeholder="Please Enter Here"/>
                                </Form.Group>
                                <div className="row mt-4">
                                    <Button type="submit" variant="primary" onClick={()=>handleToggleVisible("tab1")} className="col-12">Next</Button>
                                </div>
                                <div className="mt-2">
                                    Please <a href="32">Click Here</a> To Go Back
                                </div>
                            </Form>
                        </div>
                    </Card>: null
                    }
                    {
                        showForm2 ? <Card className="w-50 mx-auto border-0">
                            <div className="card-body text-start">
                                <h3 className="text-primary main-header">OTP Verification</h3>
                                <p className="secondary-header">A 6 Digit Verification Code Has Been Sent</p>
                                <div>
                                    <div className="position-relative m-4">
                                        <div className="progress" style={{height: "1px"}}>
                                            <div className="progress-bar" role="progressbar" style={{width: '50%'}} aria-valuenow="50" aria-valuemin="0" aria-valuemax="100"></div>
                                        </div>
                                        <button className="position-absolute top-0 start-0 translate-middle btn btn-sm btn-primary rounded-pill border border-2 border-light" style={{width: '2rem', height:'2rem'}}>{checkIcon}</button>
                                        <button className="position-absolute top-0 start-50 translate-middle btn btn-sm btn-primary rounded-pill border border-2 border-light" style={{width: '2rem', height:'2rem'}}>2</button>
                                        <button className="position-absolute top-0 start-100 translate-middle btn btn-sm rounded-pill border border-2 " style={{width: '2rem', height:'2rem'}}>3</button>
                                    </div>
                                </div>
                                <Form>
                                    <Form.Group className="mb-1">
                                        <Form.Label className="label-header">Verification Code</Form.Label>
                                        <div className="row">
                                            <Col md={2} sm={2}>
                                                <input type="text" className="form-control"/>
                                            </Col>
                                            <Col md={2} sm={2}>
                                                <input type="text" className="form-control"/>
                                            </Col>
                                            <Col md={2} sm={2}>
                                                <input type="text" className="form-control"/>
                                            </Col>
                                            <Col md={2} sm={2}>
                                                <input type="text" className="form-control"/>
                                            </Col>
                                            <Col md={2} sm={2}>
                                                <input type="text" className="form-control"/>
                                            </Col>
                                            <Col md={2} sm={2}>
                                                <input type="text" className="form-control"/>
                                            </Col>
                                        </div>
                                        <Form.Text className="custom-form-text">
                                            This Code Active For 5 Minute
                                        </Form.Text>
                                    </Form.Group>
                                    <div className="row mt-2">
                                        <Button type="submit" variant="primary" onClick={()=>handleToggleVisible("tab2")} className="col-12">Next</Button>
                                    </div>
                                    <div className="d-flex justify-content-center mt-2">
                                        <p className="custom-form-text-check">I Didn't Get Any Code.</p>
                                        <a href="23" className="custom-form-text-check text-decoration-none">RESEND CODE (23)</a>
                                    </div>
                                </Form>
                            </div>
                        </Card> : null
                    }
                    { showForm3 ? <Card className="w-50 mx-auto border-0">
                        <div className="card-body text-start">
                            <h3 className="text-primary main-header">Reset New Password</h3>
                            <p className="secondary-header">Account Verification Successful</p>
                            <div>
                                <div className="position-relative m-4">
                                    <div className="progress" style={{height: "1px"}}>
                                        <div className="progress-bar" role="progressbar" style={{width: '0%'}} aria-valuenow="50" aria-valuemin="0" aria-valuemax="100"></div>
                                    </div>
                                    <button className="position-absolute top-0 start-0 translate-middle btn btn-sm btn-primary rounded-pill border border-2 border-light" style={{width: '2rem', height:'2rem'}}>{checkIcon}</button>
                                    <button className="position-absolute top-0 start-50 translate-middle btn btn-sm btn-primary rounded-pill border border-2 border-light" style={{width: '2rem', height:'2rem'}}>{checkIcon}</button>
                                    <button className="position-absolute top-0 start-100 translate-middle btn btn-sm btn-primary rounded-pill border border-2 " style={{width: '2rem', height:'2rem'}}>3</button>
                                </div>
                            </div>
                            <Form>
                                <Form.Group className="mb-1">
                                    <Form.Label className="label-header">Password<span className="text-danger">*</span> </Form.Label>
                                    <InputGroup className="mb-3">
                                        <FormControl type={typeChange ? "text" : "password"} className="border-end-0" placeholder="Enter Password Here" />
                                        <InputGroup.Text id="basic-addon1" onClick={()=>onChangeEye("password")}>{eyeToggler ? eyeSlash : eye}</InputGroup.Text>
                                        <Form.Text className="text-muted custom-form-text">
                                            Use 8 or More Characters With A Mix Of Letters, Numbers & Symbol
                                        </Form.Text>
                                    </InputGroup>
                                </Form.Group>
                                <Form.Group className="mb-1">
                                    <Form.Label className="label-header">Re-Password<span className="text-danger">*</span> </Form.Label>
                                    <InputGroup className="mb-1">
                                        <FormControl type={typeReChange ? "text" : "password"} className="border-end-0" placeholder="Enter Password Here" />
                                        <InputGroup.Text id="basic-addon1" onClick={()=>onChangeEye("password_confirmation")}>{eyeReToggler ? eyeSlash : eye}</InputGroup.Text>
                                    </InputGroup>
                                </Form.Group>
                                <div className="row mt-2">
                                    <Button type="submit" variant="primary" onClick={()=>handleToggleVisible("tab3")} className="col-12">Next</Button>
                                </div>
                            </Form>
                        </div>
                    </Card>: null
                    }
                    {
                        showForm4 ? <Card className="w-50 mx-auto border-0">
                            <div className="card-body text-start">
                                <h3 className="text-primary main-header">Success</h3>
                                <p className="secondary-header">Awesome</p>
                                <div>
                                    <div className="position-relative m-4">
                                        <div className="progress" style={{height: "1px"}}>
                                            <div className="progress-bar" role="progressbar" style={{width: '100%'}} aria-valuenow="50" aria-valuemin="0" aria-valuemax="100"></div>
                                        </div>
                                        <button className="position-absolute top-0 start-0 translate-middle btn btn-sm btn-primary rounded-pill border border-2 border-light" style={{width: '2rem', height:'2rem'}}>{checkIcon}</button>
                                        <button className="position-absolute top-0 start-50 translate-middle btn btn-sm btn-primary rounded-pill border border-2 border-light" style={{width: '2rem', height:'2rem'}}>{checkIcon}</button>
                                        <button className="position-absolute top-0 start-100 translate-middle btn btn-sm btn-primary rounded-pill border border-2 " style={{width: '2rem', height:'2rem'}}>{checkIcon}</button>
                                    </div>
                                </div>
                                <Form>
                                    <div className="d-flex mt-2">
                                        <p className="custom-form-text-check">Your Account Has Been Created Successfully.</p>
                                    </div>
                                    <div className="row mt-2">
                                        <Button type="submit" variant="primary" className="col-12">Login</Button>
                                    </div>
                                </Form>
                            </div>
                        </Card> : null
                    }
                </Col>
                <Col md={4} className="left-login"></Col>
            </Row>
        </Container>
    )
}
