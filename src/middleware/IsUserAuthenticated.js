import React from "react";

// reactstrap components
import {
  Button,
  // Collapse,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  UncontrolledDropdown,
  // InputGroup,
  NavLink,
  // Nav,
} from "reactstrap";

const IsUserAuthenticated__ = ({ user, ...props }) => {
  return (
    <>
      {user.authenticated ? (
        <>
          <UncontrolledDropdown nav>
            <DropdownToggle caret color="default" data-toggle="dropdown" nav>
              <div className="notification d-none d-lg-block d-xl-block" />
              <i className="tim-icons icon-simple-add" />
              <p className="d-lg-none">Add</p>
            </DropdownToggle>
            <DropdownMenu className="dropdown-navbar" right tag="ul">
              <NavLink tag="li" onClick={() => console.log(props.user)}>
                <DropdownItem className="nav-item">
                  Mike John responded to your email
                </DropdownItem>
              </NavLink>
              <NavLink tag="li">
                <DropdownItem className="nav-item">
                  You have 5 more tasks
                </DropdownItem>
              </NavLink>
              <NavLink tag="li">
                <DropdownItem className="nav-item">
                  Your friend Michael is in town
                </DropdownItem>
              </NavLink>
              <NavLink tag="li">
                <DropdownItem className="nav-item">
                  Another notification
                </DropdownItem>
              </NavLink>
              <NavLink tag="li">
                <DropdownItem className="nav-item">Another one</DropdownItem>
              </NavLink>
            </DropdownMenu>
          </UncontrolledDropdown>
          <UncontrolledDropdown nav>
            <DropdownToggle
              caret
              color="default"
              data-toggle="dropdown"
              nav
              onClick={(e) => e.preventDefault()}
            >
              <div className="photo">
                <img
                  alt={user.credential.username}
                  src={user.credential.avatar}
                />
              </div>
              &nbsp;{user.credential.username}&nbsp;&nbsp;&nbsp;&nbsp;
              <b className="caret d-none d-lg-block d-xl-block" />
              <p className="d-lg-none">Log out</p>
            </DropdownToggle>
            <DropdownMenu className="dropdown-navbar" right tag="ul">
              <NavLink tag="li">
                <DropdownItem className="nav-item">Profile</DropdownItem>
              </NavLink>
              <NavLink tag="li">
                <DropdownItem className="nav-item">Settings</DropdownItem>
              </NavLink>
              <DropdownItem divider tag="li" />
              <NavLink
                tag="li"
                onClick={(e) => {
                  e.preventDefault();

                  props.logout();
                }}
              >
                <DropdownItem className="nav-item">Log out</DropdownItem>
              </NavLink>
            </DropdownMenu>
          </UncontrolledDropdown>
        </>
      ) : (
        <>
          <NavLink href="/auth/login">
            <Button className="btn-default animation-on-hover" color="success">
              Login
            </Button>
          </NavLink>
          <NavLink href="/auth/register">
            <Button className="btn-default animation-on-hover" color="success">
              Register
            </Button>
          </NavLink>
        </>
      )}
    </>
  );
};

export default IsUserAuthenticated__;
