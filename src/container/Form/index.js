/* eslint-disable no-unused-vars*/
import React, { useEffect, useRef, useState } from "react";

// reactstrap components
import {
  Button,
  Card,
  CardTitle,
  CardBody,
  CardImg,
  CardFooter,
  FormGroup,
  Form,
  Row,
  Col,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
} from "reactstrap";

import HtmlToReact from "html-to-react";

import { Editor } from "@tinymce/tinymce-react";

import Author from "../../components/Author/Author.js";

import {
  isObjectPropertiesEmpty,
  isObjectPropertiesIncludeString,
  convertSlugToString,
  isStringIncludesWord,
} from "../../utilities/index.js";

import {
  verifyLength,
  verifyUrl,
  verifyUrlImageMime,
  verifyEditorContentLength,
} from "../../validations/index.js";

import PostFormContainer from "./PostForm/PostForm.js";

let form;

var htmlToReactParser = HtmlToReact.Parser;

const FormContainer__ = ({ data, state, pageTitle, formType, ...props }) => {
  // Preview button
  let btnRef = useRef();
  const [isSubmit, setIsSubmit] = useState(false);
  const [disabledButton, setDisabledButton] = useState(true);

  // Preview Modal
  var parser = new htmlToReactParser();
  const [unMountModalOnClose, setUnMountModalOnClose] = useState(true);
  const [isModalOpened, setIsModalOpened] = useState(false);

  // form data
  const [formData, setFormData] = useState(data);

  // form success/error state
  const [formState, setFormState] = useState(state);

  const stateFunctions = {
    setTitle: (value) =>
      setFormData({
        ...formData,
        title: value,
      }),
    setTitleState: (value) =>
      setFormState({
        ...formState,
        title: value,
      }),

    setCategory: (value) =>
      setFormData({
        ...formData,
        category: value,
      }),
    setCategoryState: (value) =>
      setFormState({
        ...formState,
        category: value,
      }),

    setImageUrl: (value) =>
      setFormData({
        ...formData,
        imageFile: value,
      }),
    setImageUrlState: (value) =>
      setFormState({
        ...formState,
        image: value,
      }),

    setDescription: (value) =>
      setFormData({
        ...formData,
        description: value,
      }),
    setDescriptionState: (value) =>
      setFormState({
        ...formState,
        description: value,
      }),
  };

  const change = (event, stateName, type) => {
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
        if (
          verifyUrl(event.target.value) &&
          verifyUrlImageMime(event.target.value)
        ) {
          stateFunctions["set" + stateName + "State"]("has-success");
        } else {
          stateFunctions["set" + stateName + "State"]("has-danger");
        }
        break;
      /**
       * Category validation
       */
      case "category":
        if (verifyLength(event.target.value, 5)) {
          stateFunctions["set" + stateName + "State"]("has-success");
        } else {
          stateFunctions["set" + stateName + "State"]("has-danger");
        }
        break;
      /**
       * TinyMCE Editor Content Validate
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

    switch (type) {
      case "description":
        stateFunctions["set" + stateName](event);
        break;

      default:
        stateFunctions["set" + stateName](event.target.value);
        break;
    }
  };

  const handleEnableButton = () => {
    if (isObjectPropertiesEmpty(formData)) {
      return setDisabledButton(true);
    }

    if (isObjectPropertiesIncludeString(formState, "has-danger")) {
      return setDisabledButton(true);
    }

    return setDisabledButton(false);
  };

  const handlePreview = () => {
    setIsModalOpened(!isModalOpened);
  };

  const handleSubmit = () => {
    if (isStringIncludesWord(props.location.pathname, "edit")) {
      props.updatePost(formData.id, formData, props.history);
    } else {
      props.createNewPost(formData, props.history);
    }
  };

  switch (formType) {
    case "post":
      form = (
        <PostFormContainer
          titleState={formState.title}
          categoryState={formState.category}
          imageUrlState={formState.image}
          handleChange={change}
          data={formData}
          {...props}
        />
      );
      break;

    default:
      break;
  }

  useEffect(() => {
    handleEnableButton();

    return () => {
      // handleEnableButton();
    };
  }, [
    formData,
    formState,
    disabledButton,
    isSubmit,
    isModalOpened,
    unMountModalOnClose,
  ]);

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
          <Form>
            <Card>
              <CardBody>
                {form}
                <Row>
                  <Col md="12">
                    <FormGroup className={`has-label ${formState.description}`}>
                      <label>Description *</label>&nbsp;&nbsp;
                      {formState.description === "has-danger" ? (
                        <label className="error text-danger">
                          Content is required.
                        </label>
                      ) : null}
                      {formState.description.includes("length-not-match") ? (
                        <label className="error text-danger">
                          Content must be at least 100 characters.
                        </label>
                      ) : null}
                      <Editor
                        initialValue={formData.description}
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

                <Modal
                  isOpen={isModalOpened}
                  toggle={handlePreview}
                  size="lg"
                  centered
                  unmountOnClose={unMountModalOnClose}
                  className="justify-content-center"
                  modalClassName="modal-long"
                >
                  <ModalHeader
                    className="justify-content-center"
                    toggle={handlePreview}
                  >
                    Preview
                  </ModalHeader>
                  <ModalBody>
                    <CardTitle
                      tag="h1"
                      className="text-center justify-content-center"
                    >
                      {formData.title}
                    </CardTitle>
                    <Row className="mb-2">
                      <Col xs="12">
                        <Author
                          src={props.user.credential.avatar}
                          size={40}
                          avatarSize={40}
                          fontSize={"20px"}
                          author={props.user.credential.username}
                          category={convertSlugToString(formData.category)}
                        />
                      </Col>
                    </Row>

                    <Row className="mb-4">
                      <Col xs="12">
                        <CardImg src={formData.imageFile} />
                      </Col>
                    </Row>
                    <Row>
                      <Col xs="12">{parser.parse(formData.description)}</Col>
                    </Row>
                  </ModalBody>
                  <ModalFooter>
                    <Button
                      color="danger"
                      className="animation-on-hover"
                      onClick={handlePreview}
                    >
                      Cancel
                    </Button>
                    <Button
                      color="success"
                      onClick={(e) => {
                        handleSubmit();
                      }}
                      className="animation-on-hover"
                    >
                      Save changes
                    </Button>
                  </ModalFooter>
                </Modal>

                <div className="category form-category">* Required fields</div>
              </CardBody>
              <CardFooter className="text-left">
                <Button
                  disabled={disabledButton}
                  className="animation-on-hover"
                  color="success"
                  onClick={handlePreview}
                  ref={btnRef}
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
