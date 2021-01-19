import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
// nodejs library that concatenates classes
import classNames from "classnames";

// reactstrap components
import {
  Button,
  Collapse,
  // DropdownToggle,
  // DropdownMenu,
  // DropdownItem,
  // UncontrolledDropdown,
  Input,
  InputGroup,
  // NavbarBrand,
  Navbar,
  // NavLink,
  Nav,
  Container,
  Modal,
  UncontrolledTooltip,
} from "reactstrap";

// cookie component
// import Cookie from "universal-cookie";

// middleware
import IsUserAuthenticated from "../../middleware/IsUserAuthenticated.js";

// logout func
import { logoutUser } from "../../core/redux/actions/user.action.js";

// const cookies = new Cookie();

const AdminNavbar__ = ({ ...props }) => {
  // const [userState, setUserState] = useState(props.user);

  const [collapseOpen, setCollapseOpen] = useState(false);

  const [modalSearch, setModalSearch] = useState(false);

  const [color, setColor] = useState("navbar-transparent");

  useEffect(() => {
    window.addEventListener("resize", updateColor);
    return function cleanup() {
      window.removeEventListener("resize", updateColor);
    };
  });

  // function that adds color white/transparent to the navbar on resize (this is for the collapse)
  const updateColor = () => {
    if (window.innerWidth < 993 && collapseOpen) {
      setColor("bg-white");
    } else {
      setColor("navbar-transparent");
    }
  };

  // this function opens and closes the collapse on small devices
  const toggleCollapse = () => {
    if (collapseOpen) {
      setColor("navbar-transparent");
    } else {
      setColor("bg-white");
    }
    setCollapseOpen(!collapseOpen);
  };

  // this function is to open the Search modal
  const toggleModalSearch = () => {
    setModalSearch(!modalSearch);
  };

  // this function will log user out
  const handleLogout = () => {
    props.logoutUser();
  };

  return (
    <>
      <Navbar
        className={classNames("navbar-absolute", {
          [color]: props.location.pathname.indexOf("full-screen-map") === -1,
        })}
        expand="lg"
      >
        <Container fluid>
          <div className="navbar-wrapper">
            <div className="navbar-minimize d-inline">
              <Button
                className="minimize-sidebar btn-just-icon"
                color="link"
                id="tooltip209599"
                onClick={props.handleMiniClick}
              >
                <i className="tim-icons icon-align-center visible-on-sidebar-regular" />
                <i className="tim-icons icon-bullet-list-67 visible-on-sidebar-mini" />
              </Button>
              <UncontrolledTooltip
                delay={0}
                target="tooltip209599"
                placement="right"
              >
                Sidebar toggle
              </UncontrolledTooltip>
            </div>
            <div
              className={classNames("navbar-toggle d-inline", {
                toggled: props.sidebarOpened,
              })}
            >
              <button
                className="navbar-toggler"
                type="button"
                onClick={props.toggleSidebar}
              >
                <span className="navbar-toggler-bar bar1" />
                <span className="navbar-toggler-bar bar2" />
                <span className="navbar-toggler-bar bar3" />
              </button>
            </div>
            {/* <NavbarBrand href="#pablo" onClick={(e) => e.preventDefault()}>
              {props.brandText}
            </NavbarBrand> */}
          </div>
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navigation"
            aria-expanded="false"
            aria-label="Toggle navigation"
            onClick={toggleCollapse}
          >
            <span className="navbar-toggler-bar navbar-kebab" />
            <span className="navbar-toggler-bar navbar-kebab" />
            <span className="navbar-toggler-bar navbar-kebab" />
          </button>
          <Collapse navbar isOpen={collapseOpen}>
            <Nav className="ml-auto" navbar>
              {/* <InputGroup className="search-bar" tag="li">
                <Button
                  color="link"
                  data-target="#searchModal"
                  data-toggle="modal"
                  id="search-button"
                  onClick={toggleModalSearch}
                >
                  <i className="tim-icons icon-zoom-split" />
                  <span className="d-lg-none d-md-block">Search</span>
                </Button>
              </InputGroup> */}
              <IsUserAuthenticated
                user={props.user}
                logout={handleLogout}
                {...props}
              />
              <li className="separator d-lg-none" />
            </Nav>
          </Collapse>
        </Container>
      </Navbar>
      {/* <Modal
        modalClassName="modal-search"
        isOpen={modalSearch}
        toggle={toggleModalSearch}
      >
        <div className="modal-header">
          <Input id="inlineFormInputGroup" placeholder="SEARCH" type="text" />
          <button
            aria-label="Close"
            className="close"
            data-dismiss="modal"
            type="button"
            onClick={toggleModalSearch}
          >
            <i className="tim-icons icon-simple-remove" />
          </button>
        </div>
      </Modal> */}
    </>
  );
};

const mapStateToProps = (state) => ({
  user: state.user,
});

const mapDispatchToProps = {
  logoutUser,
};

export default connect(mapStateToProps, mapDispatchToProps)(AdminNavbar__);
