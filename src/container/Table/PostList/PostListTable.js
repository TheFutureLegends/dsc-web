import React, { Fragment, useEffect, useState } from "react";
import { connect } from "react-redux";
import classNames from "classnames";
import { Button } from "reactstrap";
// react component used to create sweet alerts
// import Swal from "sweetalert2";
import ReactBSAlert from "react-bootstrap-sweetalert";

import ReactTable from "../../../components/ReactTable/ReactTable.js";

import {
  getSubString,
  capitalizeFirstLetter,
} from "../../../utilities/index.js";

/**
 * @param {Array} tableHeader
 * @return {Array} result
 */
const createTableHeader = (tableHeader) => {
  let result = [];

  tableHeader.forEach((value, index) => {
    result.push({
      Header: capitalizeFirstLetter(value),
      accessor: value.toLowerCase(),
    });
  });

  /**
   * Push default action tableHeader
   */
  result.push({
    Header: "Actions",
    accessor: "actions",
    sortable: false,
    filterable: false,
  });

  return result;
};

const PostListTable__ = ({ data, tableHeader, ...props }) => {
  const [isLoading, setIsLoading] = useState(true);

  const [alert, setAlert] = useState(null);

  // eslint-disable-next-line no-unused-vars
  const [columns, setColumns] = useState(createTableHeader(tableHeader));

  const mapData = (item) => {
    return item.map((value, key) => {
      return {
        _id: value._id,
        title: getSubString(value.title, 0, 20),
        description: getSubString(value.description, 0, 200),
        category: value.category.title,
        actions: (
          // we've added some custom button actions
          <div className="actions-right">
            {/* use this button to edit data */}
            <Button
              onClick={() => {
                props.getPostForEditing(value._id, props.history);
              }}
              color="info"
              size="sm"
              className={classNames("btn-icon btn-link like")}
            >
              <i className="tim-icons icon-pencil" />
            </Button>{" "}
            {/* use this button to remove the data row */}
            <Button
              onClick={() => {
                warningWithConfirmAndCancelMessage(value);
              }}
              color="danger"
              size="sm"
              className={classNames("btn-icon btn-link like")}
            >
              <i className="tim-icons icon-simple-remove" />
            </Button>{" "}
          </div>
        ),
      };
    });
  };

  const setDataRows = () => {
    if (isLoading) {
      setRows(mapData(data));

      setIsLoading(false);
    }
  };

  const [rows, setRows] = useState([]);

  const handleDelete = (item) => {
    props.deletePost(item, props.history);

    setIsLoading(true);
  };

  const hideAlert = () => {
    setAlert(null);
  };

  const warningWithConfirmAndCancelMessage = (item) => {
    setAlert(
      <ReactBSAlert
        warning
        style={{ display: "block", marginTop: "-100px" }}
        title="Are you sure?"
        onConfirm={() => successDelete(item)}
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

  const successDelete = (item) => {
    setAlert(
      <ReactBSAlert
        success
        style={{ display: "block", marginTop: "-100px" }}
        title="Deleted!"
        onConfirm={() => {
          handleDelete(item);

          hideAlert();
        }}
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
        Your post is extremely safe :)
      </ReactBSAlert>
    );
  };

  // to stop the warning of calling setState of unmounted component
  useEffect(() => {
    setDataRows();

    return function cleanup() {
      var id = window.setTimeout(null, 0);
      while (id--) {
        window.clearTimeout(id);
      }
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [rows, isLoading]);

  return (
    <Fragment>
      {alert}
      <ReactTable
        data={rows}
        filterable
        resizable={false}
        columns={columns}
        defaultPageSize={10}
        showPaginationTop
        showPaginationBottom={false}
      />
    </Fragment>
  );
};

const mapStateToProps = (state) => ({
  postList: state.post.postList,
  loading: state.ui.loading,
});

// export default PostListTable__;
export default connect(mapStateToProps, null)(PostListTable__);
