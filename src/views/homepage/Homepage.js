import React, { useEffect } from "react";
import { connect } from "react-redux";
import {
  // getMostPopularPosts,
  getLatestPost,
  getPostsWithPagination,
} from "../../core/redux/actions/post.action.js";
import HomepageContainer from "../../container/Homepage/index.js";

const Homepage = ({ ...props }) => {
  // props.getLatestPost(4, true);

  useEffect(() => {
    if (props.loading) {
      props.getPostsWithPagination(10, 1);

      // console.log(props.categoryList);
    }
  });

  return <HomepageContainer {...props} />;
};

const mapStateToProps = (state) => ({
  loading: state.post.loading,
  posts: state.post.posts,
  categoryList: state.category.categoryList,
});

const mapDispatchToProps = {
  getLatestPost,
  getPostsWithPagination,
};

export default connect(mapStateToProps, mapDispatchToProps)(Homepage);
