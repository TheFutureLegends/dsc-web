import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
// import PerfectScrollbar from "react-perfect-scrollbar";

import AdminLayout from "./layouts/Admin/Admin.js";
import GeneralLayout from "./layouts/General/General.js";
// import AuthLayout from "./layouts/Auth/Auth.js";
// import RTLLayout from "layouts/RTL/RTL.js";

const App = () => {
  return (
    <BrowserRouter>
      <Switch>
        {/* <Route path="/auth" render={(props) => <AuthLayout {...props} />} />
      <Route path="/admin" render={(props) => <AdminLayout {...props} />} />
      <Route path="/rtl" render={(props) => <RTLLayout {...props} />} />
      <Redirect from="/" to="/admin/dashboard" /> */}
        {/* <Route render={(props) => <AuthLayout {...props} />}></Route> */}
        {/* <Route path="/auth" render={(props) => <AuthLayout {...props} />} /> */}
        <Route
          path="/control-panel"
          render={(props) => <AdminLayout {...props} />}
        />
        <Route
          // exact
          path="/"
          render={(props) => <GeneralLayout {...props} />}
        />

        {/* <Redirect from="/" to="/dsc" /> */}
      </Switch>
    </BrowserRouter>
  );
};

export default App;
