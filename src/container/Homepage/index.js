import React from "react";
import { connect } from "react-redux";

// reactstrap components
import { Col } from "reactstrap";

import MainBlogSection from "./MainBlogSection.js";

const HomepageContainer__ = (props) => {
  return (
    <Col md="9">
      <MainBlogSection posts={props.posts} {...props} />
    </Col>
  );
};

const mapStateToProps = (state) => ({
  posts: state.post.posts,
});

export default connect(mapStateToProps, null)(HomepageContainer__);
