import React, { useState, useEffect, useRef } from "react";
// import classnames from "classnames";
// reactstrap components
import {
  Button,
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  CardImg,
  CardTitle,
  Label,
  FormGroup,
  Form,
  Input,
  Container,
  Col,
} from "reactstrap";

const RegisterContainer__ = ({ ...props }) => {
  let btnRef = useRef();

  // register button
  const [isSubmit, setIsSubmit] = useState(false);

  const [disabledButton, setDisabledButton] = useState("disabled");

  // checkbox state
  const [isChecked, setIsChecked] = useState(false);

  // register form state
  const [fullName, setFullName] = useState("");
  const [fullNameState, setFullNameState] = useState("");

  const [email, setEmail] = useState("");
  const [emailState, setEmailState] = useState("");

  const [password, setPassword] = useState("");
  const [passwordState, setPasswordState] = useState("");

  const [confirmPassword, setConfirmPassword] = useState("");
  const [confirmPasswordState, setConfirmPasswordState] = useState("");

  const stateFunctions = {
    setFullName: (value) => setFullName(value),
    setFullNameState: (value) => setFullNameState(value),

    setEmail: (value) => setEmail(value),
    setEmailState: (value) => setEmailState(value),

    setPassword: (value) => setPassword(value),
    setPasswordState: (value) => setPasswordState(value),

    setConfirmPassword: (value) => setConfirmPassword(value),
    setConfirmPasswordState: (value) => setConfirmPasswordState(value),
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
  // function that verifies if two strings are equal
  const compare = (string1, string2) => {
    if (string1 === string2) {
      return true;
    }
    return false;
  };

  const handleChange = (event, stateName, type, stateNameEqualTo) => {
    switch (type) {
      case "fullName":
        if (verifyLength(event.target.value, 6)) {
          stateFunctions["set" + stateName + "State"]("has-success");
        } else {
          stateFunctions["set" + stateName + "State"](
            "has-danger length-not-match"
          );
        }
        break;
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
          stateFunctions["set" + stateName + "State"](
            "has-danger length-not-match"
          );
        }
        break;
      case "equalTo":
        if (compare(event.target.value, stateNameEqualTo.value)) {
          stateFunctions["set" + stateName + "State"]("has-success");
          stateFunctions["set" + stateNameEqualTo.stateName + "State"](
            "has-success"
          );
        } else {
          stateFunctions["set" + stateName + "State"]("has-danger not-match");
          stateFunctions["set" + stateNameEqualTo.stateName + "State"](
            "has-danger not-match"
          );
        }
        break;
      default:
        break;
    }
    stateFunctions["set" + stateName](event.target.value);
  };

  const handleRegister = () => {
    const userData = {
      username: fullName,
      email: email,
      password: password,
    };

    props.signupUser(userData, props.history);

    setIsSubmit(props.ui.loading);

    setDisabledButton("disabled");
  };

  const handleCheckboxChange = () => {
    return setIsChecked(!isChecked);
  };

  const handleEnableButton = () => {
    if (props.ui.loading === false) {
      if (
        fullName === "" ||
        email === "" ||
        password === "" ||
        confirmPassword === "" ||
        isChecked === false
      ) {
        return setDisabledButton("disabled");
      } else if (
        fullNameState.includes("has-danger") ||
        emailState.includes("has-danger") ||
        passwordState.includes("has-danger") ||
        confirmPasswordState.includes("has-danger")
      ) {
        return setDisabledButton("disabled");
      } else {
        return setDisabledButton("");
      }
    }
  };

  useEffect(() => {
    handleEnableButton();

    document.body.classList.toggle("register-page");

    return function cleanup() {
      // handleEnableButton();

      document.body.classList.toggle("register-page");
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [
    fullName,
    email,
    password,
    confirmPassword,
    disabledButton,
    isChecked,
    isSubmit,
  ]);

  return (
    <Col>
      <Container>
        <Col className="mr-auto ml-auto" md="9" xs="9">
          <Card className="card-register card-white">
            <CardHeader>
              <CardImg
                alt="..."
                src={require("../../assets/img/card-primary.png").default}
              />
              <CardTitle tag="h4" className="ml-2">
                Container__
              </CardTitle>
            </CardHeader>
            <CardBody>
              <Form className="form">
                {/* Full name */}
                <FormGroup className={`has-label ${fullNameState}`}>
                  <label>Full name *</label>
                  <Input
                    name="fullName"
                    type="text"
                    onChange={(e) => handleChange(e, "FullName", "fullName")}
                  />
                  {fullNameState === "has-danger" ? (
                    <label className="error">This field is required.</label>
                  ) : null}
                  {fullNameState.includes("length-not-match") ? (
                    <label className="error">
                      Full name field cannot be less than 6 characters.
                    </label>
                  ) : null}
                </FormGroup>
                {/* Email */}
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
                {/* Password */}
                <FormGroup className={`has-label ${passwordState}`}>
                  <label>Password *</label>
                  <Input
                    id="password"
                    name="password"
                    type="password"
                    autoComplete="off"
                    onChange={(e) => handleChange(e, "Password", "password")}
                  />
                  {passwordState === "has-danger" ? (
                    <label className="error">This field is required.</label>
                  ) : null}
                  {passwordState.includes("not-match") ? (
                    <label className="error">
                      Password and Confirm Password must be matched.
                    </label>
                  ) : null}
                </FormGroup>
                {/* Confirm Password */}
                <FormGroup className={`has-label ${confirmPasswordState}`}>
                  <label>Confirm Password *</label>
                  <Input
                    equalto="#password"
                    id="password_confirmation"
                    name="password_confirmation"
                    type="password"
                    autoComplete="off"
                    onChange={(e) =>
                      handleChange(e, "ConfirmPassword", "equalTo", {
                        value: password,
                        stateName: "Password",
                      })
                    }
                  />
                  {confirmPasswordState === "has-danger" ? (
                    <label className="error">This field is required.</label>
                  ) : null}
                  {confirmPasswordState.includes("not-match") ? (
                    <label className="error">
                      Confirm Password does not match.
                    </label>
                  ) : null}
                </FormGroup>
                <div className="category form-category">* Required fields</div>
                <FormGroup check className="text-left">
                  <Label check>
                    <Input
                      type="checkbox"
                      onChange={handleCheckboxChange}
                      checked={isChecked}
                    />
                    <span className="form-check-sign" />I agree to the{" "}
                    <a href="#pablo" onClick={(e) => e.preventDefault()}>
                      terms and conditions
                    </a>
                    .
                  </Label>
                </FormGroup>
              </Form>
            </CardBody>
            <CardFooter>
              <Button
                block
                disabled={disabledButton}
                className="btn-round mb-3"
                color="primary"
                onClick={(e) => {
                  // e.preventDefault();
                  handleRegister();
                }}
                size="lg"
                ref={btnRef}
              >
                REGISTER
              </Button>
              <div className="pull-left">
                <h6>
                  <a
                    className="link footer-link"
                    href="/login"
                    // onClick={(e) => e.preventDefault()}
                  >
                    Already has an account?
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
        </Col>
      </Container>
    </Col>
  );
};

export default RegisterContainer__;
