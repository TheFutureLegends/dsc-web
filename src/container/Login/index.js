import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import classnames from "classnames";
// reactstrap components
import {
  Button,
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  CardTitle,
  Form,
  FormGroup,
  Input,
  // InputGroupAddon,
  // InputGroupText,
  // InputGroup,
  Container,
  Col,
} from "reactstrap";

import { loginUser } from "../../core/redux/actions/user.action.js";

const LoginContainer__ = ({ ...props }) => {
  // login form
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [emailState, setEmailState] = useState("");
  const [passwordState, setPasswordState] = useState("");

  const stateFunctions = {
    // login form
    setEmail: (value) => setEmail(value),
    setPassword: (value) => setPassword(value),

    setEmailState: (value) => setEmailState(value),
    setPasswordState: (value) => setPasswordState(value),
  };

  // function that returns true if value is email, false otherwise
  const verifyEmail = (value) => {
    var emailRex = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if (emailRex.test(value)) {
      return true;
    }
    return false;
  };

  // function that verifies if a string has a given length or not
  const verifyLength = (value, length) => {
    if (value.length >= length) {
      return true;
    }
    return false;
  };

  const handleChange = (event, stateName, type, stateNameEqualTo, maxValue) => {
    switch (type) {
      case "email":
        if (verifyEmail(event.target.value)) {
          stateFunctions["set" + stateName + "State"]("has-success");
        } else {
          stateFunctions["set" + stateName + "State"]("has-danger");
        }
        break;
      case "password":
        if (verifyLength(event.target.value, 1)) {
          stateFunctions["set" + stateName + "State"]("has-success");
        } else {
          stateFunctions["set" + stateName + "State"]("has-danger");
        }
        break;
      default:
        break;
    }
    stateFunctions["set" + stateName](event.target.value);
  };

  const handleLogin = () => {
    if (emailState === "") {
      setEmailState("has-danger");
    }
    if (passwordState === "") {
      setPasswordState("has-danger");
    }

    if (email !== "" && password !== "") {
      // console.log(props);
      props.loginUser({ email: email, password: password }, props.history);
    }

    console.log(props);
  };

  useEffect(() => {
    document.body.classList.toggle("login-page");
    return function cleanup() {
      document.body.classList.toggle("login-page");
    };
  });

  return (
    <Col md="9">
      <Container>
        <Col className="ml-auto mr-auto" lg="6" md="6">
          <Form className="form">
            <Card className="card-login card-white">
              <CardHeader className="mb-5">
                <img
                  alt="..."
                  src={require("../../assets/img/card-primary.png").default}
                />
                <CardTitle tag="h1" className="ml-2">
                  Login
                </CardTitle>
              </CardHeader>
              <CardBody>
                <FormGroup className={`has-label ${emailState}`}>
                  <label>Email Address *</label>
                  <Input
                    name="email"
                    type="email"
                    onChange={(e) => handleChange(e, "Email", "email")}
                  />
                  {emailState === "has-danger" ? (
                    <label className="error">
                      Please enter a valid email address.
                    </label>
                  ) : null}
                </FormGroup>
                <FormGroup className={`has-label ${passwordState}`}>
                  <label>Password *</label>
                  <Input
                    name="password"
                    type="password"
                    autoComplete="off"
                    onChange={(e) => handleChange(e, "Password", "password")}
                  />
                  {passwordState === "has-danger" ? (
                    <label className="error">This field is required.</label>
                  ) : null}
                </FormGroup>
                <div className="category form-category">* Required fields</div>
              </CardBody>
              <CardFooter>
                <Button
                  block
                  className="mb-3"
                  color="primary"
                  href="#pablo"
                  onClick={(e) => {
                    e.preventDefault();
                    handleLogin();
                  }}
                  size="lg"
                >
                  LOGIN
                </Button>
                <div className="pull-left">
                  <h6>
                    <a
                      className="link footer-link"
                      href="/auth/register"
                      // onClick={(e) => e.preventDefault()}
                    >
                      Create Account
                    </a>
                  </h6>
                </div>
                <div className="pull-right">
                  <h6>
                    <a
                      className="link footer-link"
                      href="#pablo"
                      onClick={(e) => e.preventDefault()}
                    >
                      Need Help?
                    </a>
                  </h6>
                </div>
              </CardFooter>
            </Card>
          </Form>
        </Col>
      </Container>
    </Col>
  );
};

const mapDispatchToProps = {
  loginUser,
};

export default connect(null, mapDispatchToProps)(LoginContainer__);
