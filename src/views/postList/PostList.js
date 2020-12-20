import React from "react";
import { connect } from "react-redux";
import DataTableContainer from "../../container/Table/index.js";
import {
  getPostListDataTable,
  deletePost,
} from "../../core/redux/actions/post.action.js";

const PostList = ({ ...props }) => {
  props.getPostListDataTable();

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
});

const mapDispatchToProps = {
  getPostListDataTable,
  deletePost,
};

export default connect(mapStateToProps, mapDispatchToProps)(PostList);
