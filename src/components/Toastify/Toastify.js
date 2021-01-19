import React from "react";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const error = (message) =>
  toast(message, {
    type: "error",
    className: "custom-error-toast",
    toastId: "custom-error-toast-id",
  });

const success = (message) =>
  toast(message, {
    type: "success",
    className: "custom-success-toast",
    toastId: "custom-success-toast-id",
  });

const info = (message) =>
  toast(message, {
    type: "info",
    className: "custom-info-toast",
    toastId: "custom-info-toast-id",
  });

const CustomToastContainer = (props) => {
  return (
    <ToastContainer
      position="top-right"
      autoClose={10000}
      newestOnTop
      draggable={false}
      closeOnClick={false}
      rtl={false}
      pauseOnVisibilityChange={false}
      pauseOnHover
      className="custom-toast-container"
    />
  );
};

export { error, success, info, CustomToastContainer as ToastContainer };
