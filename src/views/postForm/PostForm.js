import React, { useEffect } from "react";
import { connect } from "react-redux";
import FormContainer from "../../container/Form/index.js";
import {
  // getPostListDataTable,
  createNewPost,
  updatePost,
} from "../../core/redux/actions/post.action.js";

import { isEmptyObject, isStringIncludesWord } from "../../utilities/index.js";

const PostForm = ({ ...props }) => {
  let defaultTitle = "Post Create Form";

  let initialFormData = {
    title: "",
    category: "",
    imageFile: "",
    description: "",
  };

  let initialFormState = {
    title: "",
    category: "",
    imageFile: "",
    description: "",
  };

  if (
    !isEmptyObject(props.post) &&
    isStringIncludesWord(props.location.pathname, "edit")
  ) {
    defaultTitle = "Editing post";

    initialFormData = {
      id: props.post._id,
      title: props.post.title,
      category: props.post.category.slug,
      imageFile: props.post.image,
      description: props.post.description,
    };
  }

  // console.log(initialFormData);

  useEffect(() => {
    //     if (props.loading) {
    //       props.getPostListDataTable();
    //     }
  });

  return (
    <FormContainer
      data={initialFormData}
      state={initialFormState}
      pageTitle={defaultTitle}
      formType={"post"}
      {...props}
    />
  );
};

const mapStateToProps = (state) => ({
  ui: state.ui,
  user: state.user,
  // categoryList: state.category.categoryList,
  loading: state.post.loading,
  post: state.post.post,
});

const mapDispatchToProps = {
  // getPostListDataTable,
  createNewPost,
  updatePost,
};

export default connect(mapStateToProps, mapDispatchToProps)(PostForm);
