import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import DataTableContainer from "../../container/Table/index.js";
import {
  getPostListDataTable,
  getPostForEditing,
  deletePost,
} from "../../core/redux/actions/post.action.js";

const PostList = ({ ...props }) => {
  useEffect(() => {
    if (props.loading) {
      props.getPostListDataTable();
    }
  });

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
  loading: state.post.loading,
});

const mapDispatchToProps = {
  getPostListDataTable,
  getPostForEditing,
  deletePost,
};

export default connect(mapStateToProps, mapDispatchToProps)(PostList);
