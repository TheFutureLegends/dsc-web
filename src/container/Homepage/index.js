import React from "react";
import { connect } from "react-redux";

// reactstrap components
import { Col } from "reactstrap";

import MainBlogSection from "./MainBlogSection.js";

const DashboardContainer__ = (props) => {
  return (
    <Col md="9">
      <MainBlogSection posts={props.posts} />
    </Col>
  );
};

const mapStateToProps = (state) => ({
  posts: state.post.mostPopularPosts,
});

export default connect(mapStateToProps, null)(DashboardContainer__);
