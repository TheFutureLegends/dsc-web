import React from "react";
import { connect } from "react-redux";

// reactstrap components
import { Col } from "reactstrap";

import MainBlogSection from "./MainBlogSection.js";

const HomepageContainer__ = (props) => {
  return (
    <Col md="12">
      <MainBlogSection posts={props.postsToDisplay} {...props} />
    </Col>
  );
};

const mapStateToProps = (state) => ({
  postsWithPagination: state.post.postsWithPagination,
  postsToDisplay: state.post.postsToDisplay,
});

export default connect(mapStateToProps, null)(HomepageContainer__);
