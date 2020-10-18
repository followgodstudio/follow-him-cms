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
import React from "react";

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
  Col
} from "reactstrap";

import { withFirebase } from '../../components/Firebase';
import * as ROUTES from '../../routes';
import {Link, withRouter} from 'react-router-dom';
import { compose } from 'recompose';
import SuccessAlertDismissible from "../../components/Utilities/SuccessAlertDismissible";

const INITIAL_STATE = {
  email: '',
  password: '',
  isPasswordResetEmailSent: false,
  error: null,
};

class PasswordForgetForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = { ...INITIAL_STATE };
  }

  onSubmit = event => {
    const { email, password } = this.state;

    this.props.firebase
    .doPasswordReset(email)
    .then(() => {
      this.setState({ ...INITIAL_STATE, isPasswordResetEmailSent:true });
      setTimeout(()=> this.props.history.push('/auth' + ROUTES.LOGIN), 5000);
    })
    .catch(error => {
      this.setState({ error });
    });

    event.preventDefault();
  };

  onChange = event => {
    this.setState({ [event.target.name]: event.target.value });
  };

  render() {
    const { email, isPasswordResetEmailSent, error } = this.state;

    const isInvalid = email === '';
    return (
        <>
          <Col lg="5" md="7">
            <Card className="bg-secondary shadow border-0">
              <CardHeader className="bg-transparent pb-5">
                <div className="text-muted text-center mt-2 mb-3">
                  <small>Sign in with</small>
                </div>
                <div className="btn-wrapper text-center">
                  <Button
                      className="btn-neutral btn-icon"
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
                  <small>Email account you want to reset password?</small>
                </div>
                {isPasswordResetEmailSent ?
                    <SuccessAlertDismissible
                        heading="Thank you!"
                        message="You have successfully reset password and an email is sent to ${email}"
                        button="Close"/>
                    :
                    <Form onSubmit={this.onSubmit} role="form">
                      <FormGroup className="mb-3">
                        <InputGroup className="input-group-alternative">
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
                      <div className="text-center">
                        <Button className="my-4" color="primary"
                                disabled={isInvalid} type="submit">
                          Reset Password
                        </Button>

                        {error && <p>{error.message}</p>}
                      </div>
                    </Form>
                }
              </CardBody>
            </Card>
            <Row className="mt-3">
              <Col xs="6">
                <a
                    className="text-light"
                    href="/auth/login"
                    onClick={e => {this.props.history.push('/auth' + ROUTES.LOGIN);e.preventDefault();}}
                >
                    <small>Log in</small>
                </a>
              </Col>
              <Col className="text-right" xs="6">
                <a
                    className="text-light"
                    href="#pablo"
                    onClick={e => {this.props.history.push('/auth' + ROUTES.REGISTER);e.preventDefault();}}
                >
                  <small>Create new account</small>
                </a>
              </Col>
            </Row>
          </Col>
        </>
    );
  }
}

const PasswordForget = compose(withRouter, withFirebase)(PasswordForgetForm);

export default PasswordForget;
