import React from "react";
import { connect } from "react-redux";
import FormContainer from "../../container/Form/index.js";
import {
  // getPostListDataTable,
  createNewPost,
} from "../../core/redux/actions/post.action.js";

const PostForm = ({ ...props }) => {
  //   useEffect(() => {
  //     if (props.loading) {
  //       props.getPostListDataTable();
  //     }
  //   });

  return (
    <FormContainer
      initialValue={{ title: "", description: "", category: "" }}
      data={{ title: "", category: "", imageFile: "", description: "" }}
      state={{ title: "", category: "", imageFile: "", description: "" }}
      pageTitle={"Post Create Form"}
      formType={"post"}
      {...props}
    />
  );
};

const mapStateToProps = (state) => ({
  ui: state.ui,
  loading: state.post.loading,
  user: state.user,
  categoryList: state.category.categoryList,
});

const mapDispatchToProps = {
  // getPostListDataTable,
  createNewPost,
};

export default connect(mapStateToProps, mapDispatchToProps)(PostForm);
