import React, { useEffect } from "react";
import { connect } from "react-redux";
import { getLatestPostWithPagination } from "../../core/redux/actions/post.action.js";
import HomepageContainer from "../../container/Homepage/index.js";

const Homepage = ({ ...props }) => {
  useEffect(() => {
    if (props.loading) {
      /**
       * @params latest
       * @params asc
       * @params limit per page
       * @params current page
       */
      props.getLatestPostWithPagination(true, false, 100, 1);
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
  getLatestPostWithPagination,
};

export default connect(mapStateToProps, mapDispatchToProps)(Homepage);
