import React from "react";
import { connect } from "react-redux";
import {
  getMostPopularPosts,
  getLatestPost,
  // getPostsWithPagination,
} from "../../core/redux/actions/post.action.js";
import HomepageContainer from "../../container/Homepage/index.js";

const Homepage = ({ ...props }) => {
  props.getMostPopularPosts(4, false);

  props.getLatestPost(4, true);

  return <HomepageContainer />;
};

const mapDispatchToProps = {
  getMostPopularPosts,
  getLatestPost,
  // getPostsWithPagination,
};

export default connect(null, mapDispatchToProps)(Homepage);
