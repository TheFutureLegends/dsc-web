import React from "react";
// import { connect } from "react-redux";
// import {
//   getMostPopularPosts,
//   getLatestPost,
//   // getPostsWithPagination,
// } from "../../core/redux/actions/post.action.js";
import DashboardContainer from "../../container/Dashboard/index.js";

const Dashboard = ({ ...props }) => {
  return <DashboardContainer {...props} />;
};

export default Dashboard;
