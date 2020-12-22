import React, { useState, useEffect } from "react";
import classNames from "classnames";
import { Button } from "reactstrap";

// react component used to create sweet alerts
// import Swal from "sweetalert2";
import ReactBSAlert from "react-bootstrap-sweetalert";

const PostListAction__ = ({ ...props }) => {
  const [alert, setAlert] = useState(null);
  /**
   * De-construct neccessary data and function from props
   */
  const { data, history } = props;

  const hideAlert = () => {
    setAlert(null);
  };

  const handleEdit = (id) => {
    props.getPostForEditing(id, history);
  };

  const handleDelete = (item) => {
    props.warningWithConfirmAndCancelMessage();
  };

  const warningWithConfirmAndCancelMessage = () => {
    setAlert(
      <ReactBSAlert
        warning
        style={{ display: "block", marginTop: "-100px" }}
        title="Are you sure?"
        onConfirm={() => successDelete()}
        onCancel={() => cancelDetele()}
        confirmBtnBsStyle="success animation-on-hover"
        cancelBtnBsStyle="danger animation-on-hover"
        confirmBtnText="Yes, delete it!"
        cancelBtnText="Cancel"
        showCancel
        btnSize=""
      >
        You will not be able to recover this post!
      </ReactBSAlert>
    );
  };

  const successDelete = () => {
    setAlert(
      <ReactBSAlert
        success
        style={{ display: "block", marginTop: "-100px" }}
        title="Deleted!"
        onConfirm={() => hideAlert()}
        onCancel={() => hideAlert()}
        confirmBtnBsStyle="success"
        btnSize=""
        timer={2000}
      >
        Your post has been deleted permanently!
      </ReactBSAlert>
    );
  };

  const cancelDetele = () => {
    setAlert(
      <ReactBSAlert
        info
        style={{ display: "block", marginTop: "-100px" }}
        title="Cancelled"
        onConfirm={() => hideAlert()}
        onCancel={() => hideAlert()}
        confirmBtnBsStyle="success"
        btnSize=""
      >
        Your post is safe :)
      </ReactBSAlert>
    );
  };

  useEffect(() => {
    return function cleanup() {
      var id = window.setTimeout(null, 0);
      while (id--) {
        window.clearTimeout(id);
      }
    };
  });

  return (
    <div className="actions-right">
      {alert}
      {/* use this button to add a edit kind of action */}
      <Button
        onClick={(e) => {
          e.preventDefault();
          handleEdit(data._id);
        }}
        color="info"
        size="sm"
        className={classNames("btn-icon btn-link like")}
      >
        <i className="tim-icons icon-pencil" />
      </Button>{" "}
      {/* use this button to remove the data row */}
      <Button
        onClick={() => warningWithConfirmAndCancelMessage(data)}
        color="danger"
        size="sm"
        className={classNames("btn-icon btn-link like")}
      >
        <i className="tim-icons icon-simple-remove" />
      </Button>{" "}
    </div>
  );
};

export default PostListAction__;
