import React, { useEffect, useState } from "react";
import classNames from "classnames";
import {
  Card,
  CardBody,
  CardHeader,
  CardTitle,
  Row,
  Col,
  Button,
} from "reactstrap";

import ReactTable from "../../components/ReactTable/ReactTable.js";

import {
  isEmptyArray,
  getSubString,
  capitalizeFirstLetter,
} from "../../utilities/index.js";

import PostListAction from "./PostList/PostListAction.js";

/**
 * @param {Array} columns
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

const createData = (data, type = "post", { ...props }) => {
  let action;

  switch (type) {
    case "post":
      action = <PostListAction {...props} />;
      break;

    default:
      break;
  }

  let result = [];

  if (!isEmptyArray(data)) {
    data.forEach((value, index) => {
      result.push({
        id: value._id,
        title: getSubString(value.title, 0, 20),
        description: getSubString(value.description, 0, 200),
        category: value.category.title,
        actions: action,
      });
    });
  }

  return result;
};

const DataTable = ({ data, type, pageTitle, tableHeader, ...props }) => {
  const [columns, setColumns] = useState(createTableHeader(tableHeader));

  const [dataRows, setDataRows] = useState(
    createData(data, type, { ...props })
  );

  useEffect(() => {
    console.log(data);
  }, [dataRows]);
  return (
    <>
      <div className="content">
        <Col md={8} className="ml-auto mr-auto">
          <h2 className="text-center">{pageTitle}</h2>
          <p className="text-center">
            A powerful table that display and filter every data of your.
          </p>
          <p className="text-center">
            It is a highly flexible tool, based upon the foundations of
            progressive enhancement on which you can control advanced
            interaction.
          </p>
        </Col>
        <Row className="mt-5">
          <Col xs={12} md={12}>
            <Card>
              {/* <CardHeader>
                <CardTitle tag="h4">React Table</CardTitle>
              </CardHeader> */}
              <CardBody>
                <ReactTable
                  data={dataRows}
                  filterable
                  resizable={false}
                  columns={columns}
                  defaultPageSize={10}
                  showPaginationTop
                  showPaginationBottom={false}
                />
              </CardBody>
            </Card>
          </Col>
        </Row>
      </div>
    </>
  );
};

export default DataTable;
