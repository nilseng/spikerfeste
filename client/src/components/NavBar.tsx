import React from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import { FontAwesomeIcon as FaIcon } from "@fortawesome/react-fontawesome";
import {
  faSkiingNordic,
  faBan,
  faKey,
} from "@fortawesome/free-solid-svg-icons";
import { useAuth0 } from "@auth0/auth0-react";

const NavBar = () => {
  const { isLoading, isAuthenticated, loginWithRedirect, logout } = useAuth0();

  return (
    <Navbar variant="dark" expand="md" collapseOnSelect>
      <Navbar.Brand href="/">
        <div className="my-5">
          <h1>Spikerfeste</h1> - fordi bakglatt er kjipern.
        </div>
      </Navbar.Brand>
      <Navbar.Toggle
        className="mb-2"
        aria-controls="basic-navbar-nav"
        style={{ outline: "none" }}
      />
      <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end">
        <Nav>
          {!isLoading && (
            <>
              {isAuthenticated && (
                <>
                  <Nav.Link
                    className="btn btn-sm text-muted mr-2"
                    onClick={() => logout()}
                  >
                    <FaIcon
                      icon={faBan}
                      style={{ marginRight: "0.4rem" }}
                    ></FaIcon>
                    Log out
                  </Nav.Link>
                </>
              )}
              {!isAuthenticated && (
                <>
                  <Nav.Link
                    className="btn btn-sm text-light mr-2"
                    onClick={() => loginWithRedirect()}
                  >
                    <FaIcon
                      icon={faSkiingNordic}
                      style={{ marginRight: "0.4rem" }}
                    ></FaIcon>
                    Logg inn
                  </Nav.Link>
                  <Nav.Link
                    className="btn btn-sm btn-outline-primary text-light mr-2"
                    onClick={() => loginWithRedirect({ screen_hint: "signup" })}
                  >
                    <FaIcon icon={faKey} className="mr-2"></FaIcon>
                    Lag bruker
                  </Nav.Link>
                </>
              )}
            </>
          )}
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default NavBar;
