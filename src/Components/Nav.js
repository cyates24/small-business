import React from "react";
import { AppBar, Toolbar, IconButton, Typography } from "@material-ui/core";
import MenuIcon from "@material-ui/icons/Menu";
import { Link } from "react-router-dom";
import cookie from "cookie";

const Nav = () => {
  const userLogout = e => {
    e.preventDefault();
    document.cookie = "loggedIn=false;max-age=60*1000";
    window.location.replace("/");
  };
  return (
    <AppBar position="relative">
      <Toolbar>
        <IconButton color="inherit">
          <MenuIcon />
        </IconButton>
        <Typography variant="h6" style={{ flexGrow: "1" }}>
          Austin Small Business
        </Typography>
        <ul className="nav-list">
          <li className="nav-list-item">
            <Link to="/">Listings</Link>
          </li>
          {/* <li className="nav-list-item">
                        <Link to="/login">Login</Link>
                    </li> */}
          <li className="nav-list-item">
            <Link to="/addlisting">Add Listing</Link>
          </li>

          <li
            className="nav-list-item"
            onClick={() => {
              document.cookie = "loggedIn=";
              window.location.replace("/login");
            }}
          >
            Logout
          </li>
        </ul>
      </Toolbar>
    </AppBar>
  );
};

export default Nav;
