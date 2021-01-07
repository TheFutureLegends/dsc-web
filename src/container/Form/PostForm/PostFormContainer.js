import React from "react";
import Select from "react-select";
// reactstrap components
import { FormGroup, Input, Row, Col } from "reactstrap";

const PostFormContainer__ = ({ data, handleChange, ...props }) => {
  const { titleState, categoryState, imageUrlState } = props;

  return (
    <>
      <Row>
        <Col md="6">
          <FormGroup className={`has-label ${titleState}`}>
            <label>Title *</label>
            <Input
              name="title"
              type="text"
              value={data.title}
              onChange={(e) => handleChange(e, "Title", "title")}
              placeholder="Enter title for your post"
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
            {/* <Input
              id="category"
              name="category"
              type="text"
              value={data.category}
              autoComplete="off"
              onChange={(e) => handleChange(e, "Category", "category")}
            /> */}
            <Select
              className="react-select danger"
              classNamePrefix="react-select"
              name="category"
              value={data.category}
              onChange={(e) => handleChange(e, "Category", "category")}
              options={props.categoryOptions}
              placeholder="Single Select"
            />
            {categoryState.includes("has-danger") ? (
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
              value={data.imageFile}
              onChange={(e) => handleChange(e, "ImageUrl", "url")}
              placeholder="Enter the url leads to your image"
            />
            {imageUrlState === "has-danger" ? (
              <label className="error text-danger">
                Please enter a valid image URL.
              </label>
            ) : null}
          </FormGroup>
        </Col>
      </Row>
    </>
  );
};

export default PostFormContainer__;
