/*!

=========================================================
* Argon Dashboard React - v1.1.0
=========================================================

* Product Page: https://www.creative-tim.com/product/argon-dashboard-react
* Copyright 2019 Creative Tim (https://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/argon-dashboard-react/blob/master/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
import React, {useState} from "react";
import * as ROUTES from '../../routes';

// reactstrap components
import {
  Button,
  Card,
  CardHeader,
  CardBody,
  FormGroup,
  Form,
  Input,
  InputGroupAddon,
  InputGroupText,
  InputGroup,
  Row,
  Col,
} from "reactstrap";

import { withFirebase } from '../../components/Firebase';
import { Link, withRouter } from "react-router-dom";
import { compose } from 'recompose';
import SuccessAlertDismissible from "../../components/Utilities/SuccessAlertDismissible";

const INITIAL_STATE = {
  username: '',
  email: '',
  passwordOne: '',
  passwordTwo: '',
  error: true,
  isRegistrationSuccess: false
};

class RegisterForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = { ...INITIAL_STATE };
  }

  onChange = event => {
    this.setState({ [event.target.name]: event.target.value });
  };

  onSubmit = event => {
    const { username, email, passwordOne } = this.state;

    this.props.firebase
    .doCreateUserWithEmailAndPassword(email, passwordOne)
    .then(authUser => {
      this.setState({ ...INITIAL_STATE, isRegistrationSuccess: true });
      setTimeout(()=> this.props.history.push('/admin' + ROUTES.DASHBOARD), 3000);
      // this.props.history.push("/admin" + ROUTES.DASHBOARD);
    })
    .catch(error => {
      this.setState({ error });
    });

    event.preventDefault();
  };

  render() {
    const {
      username,
      email,
      passwordOne,
      passwordTwo,
      error,
      isRegistrationSuccess
    } = this.state;

    const isInvalid =
        passwordOne !== passwordTwo ||
        passwordOne === '' ||
        email === '' ||
        username === '';

    return (
        <>
          <Col lg="6" md="8">
            <Card className="bg-secondary shadow border-0">
              <CardHeader className="bg-transparent pb-5">
                <div className="text-muted text-center mt-2 mb-4">
                  <small>Sign up with</small>
                </div>
                <div className="text-center">
                  <Button
                      className="btn-neutral btn-icon mr-4"
                      color="default"
                      href="#pablo"
                      onClick={e => e.preventDefault()}
                  >
              <span className="btn-inner--icon">
                <img
                    alt="..."
                    src={require("assets/img/icons/common/github.svg")}
                />
              </span>
                    <span className="btn-inner--text">Github</span>
                  </Button>
                  <Button
                      className="btn-neutral btn-icon"
                      color="default"
                      href="#pablo"
                      onClick={e => e.preventDefault()}
                  >
              <span className="btn-inner--icon">
                <img
                    alt="..."
                    src={require("assets/img/icons/common/google.svg")}
                />
              </span>
                    <span className="btn-inner--text">Google</span>
                  </Button>
                </div>
              </CardHeader>
              <CardBody className="px-lg-5 py-lg-5">
                <div className="text-center text-muted mb-4">
                  <small>Or sign up with credentials</small>
                </div>
                {isRegistrationSuccess ?
                    <SuccessAlertDismissible
                        heading="Thank you for joining us!"
                        message="You have successfully created Suixing's Account! Will redirect you to the Administration Dashboard."
                        button="Close"/>
                        :
                    <Form role="form" onSubmit={this.onSubmit}>
                      <FormGroup>
                        <InputGroup className="input-group-alternative mb-3">
                          <InputGroupAddon addonType="prepend">
                            <InputGroupText>
                              <i className="ni ni-hat-3"/>
                            </InputGroupText>
                          </InputGroupAddon>
                          <Input name="username" placeholder="Username"
                                 type="text" onChange={this.onChange}/>
                        </InputGroup>
                      </FormGroup>
                      <FormGroup>
                        <InputGroup className="input-group-alternative mb-3">
                          <InputGroupAddon addonType="prepend">
                            <InputGroupText>
                              <i className="ni ni-email-83"/>
                            </InputGroupText>
                          </InputGroupAddon>
                          <Input name="email" placeholder="Email" type="email"
                                 autoComplete="new-email"
                                 onChange={this.onChange}/>
                        </InputGroup>
                      </FormGroup>
                      <FormGroup>
                        <InputGroup className="input-group-alternative">
                          <InputGroupAddon addonType="prepend">
                            <InputGroupText>
                              <i className="ni ni-lock-circle-open"/>
                            </InputGroupText>
                          </InputGroupAddon>
                          <Input name="passwordOne" value={passwordOne}
                                 placeholder="Password" type="password"
                                 onChange={this.onChange}/>
                        </InputGroup>
                      </FormGroup>
                      <FormGroup>
                        <InputGroup className="input-group-alternative">
                          <InputGroupAddon addonType="prepend">
                            <InputGroupText>
                              <i className="ni ni-lock-circle-open"/>
                            </InputGroupText>
                          </InputGroupAddon>
                          <Input name="passwordTwo" value={passwordTwo}
                                 placeholder="Confirm Password" type="password"
                                 onChange={this.onChange}/>
                        </InputGroup>
                      </FormGroup>
                      <div className="text-muted font-italic">
                        <small>
                          password strength:{" "}
                          <span
                              className="text-success font-weight-700">strong</span>
                        </small>
                      </div>
                      <Row className="my-4">
                        <Col xs="12">
                          <div
                              className="custom-control custom-control-alternative custom-checkbox">
                            <input
                                className="custom-control-input"
                                id="customCheckRegister"
                                type="checkbox"
                            />
                            <label
                                className="custom-control-label"
                                htmlFor="customCheckRegister"
                            >
                    <span className="text-muted">
                      I agree with the{" "}
                      <a href="#pablo" onClick={e => e.preventDefault()}>
                        Privacy Policy
                      </a>
                    </span>
                            </label>
                          </div>
                        </Col>
                      </Row>
                      <div className="text-center">
                        <Button className="mt-4" color="primary"
                                disabled={isInvalid} type="submit">
                          Create account
                        </Button>
                      </div>
                      <div className="text-center">
                        <Link to='/auth/login'>
                          <small className="mt-sm-5" color="info" type="button">
                            Have an account?
                          </small>
                        </Link>
                      </div>
                      {error && <p>{error.message}</p>}
                    </Form>
                }
              </CardBody>
            </Card>
          </Col>
        </>
    );
  }
}

const Register = compose(withRouter, withFirebase)(RegisterForm);

export default Register;
