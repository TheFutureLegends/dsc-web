import React, { useEffect } from "react";
import { connect } from "react-redux";
import FormContainer from "../../container/Form/FormContainer.js";
import {
  // getPostListDataTable,
  createNewPost,
  updatePost,
} from "../../core/redux/actions/post.action.js";

import { isEmptyObject, isStringIncludesWord } from "../../utilities/index.js";

const PostForm = ({ ...props }) => {
  let defaultTitle = "Post Create Form";

  let categoryOptions = [];

  props.categoryList.forEach((value, index) => {
    categoryOptions.push({
      value: value.slug,
      label: value.title,
    });
  });

  let initialFormData = {
    title: "",
    category: {
      value: "",
      label: "",
    },
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
      category: {
        value: props.post.category.slug,
        label: props.post.category.title,
      },
      imageFile: props.post.image,
      description: props.post.description,
    };
  }

  useEffect(() => {
    return () => {};
  }, []);

  return (
    <FormContainer
      data={initialFormData}
      state={initialFormState}
      categoryOptions={categoryOptions}
      pageTitle={defaultTitle}
      formType={"post"}
      {...props}
    />
  );
};

const mapStateToProps = (state) => ({
  ui: state.ui,
  user: state.user,
  categoryList: state.category.categoryList,
  loading: state.post.loading,
  post: state.post.post,
});

const mapDispatchToProps = {
  // getPostListDataTable,
  createNewPost,
  updatePost,
};

export default connect(mapStateToProps, mapDispatchToProps)(PostForm);
