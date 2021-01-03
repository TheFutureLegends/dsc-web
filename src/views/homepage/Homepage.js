import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { getLatestPostWithPagination } from "../../core/redux/actions/post.action.js";
import HomepageContainer from "../../container/Homepage/index.js";

const Homepage = ({ ...props }) => {
  const [isLoading, setIsLoading] = useState(true);

  const [hasMoreItems, sethasMoreItems] = useState(true);

  const getLatestPost = () => {
    if (isLoading) {
      /**
       * @params latest
       * @params asc
       * @params limit per page
       * @params current page
       */
      props.getLatestPostWithPagination(true, false, 100, 1);

      setIsLoading(false);
    }
  };

  useEffect(() => {
    getLatestPost();

    return () => {};
  }, [isLoading]);

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
