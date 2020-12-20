import React, { useEffect } from "react";
import { connect } from "react-redux";
import DataTableContainer from "../../container/Table/index.js";
import FormContainer from "../../container/Form/index.js";
import { getPostListDataTable } from "../../core/redux/actions/post.action.js";

const PostForm = ({ ...props }) => {
  //   useEffect(() => {
  //     if (props.loading) {
  //       props.getPostListDataTable();
  //     }
  //   });

  return (
    <FormContainer
      initialValue={{ title: "", description: "", category: "" }}
      pageTitle={"Post Create Form"}
      type={"post"}
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
};

export default connect(null, null)(PostForm);
