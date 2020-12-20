/* eslint-disable no-unused-vars*/
import React, { useEffect, useState } from "react";

// reactstrap components
import {
  Button,
  Card,
  CardBody,
  CardFooter,
  FormGroup,
  Form,
  Input,
  Row,
  Col,
} from "reactstrap";

import { Editor } from "@tinymce/tinymce-react";

const FormContainer__ = ({ initialValue, pageTitle, ...props }) => {
  /**
   * TinyMCE Key
   */
  // Preview button
  const [isSubmit, setIsSubmit] = useState(false);
  const [disabledButton, setDisabledButton] = useState("");

  // form
  const [title, setTitle] = useState("");
  const [titleState, setTitleState] = useState("");

  const [category, setCategory] = useState("");
  const [categoryState, setCategoryState] = useState("");

  const [imageUrl, setImageUrl] = useState("");
  const [imageUrlState, setImageUrlState] = useState("");

  const [description, setDescription] = useState("");
  const [descriptionState, setDescriptionState] = useState("");

  const stateFunctions = {
    setTitle: (value) => setTitle(value),
    setTitleState: (value) => setTitleState(value),

    setCategory: (value) => setCategory(value),
    setCategoryState: (value) => setCategoryState(value),

    setImageUrl: (value) => setImageUrl(value),
    setImageUrlState: (value) => setImageUrlState(value),

    setDescription: (value) => setDescription(value),
    setDescriptionState: (value) => setDescriptionState(value),
  };

  // function that verifies if a string has a given length or not
  const verifyLength = (value, length) => {
    if (value.length >= length) {
      return true;
    }
    return false;
  };

  // verifies if value is a valid URL
  const verifyUrl = (value) => {
    try {
      new URL(value);
      return true;
    } catch (_) {
      return false;
    }
  };

  const verifyEditorContentLength = (value, length) => {
    const regex = /(<([^>]+)>)/gi;

    const result = value.replace(regex, "");

    if (verifyLength(result, length)) {
      return true;
    }

    return false;
  };

  const change = (event, stateName, type, stateNameEqualTo, maxValue) => {
    switch (type) {
      /**
       * Title Validate
       */
      case "title":
        if (verifyLength(event.target.value, 10)) {
          stateFunctions["set" + stateName + "State"]("has-success");
        } else {
          stateFunctions["set" + stateName + "State"](
            "has-danger length-not-match"
          );
        }
        break;
      /**
       * Image URL validation
       */
      case "url":
        if (verifyUrl(event.target.value)) {
          stateFunctions["set" + stateName + "State"]("has-success");
        } else {
          stateFunctions["set" + stateName + "State"]("has-danger");
        }
        break;
      /**
       * Category validation
       */
      case "category":
        if (verifyLength(event.target.value, 1)) {
          stateFunctions["set" + stateName + "State"]("has-success");
        } else {
          stateFunctions["set" + stateName + "State"]("has-danger");
        }
        break;
      /**
       * TinyMCE Editor Content Verify
       */
      case "description":
        if (verifyEditorContentLength(event, 100)) {
          stateFunctions["set" + stateName + "State"]("has-success");
        } else {
          stateFunctions["set" + stateName + "State"](
            "has-danger length-not-match"
          );
        }
        break;
      default:
        break;
    }

    if (type === "description") {
      stateFunctions["set" + stateName](event);
    } else {
      stateFunctions["set" + stateName](event.target.value);
    }
  };

  const handleEnableButton = () => {
    // if (props.ui.loading === false) {
    //   if (
    //     title === "" ||
    //     category === "" ||
    //     imageUrl === "" ||
    //     description === ""
    //   ) {
    //     return setDisabledButton("disabled");
    //   } else if (
    //     titleState.includes("has-danger") ||
    //     categoryState.includes("has-danger") ||
    //     imageUrlState.includes("has-danger") ||
    //     descriptionState.includes("has-danger")
    //   ) {
    //     return setDisabledButton("disabled");
    //   } else {
    //     return setDisabledButton("");
    //   }
    // }
  };

  const handlePreview = () => {
    console.log(props);
  };

  useEffect(() => {
    handleEnableButton();

    return () => {
      handleEnableButton();
    };
  }, [disabledButton, isSubmit]);

  return (
    <>
      <Row className="mb-3">
        <Col md={8} className="ml-auto mr-auto">
          <h2 className="text-center">{pageTitle}</h2>
          <p className="text-center">
            A powerful form that enable you to make your post description more
            beautiful.
          </p>
          <p className="text-center">
            It is a highly flexible tool, based upon the foundations of
            progressive enhancement on which you can control advanced
            interaction.
          </p>
        </Col>
      </Row>
      <Row>
        <Col md="12">
          <Form id="RegisterValidation">
            <Card>
              <CardBody>
                <Row>
                  <Col md="6">
                    <FormGroup className={`has-label ${titleState}`}>
                      <label>Title *</label>
                      <Input
                        name="title"
                        type="text"
                        onChange={(e) => change(e, "Title", "title")}
                      />
                      {titleState.includes("length-not-match") ? (
                        <label className="error text-danger">
                          Title field must be at least 10 characters.
                        </label>
                      ) : null}
                    </FormGroup>
                  </Col>

                  {/* Category Selection */}
                  <Col md="6">
                    <FormGroup className={`has-label ${categoryState}`}>
                      <label>Category *</label>
                      <Input
                        id="category"
                        name="category"
                        type="text"
                        autoComplete="off"
                        onChange={(e) => change(e, "Category", "category")}
                      />
                      {categoryState === "has-danger" ? (
                        <label className="error text-danger">
                          This field is required.
                        </label>
                      ) : null}
                    </FormGroup>
                  </Col>
                </Row>
                <Row>
                  <Col md="12">
                    <FormGroup className={`has-label ${imageUrlState}`}>
                      <label>Image URL *</label>
                      <Input
                        name="imageUrl"
                        type="text"
                        onChange={(e) => change(e, "ImageUrl", "url")}
                      />
                      {imageUrlState === "has-danger" ? (
                        <label className="error text-danger">
                          Please enter a valid URL.
                        </label>
                      ) : null}
                    </FormGroup>
                  </Col>
                </Row>
                <Row>
                  <Col md="12">
                    <FormGroup className={`has-label ${descriptionState}`}>
                      <label>Description *</label>&nbsp;&nbsp;
                      {descriptionState === "has-danger" ? (
                        <label className="error text-danger">
                          Content is required.
                        </label>
                      ) : null}
                      {descriptionState.includes("length-not-match") ? (
                        <label className="error text-danger">
                          Content must be at least 100 characters.
                        </label>
                      ) : null}
                      <Editor
                        initialValue={initialValue.description}
                        id="uuid"
                        apiKey="slyingz9myqi7fv31jkg1mx9m2jrq1gt4tdrw9z0gqzbfgy0"
                        init={{
                          height: 500,
                          branding: false,
                        }}
                        onEditorChange={(e) =>
                          change(e, "Description", "description")
                        }
                      />
                    </FormGroup>
                  </Col>
                </Row>

                <div className="category form-category">* Required fields</div>
              </CardBody>
              <CardFooter className="text-left">
                <Button
                  disabled={disabledButton}
                  className="animation-on-hover"
                  color="success"
                  onClick={handlePreview}
                >
                  Preview
                </Button>
              </CardFooter>
            </Card>
          </Form>
        </Col>
      </Row>
    </>
  );
};

export default FormContainer__;
