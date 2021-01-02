import React, { useState, useEffect, useRef } from "react";

import {
  // Badge,
  Button,
  // ButtonGroup,
  Card,
  CardHeader,
  CardBody,
  // CardFooter,
  // CardTitle,
  // CardImg,
  // CardText,
  // ListGroup,
  // ListGroupItem,
  // DropdownToggle,
  // DropdownMenu,
  // DropdownItem,
  // UncontrolledDropdown,
  // Label,
  // FormGroup,
  // Input,
  // Progress,
  // Table,
  Row,
  Col,
  Collapse,
  // UncontrolledTooltip,
} from "reactstrap";

// javascript plugin used to create scrollbars on windows
// import PerfectScrollbar from "perfect-scrollbar";

// var perfectScrollbar;

const SidebarLeft__ = (props) => {
  const sidebarRightRef = useRef(null);

  const [openedCollapses, setOpenedCollapses] = useState([]);

  const handleCollapseToggle = (collapse) => {
    let openedCollapse = openedCollapses;

    if (openedCollapse.includes(collapse)) {
      setOpenedCollapses([]);
    } else {
      setOpenedCollapses([collapse]);
    }
  };

  useEffect(() => {
    let innerMainPanelRef = sidebarRightRef;
    // if (navigator.platform.indexOf("Win") > -1) {
    //   perfectScrollbar = new PerfectScrollbar(sidebarRightRef.current, {
    //     suppressScrollX: true,
    //     suppressScrollY: false,
    //   });
    // }
    // return function cleanup() {
    //   // we need to destroy the false scrollbar when we navigate
    //   // to a page that doesn't have this component rendered
    //   if (navigator.platform.indexOf("Win") > -1) {
    //     perfectScrollbar.destroy();
    //   }
    // };
  }, [openedCollapses]);

  return (
    <div className="col-md-3 d-none d-md-block" style={{ position: "relative" }}>
      <Row style={{ position: "fixed", width: "330px" }}>
        <Col md="12" xs="12">
          <div
            style={{ backgroundColor: "#393e46", borderRadius: "10px" }}
            aria-multiselectable={false}
            className="card-collapse"
            id="accordion"
            role="tablist"
          >
            <Card style={{ width: "100%" }}>
              <a
                style={{ color: "white", fontSize: "20px" }}
                aria-expanded={openedCollapses.includes("categories")}
                href="#pablo"
                data-parent="#accordion"
                data-toggle="collapse"
                onClick={(e) => {
                  e.preventDefault();
                  handleCollapseToggle("categories");
                }}
              >
                <CardHeader role="tab" style={{ marginBottom: "7px" }}>
                  Categories{" "}
                  <i className="tim-icons icon-minimal-down pull-right mt-1" />
                </CardHeader>
              </a>
              <Collapse
                role="tabpanel"
                isOpen={openedCollapses.includes("categories")}
              >
                <CardBody>
                  <Button color="primary" size="sm">
                    Web Development
                  </Button>
                  <Button color="primary" size="sm">
                    AI
                  </Button>
                </CardBody>
              </Collapse>
            </Card>
          </div>
        </Col>

        <Col md="12" xs="12" style={{ marginTop: "20px" }}>
          <div
            style={{ backgroundColor: "#393e46", borderRadius: "10px" }}
            aria-multiselectable={false}
            className="card-collapse"
            id="top-author-accordion"
            role="tablist"
          >
            <Card style={{ width: "100%" }}>
              <a
                style={{ fontSize: "20px" }}
                aria-expanded={openedCollapses.includes("topAuthors")}
                href="#pablo"
                data-parent="#top-author-accordion"
                data-toggle="collapse"
                onClick={(e) => {
                  e.preventDefault();
                  handleCollapseToggle("topAuthors");
                }}
              >
                <CardHeader role="tab" style={{ marginBottom: "7px" }}>
                  Top Authors{" "}
                  <i className="tim-icons icon-minimal-down pull-right mt-1" />
                </CardHeader>
              </a>
              <Collapse
                role="tabpanel"
                isOpen={openedCollapses.includes("topAuthors")}
              >
                <CardBody style={{ color: "black" }}>
                  Anim pariatur cliche reprehenderit, enim eiusmod high life
                  accusamus terry richardson ad squid. 3 wolf moon officia aute,
                  non cupidatat skateboard dolor brunch. Food truck quinoa
                  nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt
                  aliqua put a bird on it squid single-origin coffee nulla
                  assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft
                  beer labore wes anderson cred nesciunt sapiente ea proident.
                  Ad vegan excepteur butcher vice lomo. Leggings occaecat craft
                  beer farm-to-table, raw denim aesthetic synth nesciunt you
                  probably haven't heard of them accusamus labore sustainable
                  VHS.
                </CardBody>
              </Collapse>
            </Card>
          </div>
        </Col>
      </Row>
    </div>
  );
};

export default SidebarLeft__;
