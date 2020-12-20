import React from "react";
import { connect } from "react-redux";
import { useHistory } from "react-router-dom";
import LoginContainer from "../../container/Login/index.js";
import { loginUser } from "../../core/redux/actions/user.action.js";

const Login = ({ ...props }) => {
  const history = useHistory();

  return <LoginContainer history={history} {...props} />;
};

const mapStateToProps = (state) => ({
  ui: state.ui,
  user: state.user,
});

const mapDispatchToProps = {
  loginUser,
};

export default connect(mapStateToProps, mapDispatchToProps)(Login);
