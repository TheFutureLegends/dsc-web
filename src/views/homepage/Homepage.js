import React, { Fragment, useEffect, useState } from "react";
import { connect } from "react-redux";
import { getLatestPostWithPagination } from "../../core/redux/actions/post.action.js";

import GridLoader from "../../components/ContentLoader/Grid/GridLoader.js";
import HomepageContainer from "../../container/Homepage/HomepageContainer.js";

import useInfiniteScroll from "../../hooks/useInfiniteScroll.js";

const Homepage = ({ ...props }) => {
  let timer;

  const fetchMoreListItems = () => {
    if (page <= props.postsWithPagination.totalPages) {
      setTimeout(() => {
        props.getLatestPostWithPagination(true, false, itemPerPage, page);

        setIsFetching(false);
      }, 2000);

      setPage(page + 1);
    } else {
      setTimeout(() => {
        setHasNextPage(false);
      }, 2000);
    }
  };

  const [page, setPage] = useState(1);

  // eslint-disable-next-line no-unused-vars
  const [itemPerPage, setItemPerPage] = useState(6);

  const [timerCount, setTimerCount] = useState(3000);

  const [isLoading, setIsLoading] = useState(true);

  const [isFetching, setIsFetching] = useInfiniteScroll(fetchMoreListItems);

  const [hasNextPage, setHasNextPage] = useState(true);

  const getLatestPost = () => {
    if (isLoading) {
      /**
       * @params latest
       * @params asc
       * @params item per page
       * @params current page
       */
      props.getLatestPostWithPagination(true, false, itemPerPage, page);

      setPage(page + 1);

      setIsLoading(false);
    }
  };

  if (!props.loading && timerCount === 3000) {
    timer = setTimeout(() => {
      setTimerCount(0);
    }, 3000);
  }

  useEffect(() => {
    getLatestPost();

    return () => {
      clearTimeout(timer);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [
    isFetching,
    isLoading,
    hasNextPage,
    timerCount,
    itemPerPage,
    page,
    timer,
  ]);

  return (
    <Fragment>
      {timerCount === 3000 ? (
        <GridLoader height={1000} {...props} />
      ) : (
        <HomepageContainer {...props} />
      )}

      {timerCount !== 3000 && hasNextPage && isFetching && (
        <GridLoader height={1000} {...props} />
      )}
    </Fragment>
  );
  // return <HomepageContainer {...props} />;
};

const mapStateToProps = (state) => ({
  loading: state.ui.loading,
  postsWithPagination: state.post.postsWithPagination,
  postsToDisplay: state.post.postsToDisplay,
  categoryList: state.category.categoryList,
});

const mapDispatchToProps = {
  getLatestPostWithPagination,
};

export default connect(mapStateToProps, mapDispatchToProps)(Homepage);
