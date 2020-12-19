import React from "react";
import { useHistory } from "react-router-dom";
import LoginContainer from "../../container/Login/index.js";

const Login = ({ ...props }) => {
  const history = useHistory();

  return <LoginContainer history={history} />;
};

export default Login;
