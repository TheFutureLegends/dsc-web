import React, { useState, useRef, useEffect } from "react";
import { Route, Switch, Redirect, useLocation } from "react-router-dom";
import { connect } from "react-redux";
// javascript plugin used to create scrollbars on windows
import PerfectScrollbar from "perfect-scrollbar";
// react plugin for creating notifications over the dashboard
import NotificationAlert from "react-notification-alert";

// core components
import AdminNavbar from "../../components/Navbars/AdminNavbar.js";
import Footer from "../../components/Footer/Footer.js";
import Sidebar from "../../components/Sidebar/Sidebar.js";
import SidebarRight from "../../components/Sidebar_Right/Sidebar_Right.js";
import { Row } from "reactstrap";
// import FixedPlugin from "../../components/FixedPlugin/FixedPlugin.js";
import { IsSidebarMini } from "../../logic/fixedPlugin.js";
// import { IsContentLightMode } from "../../logic/fixedPlugin.js";
// import { cookies, authorizationCookieName } from "../../variables/cookie.js";
import { logoutUser } from "../../core/redux/actions/user.action.js";

import routes, { protectedRoutes } from "../../routes.js";

import logo from "../../assets/img/react-logo.png";

var ps;

const AuthLayout__ = (props) => {
  const [activeColor, setActiveColor] = useState("blue");

  // eslint-disable-next-line no-unused-vars
  const [sidebarMini, setSidebarMini] = useState(IsSidebarMini());

  const [opacity, setOpacity] = useState(0);

  const [sidebarOpened, setSidebarOpened] = useState(false);

  const mainPanelRef = useRef(null);

  const notificationAlertRef = useRef(null);

  const location = useLocation();

  useEffect(() => {
    document.documentElement.scrollTop = 0;
    document.scrollingElement.scrollTop = 0;
    if (mainPanelRef.current) {
      mainPanelRef.current.scrollTop = 0;
    }
  }, [location]);

  useEffect(() => {
    // If cookies has white-content && body has class white-content -> do not switch
    // If cookie has but body does not have -> switch
    // if (IsContentLightMode()) {
    //   document.body.classList.toggle("white-content");
    // }

    // if (IsSidebarMini()) {
    //   document.body.classList.toggle("sidebar-mini");
    // }

    let innerMainPanelRef = mainPanelRef;

    if (navigator.platform.indexOf("Win") > -1) {
      document.documentElement.classList.add("perfect-scrollbar-on");
      document.documentElement.classList.remove("perfect-scrollbar-off");
      ps = new PerfectScrollbar(mainPanelRef.current);
      mainPanelRef.current &&
        mainPanelRef.current.addEventListener("ps-scroll-y", showNavbarButton);
      let tables = document.querySelectorAll(".table-responsive");
      for (let i = 0; i < tables.length; i++) {
        ps = new PerfectScrollbar(tables[i]);
      }
    }

    window.addEventListener("scroll", showNavbarButton);

    return function cleanup() {
      if (navigator.platform.indexOf("Win") > -1) {
        ps.destroy();
        document.documentElement.classList.add("perfect-scrollbar-off");
        document.documentElement.classList.remove("perfect-scrollbar-on");
        innerMainPanelRef.current &&
          innerMainPanelRef.current.removeEventListener(
            "ps-scroll-y",
            showNavbarButton
          );
      }
      window.removeEventListener("scroll", showNavbarButton);
    };
  }, []);

  const showNavbarButton = () => {
    if (
      document.documentElement.scrollTop > 50 ||
      document.scrollingElement.scrollTop > 50 ||
      (mainPanelRef.current && mainPanelRef.current.scrollTop > 50)
    ) {
      setOpacity(1);
    } else if (
      document.documentElement.scrollTop <= 50 ||
      document.scrollingElement.scrollTop <= 50 ||
      (mainPanelRef.current && mainPanelRef.current.scrollTop <= 50)
    ) {
      setOpacity(0);
    }
  };

  const getRoutes = (routes) => {
    return routes.map((prop, key) => {
      if (prop.collapse) {
        return getRoutes(prop.views);
      }

      if (props.user.authenticated && prop.layout !== "/auth") {
        return <Redirect to="/" key={key} />;
      }

      if (prop.layout === "/auth") {
        return (
          <Route
            path={prop.layout + prop.path}
            component={prop.component}
            key={key}
          />
        );
      } else {
        return null;
      }
    });
  };

  const getActiveRoute = (routes) => {
    let activeRoute = "Default Brand Text";
    for (let i = 0; i < routes.length; i++) {
      if (routes[i].collapse) {
        let collapseActiveRoute = getActiveRoute(routes[i].views);
        if (collapseActiveRoute !== activeRoute) {
          return collapseActiveRoute;
        }
      } else {
        if (
          window.location.pathname.indexOf(
            routes[i].layout + routes[i].path
          ) !== -1
        ) {
          return routes[i].name;
        }
      }
    }
    return activeRoute;
  };

  // eslint-disable-next-line no-unused-vars
  const handleActiveClick = (color) => {
    setActiveColor(color);
  };

  const handleMiniClick = () => {
    let notifyMessage = "Sidebar mini ";
    if (document.body.classList.contains("sidebar-mini")) {
      setSidebarMini(false);
      notifyMessage += "deactivated...";
      // cookies.remove(sidebarMiniCookieName);
    } else {
      setSidebarMini(true);
      notifyMessage += "activated...";
      // cookies.set(sidebarMiniCookieName, "sidebar-mini", { path: "/" });
    }
    let options = {};
    options = {
      place: "tr",
      message: notifyMessage,
      type: "primary",
      icon: "tim-icons icon-bell-55",
      autoDismiss: 7,
    };
    notificationAlertRef.current.notificationAlert(options);
    document.body.classList.toggle("sidebar-mini");
  };

  const toggleSidebar = () => {
    setSidebarOpened(!sidebarOpened);
    document.documentElement.classList.toggle("nav-open");
  };

  const closeSidebar = () => {
    setSidebarOpened(false);
    document.documentElement.classList.remove("nav-open");
  };

  return (
    <div className="wrapper">
      <div className="rna-container">
        <NotificationAlert ref={notificationAlertRef} />
      </div>
      <div className="navbar-minimize-fixed" style={{ opacity: opacity }}>
        <button
          className="minimize-sidebar btn btn-link btn-just-icon"
          onClick={handleMiniClick}
        >
          <i className="tim-icons icon-align-center visible-on-sidebar-regular text-muted" />
          <i className="tim-icons icon-bullet-list-67 visible-on-sidebar-mini text-muted" />
        </button>
      </div>
      <Sidebar
        {...props}
        routes={routes}
        protectedRoutes={protectedRoutes}
        activeColor={activeColor}
        logo={{
          outterLink: "/",
          text: "Demo Website",
          imgSrc: logo,
        }}
        closeSidebar={closeSidebar}
      />
      <div className="main-panel" ref={mainPanelRef} data={activeColor}>
        <AdminNavbar
          {...props}
          handleMiniClick={handleMiniClick}
          brandText={getActiveRoute(routes)}
          sidebarOpened={sidebarOpened}
          toggleSidebar={toggleSidebar}
        />
        <div className="content">
          <Row>
            <Switch>{getRoutes(routes)}</Switch>
            <SidebarRight />
          </Row>
        </div>
        {/* {props.user.authenticated ? (
          <Redirect to="/" />
        ) : (
          <div className="content">
            <Row>
              <Switch>
                {getRoutes(routes)}
              </Switch>
              <SidebarRight />
            </Row>
          </div>
        )} */}

        {
          // we don't want the Footer to be rendered on full screen maps page
          props.location.pathname.indexOf("full-screen-map") !== -1 ? null : (
            <Footer fluid />
          )
        }
      </div>
      {/* <FixedPlugin
        activeColor={activeColor}
        sidebarMini={sidebarMini}
        handleActiveClick={handleActiveClick}
        handleMiniClick={handleMiniClick}
      /> */}
    </div>
  );
};

const mapStateToProps = (state) => ({
  user: state.user,
});

const mapDispatchToProps = {
  logoutUser,
};

export default connect(mapStateToProps, mapDispatchToProps)(AuthLayout__);
