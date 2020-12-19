import React from "react";
// nodejs library that concatenates classes
import classNames from "classnames";

// reactstrap components
import {
  Button,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  UncontrolledDropdown,
  NavLink,
} from "reactstrap";

const IsUserAuthenticated__ = ({ user, ...props }) => {
  return (
    <>
      {user.authenticated ? (
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
      ) : (
        <>
          <NavLink href="/auth/login">
            <Button className="btn-default" color="primary">
              Login
            </Button>
          </NavLink>
          <NavLink href="/auth/register">
            <Button className="btn-default" color="primary">
              Register
            </Button>
          </NavLink>
        </>
      )}
    </>
  );
};

export default IsUserAuthenticated__;
