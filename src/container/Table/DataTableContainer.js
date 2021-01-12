import React, { Fragment, useEffect, useState } from "react";
import { Card, CardBody, Row, Col } from "reactstrap";
import PostListTable from "./PostList/PostListTable.js";
import TableLoader from "../../components/ContentLoader/Table/TableLoader.js";

const DataTableContainer__ = ({
  data,
  type,
  pageTitle,
  tableHeader,
  ...props
}) => {
  let table;

  let timer;

  const [timerCount, setTimerCount] = useState(3000);

  if (!props.loading && timerCount === 3000) {
    timer = setTimeout(() => {
      setTimerCount(0);
    }, 3000);
  }

  switch (type) {
    case "post":
      table = (
        <PostListTable data={data} tableHeader={tableHeader} {...props} />
      );
      break;

    default:
      break;
  }

  // to stop the warning of calling setState of unmounted component
  useEffect(() => {
    return () => {
      clearTimeout(timer);
    };
  }, [timer, timerCount]);

  return (
    <Fragment>
      <Col md={8} className="ml-auto mr-auto">
        <h2 className="text-center">{pageTitle}</h2>
        <p className="text-center">
          A powerful table that display and filter every data of your.
        </p>
        <p className="text-center">
          It is a highly flexible tool, based upon the foundations of
          progressive enhancement on which you can control advanced interaction.
        </p>
      </Col>
      {timerCount > 0 ? (
        <TableLoader />
      ) : (
        <Row className="mt-5">
          <Col xs={12} md={12}>
            <Card>
              <CardBody>{table}</CardBody>
            </Card>
          </Col>
        </Row>
      )}
    </Fragment>
  );
};

export default DataTableContainer__;
// export default connect(mapStateToProps, null)(DataTableContainer__);
