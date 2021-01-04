import React from "react";
import { connect } from "react-redux";
import RegisterContainer from "../../container/Register/RegisterContainer.js";
import { signupUser } from "../../core/redux/actions/user.action.js";

const Register = ({ ...props }) => {
  return <RegisterContainer {...props} />;
};

const mapStateToProps = (state) => ({
  ui: state.ui,
  user: state.user,
});

const mapDispatchToProps = {
  signupUser,
};

export default connect(mapStateToProps, mapDispatchToProps)(Register);
