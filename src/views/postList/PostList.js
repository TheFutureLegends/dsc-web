import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import DataTableContainer from "../../container/Table/DataTableContainer.js";
import {
  getPostListDataTable,
  getPostForEditing,
  deletePost,
} from "../../core/redux/actions/post.action.js";

const PostList = ({ ...props }) => {
  const [isLoading, setIsLoading] = useState(true);

  const fetchPostsDataTable = () => {
    if (isLoading) {
      props.getPostListDataTable();

      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchPostsDataTable();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isLoading]);

  return (
    <DataTableContainer
      data={props.postList}
      type={"post"}
      pageTitle={"Post List Table"}
      tableHeader={["Title", "Description", "Category"]}
      {...props}
    />
  );
};

const mapStateToProps = (state) => ({
  postList: state.post.postList,
  loading: state.ui.loading,
});

const mapDispatchToProps = {
  getPostListDataTable,
  getPostForEditing,
  deletePost,
};

export default connect(mapStateToProps, mapDispatchToProps)(PostList);
